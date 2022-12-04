import Gear from '../../../models/Gear.model'

import getURI from '../../../util/getURI'

export default async function asynchandler(req, res, next) {
  try {
    const url = getURI('Gear')

    const data = await fetch(url)

    const frames = await data.json()

    let formatData = []

    frames.forEach((result) => {
      if (!result.name.toLowerCase().includes('[Hc]'.toLowerCase()))
        if (!result.name.toLowerCase().includes('[Ph]'.toLowerCase()))
          if (!result.name.toLowerCase().includes('Xattractor'.toLowerCase()))
            if (!result.name.toLowerCase().includes('/'.toLowerCase()))
              formatData.push(new Gear(result))
    })

    let uniq = [...new Set(formatData)].reduce((unique, o) => {
      if (!unique.some((obj) => obj.name === o.name)) {
        unique.push(o)
      }
      return unique
    }, [])

    const totalCount = uniq.length
    const section = 'Gear'

    return res.status(200).send({
      status: 'ok',
      section,
      totalCount,
      data: uniq,
    })
  } catch (error) {
    return res.send({
      error,
    })
  }
}
