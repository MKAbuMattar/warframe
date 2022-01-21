import { useState, useEffect } from 'react'

import axios from 'axios'

import Secondary from '../models/Secondary.model'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

const useGetSecondary = () => {
  const url = `${API_URL}Secondary${API_FORMAT}`

  const [getSecondaryLoading, setLoading] = useState(true)
  const [getSecondaryError, setError] = useState(false)
  const [getSecondary, setGetSecondary] = useState([])

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
        console.log({ result: res.data })
        res.data.forEach((result) => {
          if (result.type !== '') {
            formatData.push(new Secondary(result))
          }
        })
        let uniq = [...new Set(formatData)]
        console.log({ uniq })
        setGetSecondary(uniq)
        setLoading(false)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cansle()
  }, [])

  return { getSecondary, getSecondaryLoading, getSecondaryError }
}

export default useGetSecondary
