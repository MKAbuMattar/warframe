const axios = require('axios')
require('dotenv').config()
//env
const API_URL = process.env.API_URL
const API_FORMAT = process.env.API_FORMAT
const CDN_IMG_URL = process.env.CDN_IMG_URL

//Cache Storage
let inCache = require('../inCache/inCache')

class SentinelWeapon {
  constructor(data) {
    this.uniqueName = data.uniqueName
    this.name = data.name
    this.masteryRankRequirement = data.masteryReq
    this.category = data.category
    this.type = data.type
    this.trigger = data.trigger
    this.projectileSpeed = data.flight
    this.projectile = data.projectile
    this.noise = data.noise
    this.fireRate = Math.round(data.fireRate)
    this.accuracy = Number(Number(data.accuracy).toFixed(1))
    this.magazineSize = data.magazineSize
    this.maxAmmo = data.ammo
    this.reloadTime = Number(Number(data.reloadTime).toFixed(1))
    this.disposition = data.disposition
    this.criticalChance = `${Math.round((data.criticalChance) * 100)}%`
    this.criticalMultiplier = `${Number(data.criticalMultiplier).toFixed(1)}×`
    this.statusChance = `${Math.round((data.procChance) * 100)}%`
    this.damageTypes = data.damageTypes
    this.damage = Number(data.damage)
    this.totalDamage = data.totalDamage
    this.polarities = data.polarities
    this.tags = data.tags
    this.description = data.description
    this.imageName = `${CDN_IMG_URL}${data.imageName}`
    this.wikiaUrl = data.wikiaUrl
    this.wikiaThumbnail = data.wikiaThumbnail
    this.releaseDate = data.releaseDate
    this.vaultDate = data.vaultDate
    this.estimatedVaultDate = data.estimatedVaultDate
    this.vaulted = data.vaulted
  }
}

const handelSentinelWeapon = (req, res) => {
  try {
    let formatData = []
    const key = `SentinelWeapons`
    if (inCache[key] && (Date.now() - inCache[key].timestamp < (60 * 60 * 1000))) {
      res.send(inCache[key])
    } else {
      axios({
        method: 'get',
        url: `${API_URL}Primary${API_FORMAT}`,
        responseType: 'json'
      }).then((response) => {
        response.data.forEach(result => {
          if ((result.productCategory).toLowerCase().includes('SentinelWeapons'.toLowerCase()))
            formatData.push((new SentinelWeapon(result)))
        })
        inCache[key] = formatData
        inCache[key].timestamp = Date.now()
        res.send(formatData)
      }).catch((error) => {
        console.log(error)
      })
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = handelSentinelWeapon