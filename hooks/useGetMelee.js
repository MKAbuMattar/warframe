import { useState, useEffect } from 'react'

import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const API_FORMAT = process.env.NEXT_PUBLIC_API_FORMAT

class Melee {
  constructor(data) {
    this.attacks = data.attacks
    this.blockingAngle = data.blockingAngle
    this.buildPrice = data.buildPrice
    this.buildQuantity = data.buildQuantity
    this.buildTime = data.buildTime
    this.category = data.category
    this.comboDuration = data.comboDuration
    this.consumeOnBuild = data.consumeOnBuild
    this.criticalChance = data.criticalChance
    this.criticalMultiplier = data.criticalMultiplier
    this.damagePerShot = data.damagePerShot
    this.description = data.description
    this.disposition = data.disposition
    this.estimatedVaultDate = data.estimatedVaultDate
    this.fireRate = data.fireRate
    this.followThrough = data.followThrough
    this.heavyAttackDamage = data.heavyAttackDamage
    this.heavySlamAttack = data.heavySlamAttack
    this.heavySlamRadialDamage = data.heavySlamRadialDamage
    this.heavySlamRadius = data.heavySlamRadius
    this.imageName = data.imageName
    this.introduced = data.introduced
    this.masteryReq = data.masteryReq
    this.name = data.name
    this.omegaAttenuation = data.omegaAttenuation
    this.polarities = data.polarities
    this.procChance = data.procChance
    this.productCategory = data.productCategory
    this.range = data.range
    this.releaseDate = data.releaseDate
    this.skipBuildTimePrice = data.skipBuildTimePrice
    this.slamAttack = data.slamAttack
    this.slamRadialDamage = data.slamRadialDamage
    this.slamRadius = data.slamRadius
    this.slideAttack = data.slideAttack
    this.slot = data.slot
    this.stancePolarity = data.stancePolarity
    this.tags = data.tags
    this.totalDamage = data.totalDamage
    this.tradable = data.tradable
    this.type = data.type
    this.uniqueName = data.uniqueName
    this.vaultDate = data.vaultDate
    this.vaulted = data.vaulted
    this.wikiaThumbnail = data.wikiaThumbnail
    this.wikiaUrl = data.wikiaUrl
    this.windUp = data.windUp
  }
}

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
