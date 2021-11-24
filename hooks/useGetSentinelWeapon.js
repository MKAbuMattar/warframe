import { useState, useEffect } from 'react'

import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

class SentinelWeapon {
  constructor(data) {
    this.accuracy = data.accuracy
    this.ammo = data.ammo
    this.attacks = data.attacks
    this.blockingAngle = data.blockingAngle
    this.category = data.category
    this.criticalChance = data.criticalChance
    this.criticalMultiplier = data.criticalMultiplier
    this.damagePerShot = data.damagePerShot
    this.description = data.description
    this.disposition = data.disposition
    this.excludeFromCodex = data.excludeFromCodex
    this.fireRate = data.fireRate
    this.imageName = data.imageName
    this.introduced = data.introduced
    this.masteryReq = data.masteryReq
    this.name = data.name
    this.noise = data.noise
    this.omegaAttenuation = data.omegaAttenuation
    this.polarities = data.polarities
    this.procChance = data.procChance
    this.productCategory = data.productCategory
    this.releaseDate = data.releaseDate
    this.sentinel = data.sentinel
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

const useGetSentinelWeapon = () => {
  const url = `${API_URL}SentinelWeapons${API_FORMAT}`

  const [getSentinelWeaponLoading, setLoading] = useState(true)
  const [getSentinelWeaponError, setError] = useState(false)
  const [getSentinelWeapon, setGetSentinelWeapon] = useState([])

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
          if (
            result.productCategory
              .toLowerCase()
              .includes('SentinelWeapons'.toLowerCase())
          )
            formatData.push(new SentinelWeapon(result))
        })

        setGetSentinelWeapon(
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

  return { getSentinelWeapon, getSentinelWeaponLoading, getSentinelWeaponError }
}

export default useGetSentinelWeapon
