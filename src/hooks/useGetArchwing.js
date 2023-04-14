import { useState, useEffect } from 'react'

import axios from 'axios'

import Archwing from '../models/Archwing.model'

import getURI from '../util/getURI'

const useGetArchwing = () => {
  const url = getURI('Archwing')

  const [getArchwingLoading, setLoading] = useState(true)
  const [getArchwingError, setError] = useState(false)
  const [getArchwing, setGetArchwing] = useState([])

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
          if (result.stamina >= 140) {
            formatData.push(new Archwing(result))
          }
        })

        setGetArchwing(
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

  return { getArchwing, getArchwingLoading, getArchwingError }
}

export default useGetArchwing
