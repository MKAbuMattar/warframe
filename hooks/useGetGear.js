import { useState, useEffect } from 'react'

import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

class Gear {
  constructor(data) {
    this.buildPrice = data.buildPrice
    this.buildQuantity = data.buildQuantity
    this.buildTime = data.buildTime
    this.category = data.category
    this.consumeOnBuild = data.consumeOnBuild
    this.description = data.description
    this.imageName = data.imageName
    this.name = data.name
    this.skipBuildTimePrice = data.skipBuildTimePrice
    this.tradable = data.tradable
    this.type = data.type
    this.uniqueName = data.uniqueName
  }
}

const useGetGear = () => {
  const url = `${API_URL}Gear${API_FORMAT}`

  const [getGearLoading, setLoading] = useState(true)
  const [getGearError, setError] = useState(false)
  const [getGear, setGetGear] = useState([])

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
              if (
                !result.name.toLowerCase().includes('Xattractor'.toLowerCase())
              )
                if (!result.name.toLowerCase().includes('/'.toLowerCase()))
                  formatData.push(new Gear(result))
        })

        setGetGear(
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

  return { getGear, getGearLoading, getGearError }
}

export default useGetGear
