import Miscellaneous from '../../../models/Miscellaneous.model'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

export default async function asynchandler(req, res, next) {
  try {
    const url = `${API_URL}Misc${API_FORMAT}`

    const data = await fetch(url)

    const frames = await data.json()

    let formatData = []

    frames.forEach((result) => {
      if (!result.name.toLowerCase().includes('/'.toLowerCase()))
        if (!result.name.toLowerCase().includes('endo'.toLowerCase()))
          if (!result.name.toLowerCase().includes('booster'.toLowerCase()))
            if (!result.name.toLowerCase().includes('Alert'.toLowerCase()))
              if (
                !result.name
                  .toLowerCase()
                  .includes('Evergreenloginrewardfusionbundle'.toLowerCase())
              )
                if (result.name.toLowerCase() !== 'Kuva'.toLowerCase())
                  if (
                    !result.name
                      .toLowerCase()
                      .includes('Legendarymodfuser'.toLowerCase())
                  )
                    if (
                      !result.name
                        .toLowerCase()
                        .includes('Libraryscannerupgrade'.toLowerCase())
                    )
                      if (
                        !result.name
                          .toLowerCase()
                          .includes('Loginrewardfusionbundle'.toLowerCase())
                      )
                        if (
                          !result.name
                            .toLowerCase()
                            .includes('Lotus'.toLowerCase())
                        )
                          if (
                            !result.name
                              .toLowerCase()
                              .includes('Markettier'.toLowerCase())
                          )
                            if (
                              !result.name
                                .toLowerCase()
                                .includes('Mpvsinglep'.toLowerCase())
                            )
                              if (
                                !result.name
                                  .toLowerCase()
                                  .includes(
                                    'Mpvdualpackfusionbundle'.toLowerCase(),
                                  )
                              )
                                if (
                                  !result.name
                                    .toLowerCase()
                                    .includes('Omega Forma'.toLowerCase())
                                )
                                  if (
                                    !result.name
                                      .toLowerCase()
                                      .includes('Orofusexf'.toLowerCase())
                                  )
                                    if (
                                      !result.name
                                        .toLowerCase()
                                        .includes(
                                          'Nightwatchfusionbundle'.toLowerCase(),
                                        )
                                    )
                                      if (
                                        !result.name
                                          .toLowerCase()
                                          .includes(
                                            'Orokincatalystblueprint'.toLowerCase(),
                                          )
                                      )
                                        if (
                                          !result.name
                                            .toLowerCase()
                                            .includes(
                                              'Orokinreactorblueprint'.toLowerCase(),
                                            )
                                        )
                                          if (
                                            !result.name
                                              .toLowerCase()
                                              .includes(
                                                'Photoboothtile'.toLowerCase(),
                                              )
                                          )
                                            if (
                                              !result.name
                                                .toLowerCase()
                                                .includes(
                                                  'Playermeleeweaponrandommodrare'.toLowerCase(),
                                                )
                                            )
                                              if (
                                                !result.name
                                                  .toLowerCase()
                                                  .includes(
                                                    'Purgatory'.toLowerCase(),
                                                  )
                                              )
                                                if (
                                                  !result.name
                                                    .toLowerCase()
                                                    .includes(
                                                      'Rarefusionbundle'.toLowerCase(),
                                                    )
                                                )
                                                  if (
                                                    !result.name
                                                      .toLowerCase()
                                                      .includes(
                                                        'Solarisminingtoolupgrade'.toLowerCase(),
                                                      )
                                                  )
                                                    if (
                                                      !result.name
                                                        .toLowerCase()
                                                        .includes(
                                                          'Dogtag'.toLowerCase(),
                                                        )
                                                    )
                                                      if (
                                                        !result.name
                                                          .toLowerCase()
                                                          .includes(
                                                            'Axi Relic'.toLowerCase(),
                                                          )
                                                      )
                                                        if (
                                                          !result.name
                                                            .toLowerCase()
                                                            .includes(
                                                              'Auxiliary Forma Crucible'.toLowerCase(),
                                                            )
                                                        )
                                                          if (
                                                            !result.name
                                                              .toLowerCase()
                                                              .includes(
                                                                'Utilityunlocker'.toLowerCase(),
                                                              )
                                                          )
                                                            formatData.push(
                                                              new Miscellaneous(
                                                                result,
                                                              ),
                                                            )
    })

    let uniq = [...new Set(formatData)].reduce((unique, o) => {
      if (!unique.some((obj) => obj.name === o.name)) {
        unique.push(o)
      }
      return unique
    }, [])

    const totalCount = uniq.length
    const section = 'Miscellaneous'

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
