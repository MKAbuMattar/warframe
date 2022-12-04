import { useState, useEffect } from 'react'

import axios from 'axios'

import Primary from '../models/Primary.model'

import getURI from '../util/getURI'

const useGetPrimary = () => {
  const url = getURI('Primary')

  const [getPrimaryLoading, setLoading] = useState(true)
  const [getPrimaryError, setError] = useState(false)
  const [getPrimary, setGetPrimary] = useState([])

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
          if (!result.productCategory.toLowerCase().includes('SentinelWeapons'.toLowerCase())) {
            if (!result.productCategory.toLowerCase().includes('SpaceGuns'.toLowerCase())) {
              formatData.push(new Primary(result))
            }
          }
        })

        setGetPrimary(
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

  return { getPrimary, getPrimaryLoading, getPrimaryError }
}

export default useGetPrimary
