import { useState, useEffect } from 'react'

import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

class Miscellaneous {
  constructor(data) {
    this.description = data.description
    this.imageName = data.name === 'Forma' ? 'forma.png' : data.imageName
    this.name = data.name
    this.type = data.type
    this.uniqueName = data.uniqueName
  }
}

const useGetMiscellaneous = () => {
  const url = `${API_URL}Misc${API_FORMAT}`

  const [getMiscellaneousLoading, setLoading] = useState(true)
  const [getMiscellaneousError, setError] = useState(false)
  const [getMiscellaneous, setGetMiscellaneous] = useState([])

  let formatData = []

  useEffect(() => {
    setLoading(true)
    setError(false)

    let cansle

    axios({
      method: 'GET',
      url: `${url}`,
      cancelToken: new axios.CancelToken((c) => (cansle = c)),
    })
      .then((res) => {
        res.data.forEach((result) => {
          if (!result.name.toLowerCase().includes('/'.toLowerCase()))
            if (!result.name.toLowerCase().includes('endo'.toLowerCase()))
              if (!result.name.toLowerCase().includes('booster'.toLowerCase()))
                if (!result.name.toLowerCase().includes('Alert'.toLowerCase()))
                  if (
                    !result.name
                      .toLowerCase()
                      .includes(
                        'Evergreenloginrewardfusionbundle'.toLowerCase(),
                      )
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

        setGetMiscellaneous(
          [...new Set(formatData)].reduce((unique, o) => {
            if (!unique.some((obj) => obj.name === o.name)) {
              unique.push(o)
            }
            return unique
          }, []),
        )
        setLoading(false)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cansle()
  }, [])

  return { getMiscellaneous, getMiscellaneousLoading, getMiscellaneousError }
}

export default useGetMiscellaneous
