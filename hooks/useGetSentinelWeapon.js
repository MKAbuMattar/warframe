import { useState, useEffect } from 'react'

import axios from 'axios'

import SentinelWeapon from '../models/SentinelWeapon.model'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

const useGetSentinelWeapon = () => {
  const url = `${API_URL}SentinelWeapons${API_FORMAT}`

  const [getSentinelWeaponLoading, setLoading] = useState(true)
  const [getSentinelWeaponError, setError] = useState(false)
  const [getSentinelWeapon, setGetSentinelWeapon] = useState([])

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
          if (
            result.productCategory
              .toLowerCase()
              .includes('SentinelWeapons'.toLowerCase())
          )
            formatData.push(new SentinelWeapon(result))
        })

        setGetSentinelWeapon(
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

  return { getSentinelWeapon, getSentinelWeaponLoading, getSentinelWeaponError }
}

export default useGetSentinelWeapon
