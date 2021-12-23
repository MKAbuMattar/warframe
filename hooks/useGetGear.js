import { useState, useEffect } from 'react'

import axios from 'axios'

import Gear from '../models/Gear.model'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

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
