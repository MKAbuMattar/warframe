import { useState, useEffect } from 'react'

import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

class Pet {
  constructor(data) {
    this.armor = data.armor
    this.category = data.category
    this.description = data.description
    this.health = data.health
    this.imageName = data.imageName
    this.name = data.name
    this.power = data.power
    this.productCategory = data.productCategory
    this.shield = data.shield
    this.stamina = data.stamina
    this.tradable = data.tradable
    this.type = data.type
    this.uniqueName = data.uniqueName
  }
}

const useGetPet = () => {
  const url = `${API_URL}Pets${API_FORMAT}`

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
                  if (
                    !result.name.toLowerCase().includes('Bracket'.toLowerCase())
                  )
                    if (
                      !result.name
                        .toLowerCase()
                        .includes('Stabilizer'.toLowerCase())
                    )
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
