import Arcane from '../../../../models/Arcane.model'

import getURI from '../../../..//util/getURI'

export default async function asynchandler(req, res, next) {
  try {
    const url = getURI('Arcanes')

    const data = await fetch(url)

    const frames = await data.json()

    let formatData = []

    frames.forEach((result) => {
      if (!result.name.toLowerCase().includes('[Hc]'.toLowerCase()))
        if (!result.name.toLowerCase().includes('[Ph]'.toLowerCase()))
          if (result.name.toLowerCase() !== 'Arcane'.toLowerCase())
            formatData.push(new Arcane(result))
    })

    let uniq = [...new Set(formatData)].reduce((unique, o) => {
      if (!unique.some((obj) => obj.name === o.name)) {
        unique.push(o)
      }
      return unique
    }, [])

    const totalCount = uniq.length
    const section = 'Arcanes'

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