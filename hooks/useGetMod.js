import { useState, useEffect } from 'react'

import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

class Mod {
  constructor(data) {
    this.baseDrain = data.baseDrain
    this.category = data.category
    this.compatName = data.compatName
    this.fusionLimit = data.fusionLimit
    this.imageName = data.imageName
    this.introduced = data.introduced
    this.isAugment = data.isAugment
    this.levelStats = data.levelStats
    this.name = data.name
    this.polarity = data.polarity
    this.rarity = data.rarity
    this.releaseDate = data.releaseDate
    this.tradable = data.tradable
    this.transmutable = data.transmutable
    this.type = data.type
    this.uniqueName = data.uniqueName
    this.wikiaThumbnail = data.wikiaThumbnail
    this.wikiaUrl = data.wikiaUrl
  }
}

const useGetMod = () => {
  const url = `${API_URL}Mods${API_FORMAT}`

  const [getModLoading, setLoading] = useState(true)
  const [getModError, setError] = useState(false)
  const [getMod, setGetMod] = useState([])

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
          formatData.push(new Mod(result))
        })

        setGetMod(
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

  return { getMod, getModLoading, getModError }
}

export default useGetMod
