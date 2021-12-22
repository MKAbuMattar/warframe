import { useState, useEffect } from 'react'

import axios from 'axios'

import Melee from '../models/Melee.model'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

const useGetMelee = () => {
  const url = `${API_URL}Melee${API_FORMAT}`

  const [getMeleeLoading, setLoading] = useState(true)
  const [getMeleeError, setError] = useState(false)
  const [getMelee, setGetMelee] = useState([])

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
          if (result.type !== '') {
            formatData.push(new Melee(result))
          }
        })

        setGetMelee(
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

  return { getMelee, getMeleeLoading, getMeleeError }
}

export default useGetMelee
