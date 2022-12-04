import Pet from '../../../../models/Pet.model'

import getURI from '../../../../util/getURI'

export default async function asynchandler(req, res, next) {
  try {
    const url = getURI('Pets')

    const data = await fetch(url)

    const frames = await data.json()

    let formatData = []

    frames.forEach((result) => {
      if (!result.type.toLowerCase().includes('Parts'.toLowerCase()))
        if (!result.type.toLowerCase().includes('Warframe'.toLowerCase()))
          if (!result.name.toLowerCase().includes('Gyro'.toLowerCase()))
            if (!result.name.toLowerCase().includes('Core'.toLowerCase()))
              if (!result.name.toLowerCase().includes('Bracket'.toLowerCase()))
                if (!result.name.toLowerCase().includes('Stabilizer'.toLowerCase()))
                  formatData.push(new Pet(result))
    })

    let uniq = [...new Set(formatData)].reduce((unique, o) => {
      if (!unique.some((obj) => obj.name === o.name)) {
        unique.push(o)
      }
      return unique
    }, [])

    const totalCount = uniq.length
    const section = 'Pet'

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
