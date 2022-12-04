import { useState, useEffect } from 'react'

import axios from 'axios'

import Necramech from '../models/Necramech.model'

import getURI from '../util/getURI'

const useGetNecramech = () => {
  const url = getURI('Warframes')

  const [getNecramechLoading, setLoading] = useState(true)
  const [getNecramechError, setError] = useState(false)
  const [getNecramech, setGetNecramech] = useState([])

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
          if (result.stamina > 180) {
            formatData.push(new Necramech(result))
          }
        })

        setGetNecramech(
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

  return { getNecramech, getNecramechLoading, getNecramechError }
}

export default useGetNecramech
