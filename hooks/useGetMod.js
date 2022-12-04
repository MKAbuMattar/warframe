import { useState, useEffect } from 'react'

import axios from 'axios'

import Mod from '../models/Mod.model'

import getURI from '../util/getURI'

const useGetMod = () => {
  const url = getURI('Mods')

  const [getModLoading, setLoading] = useState(true)
  const [getModError, setError] = useState(false)
  const [getMod, setGetMod] = useState([])

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
          if (result.name.toLowerCase() !== 'Do Not Use'.toLowerCase())
            formatData.push(new Mod(result))
        })

        setGetMod(
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

  return { getMod, getModLoading, getModError }
}

export default useGetMod
