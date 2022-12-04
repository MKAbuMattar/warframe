import { useState, useEffect } from 'react'

import axios from 'axios'

import Pet from '../models/Pet.model'

import getURI from '../util/getURI'

const useGetPet = () => {
  const url = getURI('Pets')

  const [getPetLoading, setLoading] = useState(true)
  const [getPetError, setError] = useState(false)
  const [getPet, setGetPet] = useState([])

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
          if (!result.type.toLowerCase().includes('Parts'.toLowerCase()))
            if (!result.type.toLowerCase().includes('Warframe'.toLowerCase()))
              if (!result.name.toLowerCase().includes('Gyro'.toLowerCase()))
                if (!result.name.toLowerCase().includes('Core'.toLowerCase()))
                  if (!result.name.toLowerCase().includes('Bracket'.toLowerCase()))
                    if (!result.name.toLowerCase().includes('Stabilizer'.toLowerCase()))
                      formatData.push(new Pet(result))
        })

        setGetPet(
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

  return { getPet, getPetLoading, getPetError }
}

export default useGetPet
