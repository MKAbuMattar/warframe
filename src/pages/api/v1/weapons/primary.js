import Primary from '../../../../models/Primary.model'

import getURI from '../../../../util/getURI'

export default async function asynchandler(req, res, next) {
  try {
    const url = getURI('Primary')

    const data = await fetch(url)

    const frames = await data.json()

    let formatData = []

    frames.forEach((result) => {
      if (!result.productCategory.toLowerCase().includes('SentinelWeapons'.toLowerCase())) {
        if (!result.productCategory.toLowerCase().includes('SpaceGuns'.toLowerCase())) {
          formatData.push(new Primary(result))
        }
      }
    })

    let uniq = [...new Set(formatData)].reduce((unique, o) => {
      if (!unique.some((obj) => obj.name === o.name)) {
        unique.push(o)
      }
      return unique
    }, [])

    const totalCount = uniq.length
    const section = 'Primary Weapon'

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