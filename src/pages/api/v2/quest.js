import getPaginationParams from '../../../util/getPaginationParams/getPaginationParams'

import Quest from '../../../models/Quest.model'

import getURI from '../../../util/getURI'

export default async function asynchandler(req, res, next) {
  try {
    const { limit, skip, page } = getPaginationParams(req.query)

    const url = getURI('Quests')

    const data = await fetch(url)

    const frames = await data.json()

    let formatData = []

    frames.forEach((result) => {
      if (!result.name.toLowerCase().includes('[hc]'.toLowerCase()))
        if (!result.name.toLowerCase().includes('Clan Key'.toLowerCase()))
          formatData.push(new Quest(result))
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
    const section = 'Quest'

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