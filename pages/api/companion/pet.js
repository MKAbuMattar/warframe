import getPaginationParams from '../../../util/getPaginationParams/getPaginationParams'

import Pet from '../../../models/Pet.model'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

export default async function asynchandler(req, res, next) {
  try {
    const { limit, skip, page } = getPaginationParams(req.query)

    const url = `${API_URL}Pets${API_FORMAT}`

    const data = await fetch(url)

    const frames = await data.json()

    let formatData = []

    frames.forEach((result) => {
      if (!result.type.toLowerCase().includes('Parts'.toLowerCase()))
        if (!result.type.toLowerCase().includes('Warframe'.toLowerCase()))
          if (!result.name.toLowerCase().includes('Gyro'.toLowerCase()))
            if (!result.name.toLowerCase().includes('Core'.toLowerCase()))
              if (!result.name.toLowerCase().includes('Bracket'.toLowerCase()))
                if (
                  !result.name
                    .toLowerCase()
                    .includes('Stabilizer'.toLowerCase())
                )
                  formatData.push(new Pet(result))
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

    return res.status(200).send({
      status: 'ok',
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
