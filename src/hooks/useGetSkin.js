import { useState, useEffect } from 'react'

import axios from 'axios'

import getURI from '../util/getURI'

class Skin {
  constructor(data) {
    this.accuracy = data.accuracy
  }
}

const useGetSkin = () => {
  const url = getURI('Skins')

  const [getSkinLoading, setLoading] = useState(true)
  const [getSkinError, setError] = useState(false)
  const [getSkin, setGetSkin] = useState([])

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
          if (!result.name.toLowerCase().includes('/'.toLowerCase())) formatData.push(result)
        })

        setGetSkin(
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

  return { getSkin, getSkinLoading, getSkinError }
}

export default useGetSkin
