import getPaginationParams from '../../../../util/getPaginationParams/getPaginationParams'

import Mod from '../../../../models/Mod.model'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

export default async function asynchandler(req, res, next) {
  try {
    const { limit, skip, page } = getPaginationParams(req.query)

    const url = `${API_URL}Mods${API_FORMAT}`

    const data = await fetch(url)

    const frames = await data.json()

    let formatData = []

    frames.forEach((result) => {
      if (result.name.toLowerCase() !== 'Do Not Use'.toLowerCase()) {
        formatData.push(new Mod(result))
      }
    })

    let uniq = [...new Set(formatData)].reduce((unique, o) => {
      if (!unique.some((obj) => obj.name === o.name)) {
        unique.push(o)
      }
      return unique
    }, [])

    const totalCount = uniq.length
    const totalPages = Math.ceil(uniq.length / limit)
    const lastItemIndex = limit + skip
    const section = 'Mods'

    return res.status(200).send({
      status: 'ok',
      section,
      totalCount,
      page,
      totalPages,
      lastItemIndex: lastItemIndex > totalCount ? null : lastItemIndex,
      data: uniq.slice(skip, skip + limit),
    })
  } catch (error) {
    return res.send({
      error,
    })
  }
}
