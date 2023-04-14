import { useState, useEffect } from 'react'

import axios from 'axios'

import getURI from '../util/getURI'

class Fish {
  constructor(data) {
    this.category = data.category
    this.description = data.description
    this.imageName = data.imageName
    this.name = data.name
    this.tradable = data.tradable
    this.type = data.type
  }
}

const useGetFish = () => {
  const url = getURI('Fish')

  const [getFishLoading, setLoading] = useState(true)
  const [getFishError, setError] = useState(false)
  const [getFish, setGetFish] = useState([])

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
          formatData.push(new Fish(result))
        })

        setGetFish(
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

  return { getFish, getFishLoading, getFishError }
}

export default useGetFish
