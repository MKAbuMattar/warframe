import { useState, useEffect } from 'react'

import axios from 'axios'

import Sentinel from '../models/Sentinel.model'

import getURI from '../util/getURI'

const useGetSentinel = () => {
  const url = getURI('Sentinels')

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
