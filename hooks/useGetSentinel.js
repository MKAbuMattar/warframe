import { useState, useEffect } from 'react'

import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

class Sentinel {
  constructor(data) {
    this.armor = data.armor
    this.buildPrice = data.buildPrice
    this.buildQuantity = data.buildQuantity
    this.buildTime = data.buildTime
    this.category = data.category
    this.consumeOnBuild = data.consumeOnBuild
    this.description = data.description
    this.estimatedVaultDate = data.estimatedVaultDate
    this.health = data.health
    this.imageName = data.imageName
    this.name = data.name
    this.power = data.power
    this.productCategory = data.productCategory
    this.releaseDate = data.releaseDate
    this.shield = data.shield
    this.skipBuildTimePrice = data.skipBuildTimePrice
    this.stamina = data.stamina
    this.tradable = data.tradable
    this.type = data.type
    this.uniqueName = data.uniqueName
    this.vaultDate = data.vaultDate
    this.vaulted = data.vaulted
  }
}

const useGetSentinel = () => {
  const url = `${API_URL}Sentinels${API_FORMAT}`

  const [getSentinelLoading, setLoading] = useState(true)
  const [getSentinelError, setError] = useState(false)
  const [getSentinel, setGetSentinel] = useState([])

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
          formatData.push(new Sentinel(result))
        })

        setGetSentinel(
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

  return { getSentinel, getSentinelLoading, getSentinelError }
}

export default useGetSentinel
