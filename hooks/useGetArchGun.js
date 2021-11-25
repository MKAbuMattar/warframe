import { useState, useEffect } from 'react'

import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

class ArchGun {
  constructor(data) {
    this.accuracy = data.accuracy
    this.ammo = data.ammo
    this.attacks = data.attacks
    this.buildPrice = data.buildPrice
    this.buildQuantity = data.buildQuantity
    this.buildTime = data.buildTime
    this.category = data.category
    this.consumeOnBuild = data.consumeOnBuild
    this.criticalChance = data.criticalChance
    this.criticalMultiplier = data.criticalMultiplier
    this.damagePerShot = data.damagePerShot
    this.description = data.description
    this.disposition = data.disposition
    this.fireRate = data.fireRate
    this.imageName = data.imageName
    this.introduced = data.introduced
    this.magazineSize = data.magazineSize
    this.masteryReq = data.masteryReq
    this.multishot = data.multishot
    this.name = data.name
    this.noise = data.noise
    this.omegaAttenuation = data.omegaAttenuation
    this.polarities = data.polarities
    this.procChance = data.procChance
    this.productCategory = data.productCategory
    this.releaseDate = data.releaseDate
    this.reloadTime = data.reloadTime
    this.skipBuildTimePrice = data.skipBuildTimePrice
    this.slot = data.slot
    this.tags = data.tags
    this.totalDamage = data.totalDamage
    this.tradable = data.tradable
    this.trigger = data.trigger
    this.type = data.type
    this.uniqueName = data.uniqueName
    this.wikiaThumbnail = data.wikiaThumbnail
    this.wikiaUrl = data.wikiaUrl
  }
}

const useGetArchGun = () => {
  const url = `${API_URL}Arch-Gun${API_FORMAT}`

  const [getArchGunLoading, setLoading] = useState(true)
  const [getArchGunError, setError] = useState(false)
  const [getArchGun, setGetArchGun] = useState([])

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
          formatData.push(new ArchGun(result))
        })

        setGetArchGun(
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

  return { getArchGun, getArchGunLoading, getArchGunError }
}

export default useGetArchGun