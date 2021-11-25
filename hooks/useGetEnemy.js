import { useState, useEffect } from 'react'

import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

class Enemy {
  constructor(data) {
    this.armor = data.armor
    this.category = data.category
    this.description = data.description
    this.drops = data.drops
    this.health = data.health
    this.imageName = data.imageName
    this.name = data.name
    this.regionBits = data.regionBits
    this.resistances = data.resistances
    this.shield = data.shield
    this.type = data.type
    this.uniqueName = data.uniqueName
  }
}

const useGetEnemy = () => {
  const url = `${API_URL}Enemy${API_FORMAT}`

  const [getEnemyLoading, setLoading] = useState(true)
  const [getEnemyError, setError] = useState(false)
  const [getEnemy, setGetEnemy] = useState([])

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
          if (result.name.toLowerCase() !== 'Kuva'.toLowerCase())
            if (result.name.toLowerCase() !== 'Commander'.toLowerCase())
              if (result.name.toLowerCase() !== 'Zanuka'.toLowerCase())
                formatData.push(new Enemy(result))
        })

        setGetEnemy(
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

  return { getEnemy, getEnemyLoading, getEnemyError }
}

export default useGetEnemy
