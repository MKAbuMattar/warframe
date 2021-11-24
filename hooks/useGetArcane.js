import { useState, useEffect } from 'react'

import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

class Arcane {
  constructor(data) {
    this.imageName = data.imageName
    this.levelStats = data.levelStats
    this.name = data.name
    this.rarity = data.rarity
    this.tradable = data.tradable
    this.uniqueName = data.uniqueName
  }
}

const useGetArcane = () => {
  const url = `${API_URL}Arcanes${API_FORMAT}`

  const [getArcaneLoading, setLoading] = useState(true)
  const [getArcaneError, setError] = useState(false)
  const [getArcane, setGetArcane] = useState([])

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
          if (!result.name.toLowerCase().includes('[Hc]'.toLowerCase()))
            if (!result.name.toLowerCase().includes('[Ph]'.toLowerCase()))
              if (result.name.toLowerCase() !== 'Arcane'.toLowerCase())
                formatData.push(new Arcane(result))
        })

        setGetArcane(
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

  return { getArcane, getArcaneLoading, getArcaneError }
}

export default useGetArcane
