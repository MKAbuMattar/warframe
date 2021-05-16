const axios = require('axios')
require('dotenv').config()
//env
const API_URL = process.env.API_URL
const API_FORMAT = process.env.API_FORMAT
const CDN_IMG_URL = process.env.CDN_IMG_URL

//Cache Storage
let inCache = require('../inCache/inCache')

class Pet {
  constructor(data) {
    this.uniqueName = data.uniqueName
    this.name = data.name
    this.health = data.health
    this.shield = data.shield
    this.armor = data.armor
    this.energy = data.power
    this.description = data.description
    this.type = data.type
    this.imageName = `${CDN_IMG_URL}${data.imageName}`
    this.wikiaUrl = `https://warframe.fandom.com/wiki/${(data.name).split(' ').join('_')}`
    this.wikiaThumbnail = data.wikiaThumbnail
  }
}
const handelPet = (req, res) => {
  try {
    let formatData = []
    const key = `Pets`
    if (inCache[key] && (Date.now() - inCache[key].timestamp < (60 * 60 * 1000))) {
      res.send(inCache[key])
    } else {
      axios({
        method: 'get',
        url: `${API_URL}Pets${API_FORMAT}`,
        responseType: 'json'
      }).then((response) => {
        response.data.forEach(result => {
          if (!(result.type).toLowerCase().includes('Parts'.toLowerCase()))
            if (!(result.type).toLowerCase().includes('Warframe'.toLowerCase()))
              if (!(result.name).toLowerCase().includes('Gyro'.toLowerCase()))
                if (!(result.name).toLowerCase().includes('Core'.toLowerCase()))
                  if (!(result.name).toLowerCase().includes('Bracket'.toLowerCase()))
                    formatData.push((new Pet(result)))
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

module.exports = handelPet