import { useState, useEffect } from 'react'

import axios from 'axios'

import ArchGun from '../models/ArchGun.model'

import getURI from '../util/getURI'

const useGetArchGun = () => {
  const url = getURI('Arch-Gun')

  const [getArchGunLoading, setLoading] = useState(true)
  const [getArchGunError, setError] = useState(false)
  const [getArchGun, setGetArchGun] = useState([])

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
          formatData.push(new ArchGun(result))
        })

        setGetArchGun(
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

  return { getArchGun, getArchGunLoading, getArchGunError }
}

export default useGetArchGun
