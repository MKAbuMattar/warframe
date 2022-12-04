import Necramech from '../../../../models/Necramech.model'

import getURI from '../../../../util/getURI'

export default async function asynchandler(req, res, next) {
  try {
    const url = getURI('Warframes')

    const data = await fetch(url)

    const frames = await data.json()

    let formatData = []

    frames.forEach((result) => {
      if (result.stamina > 180) {
        formatData.push(new Necramech(result))
      }
    })

    let uniq = [...new Set(formatData)].reduce((unique, o) => {
      if (!unique.some((obj) => obj.name === o.name)) {
        unique.push(o)
      }
      return unique
    }, [])

    const totalCount = uniq.length
    const section = 'Necramech'

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
