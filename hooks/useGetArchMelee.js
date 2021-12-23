import { useState, useEffect } from 'react'

import axios from 'axios'

import ArchMelee from '../models/ArchMelee.model'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

const useGetArchMelee = () => {
  const url = `${API_URL}Arch-Melee${API_FORMAT}`

  const [getArchMeleeLoading, setLoading] = useState(true)
  const [getArchMeleeError, setError] = useState(false)
  const [getArchMelee, setGetArchMelee] = useState([])

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
          formatData.push(new ArchMelee(result))
        })

        setGetArchMelee(
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

  return { getArchMelee, getArchMeleeLoading, getArchMeleeError }
}

export default useGetArchMelee
