const axios = require('axios')
require('dotenv').config()
//env
const API_URL = process.env.API_URL
const API_FORMAT = process.env.API_FORMAT
const CDN_IMG_URL = process.env.CDN_IMG_URL

//Cache Storage
let inCache = require('../inCache/inCache')

class Archwing {
  constructor(data) {
    this.uniqueName = data.uniqueName
    this.name = data.name
    this.masteryRankRequirement = data.masteryReq
    this.health = data.health
    this.shield = data.shield
    this.armor = data.armor
    this.stamina = data.stamina
    this.energy = data.power
    this.speed = data.sprintSpeed
    this.description = data.description
    this.passiveDescription = data.passiveDescription
    this.abilities = data.abilities
    this.sex = data.sex
    this.auraPolarity = data.aura
    this.polarities = data.polarities
    this.imageName = `${CDN_IMG_URL}${data.imageName}`
    this.wikiaUrl = `https://warframe.fandom.com/wiki/${(data.name).split(' ').join('/')}`
    this.introduced = data.introduced
    this.releaseDate = data.releaseDate
    this.vaultDate = data.vaultDate
    this.estimatedVaultDate = data.estimatedVaultDate
    this.vaulted = data.vaulted
  }
}

const handelArchwing = (req, res) => {
  try {
    let formatData = []
    const key = `Archwing`
    if (inCache[key] && (Date.now() - inCache[key].timestamp < (60 * 60 * 1000))) {
      res.send(inCache[key])
    } else {
      axios({
        method: 'get',
        url: `${API_URL}Archwing${API_FORMAT}`,
        responseType: 'json'
      }).then((response) => {
        response.data.forEach(result => {
          if (result.stamina >= 140) {
            formatData.push((new Archwing(result)))
          }
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

module.exports = handelArchwing