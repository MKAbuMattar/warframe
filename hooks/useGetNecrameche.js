import { useState, useEffect } from 'react'

import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

class Necrameche {
  constructor(data) {
    this.abilities = data.abilities
    this.armor = data.armor
    this.buildPrice = data.buildPrice
    this.buildQuantity = data.buildQuantity
    this.buildTime = data.buildTime
    this.category = data.category
    this.consumeOnBuild = data.consumeOnBuild
    this.description = data.description
    this.exalted = data.exalted
    this.health = data.health
    this.imageName = data.imageName
    this.masteryReq = data.masteryReq
    this.name = data.name
    this.power = data.power
    this.productCategory = data.productCategory
    this.shield = data.shield
    this.skipBuildTimePrice = data.skipBuildTimePrice
    this.sprintSpeed = data.sprintSpeed
    this.stamina = data.stamina
    this.tradable = data.tradable
    this.type = data.type
    this.uniqueName = data.uniqueName
  }
}

const useGetNecrameche = () => {
  const url = `${API_URL}Warframes${API_FORMAT}`

  const [getNecramecheLoading, setLoading] = useState(true)
  const [getNecramecheError, setError] = useState(false)
  const [getNecrameche, setGetNecrameche] = useState([])

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
            formatData.push(new Necrameche(result))
          }
        })

        setGetNecrameche(
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

  return { getNecrameche, getNecramecheLoading, getNecramecheError }
}

export default useGetNecrameche
