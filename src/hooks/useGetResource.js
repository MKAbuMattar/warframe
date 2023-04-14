import { useState, useEffect } from 'react'

import axios from 'axios'

import Resource from '../models/Resource.model'

import getURI from '../util/getURI'

const useGetResource = () => {
  const url = getURI('Resources')

  const [getResourceLoading, setLoading] = useState(true)
  const [getResourceError, setError] = useState(false)
  const [getResource, setGetResource] = useState([])

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
          if (!result.name.toLowerCase().includes('[Ph]'.toLowerCase()))
            if (!result.name.toLowerCase().includes('[hc]'.toLowerCase()))
              if (!result.name.toLowerCase().includes('/'.toLowerCase()))
                if (!result.name.toLowerCase().includes('Entratifragmentbase'.toLowerCase()))
                  formatData.push(new Resource(result))
        })

        setGetResource(
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

  return { getResource, getResourceLoading, getResourceError }
}

export default useGetResource
