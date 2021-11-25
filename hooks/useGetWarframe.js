import { useState, useEffect } from 'react'

import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

class Warframe {
  constructor(data) {
    this.abilities = data.abilities
    this.armor = data.armor
    this.aura = data.aura
    this.buildPrice = data.buildPrice
    this.buildQuantity = data.buildQuantity
    this.buildTime = data.buildTime
    this.category = data.category
    this.color = data.color
    this.conclave = data.conclave
    this.consumeOnBuild = data.consumeOnBuild
    this.description = data.description
    this.exalted = data.exalted
    this.health = data.health
    this.imageName = data.imageName
    this.introduced = data.introduced
    this.masteryReq = data.masteryReq
    this.name = data.name
    this.passiveDescription = data.passiveDescription
    this.polarities = data.polarities
    this.power = data.power
    this.productCategory = data.productCategory
    this.sex = data.sex
    this.shield = data.shield
    this.skipBuildTimePrice = data.skipBuildTimePrice
    this.sprint = data.sprint
    this.sprintSpeed = data.sprintSpeed
    this.stamina = data.stamina
    this.tradable = data.tradable
    this.type = data.type
    this.uniqueName = data.uniqueName
    this.wikiaThumbnail = data.wikiaThumbnail
    this.wikiaUrl = data.wikiaUrl
    this.releaseDate = data.releaseDate
    this.estimatedVaultDate = data.estimatedVaultDate
    this.vaultDate = data.vaultDate
    this.vaulted = data.vaulted
  }
}

const useGetWarframe = () => {
  const url = `${API_URL}Warframes${API_FORMAT}`

  const [getWarframeLoading, setLoading] = useState(true)
  const [getWarframeError, setError] = useState(false)
  const [getWarframe, setGetWarframe] = useState([])

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
          if (result.stamina <= 5) {
            formatData.push(new Warframe(result))
          }
        })
        let uniq = [...new Set(formatData)]
        setGetWarframe(uniq)
        setLoading(false)
      })
      .catch((e) => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cansle()
  }, [])

  return { getWarframe, getWarframeLoading, getWarframeError }
}

export default useGetWarframe
