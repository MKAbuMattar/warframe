const axios = require('axios')
require('dotenv').config()
//env
const API_URL = process.env.API_URL
const API_FORMAT = process.env.API_FORMAT
const CDN_IMG_URL = process.env.CDN_IMG_URL

//Cache Storage
let inCache = require('../inCache/inCache')

class Mod {
  constructor(data) {
    this.uniqueName = data.uniqueName
    this.name = data.name
    this.polarity = data.polarity
    this.rarity = data.rarity
    this.compatName = data.compatName
    this.type = data.type
    this.levelStats = data.levelStats
    this.imageName = `${CDN_IMG_URL}${data.imageName}`
    this.wikiaUrl = data.wikiaUrl
    this.wikiaThumbnail = data.wikiaThumbnail
  }
}

const handelMod = (req, res) => {
  try {
    let formatData = []
    const key = `Mod`
    if (inCache[key] && (Date.now() - inCache[key].timestamp < (60 * 60 * 1000))) {
      res.send(inCache[key])
    } else {
      axios({
        method: 'get',
        url: `${API_URL}Mods${API_FORMAT}`,
        responseType: 'json'
      }).then((response) => {
        response.data.forEach(result => {
          formatData.push((new Mod(result)))
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

module.exports = handelMod