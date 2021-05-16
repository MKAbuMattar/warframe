const axios = require('axios')
require('dotenv').config()
//env
const API_URL = process.env.API_URL
const API_FORMAT = process.env.API_FORMAT
const CDN_IMG_URL = process.env.CDN_IMG_URL

//Cache Storage
let inCache = require('../inCache/inCache')

class Quest {
  constructor(data) {
    this.uniqueName = data.uniqueName
    this.name = data.name
    this.description = data.description
    this.imageName = `${CDN_IMG_URL}${data.imageName}`
    this.wikiaUrl = `https://warframe.fandom.com/wiki/${(data.name).split(' ').join('_')}`
    this.wikiaThumbnail = data.wikiaThumbnail
  }
}
const handelQuest = (req, res) => {
  try {
    let formatData = []
    const key = `Quests`
    if (inCache[key] && (Date.now() - inCache[key].timestamp < (60 * 60 * 1000))) {
      res.send(inCache[key])
    } else {
      axios({
        method: 'get',
        url: `${API_URL}Quests${API_FORMAT}`,
        responseType: 'json'
      }).then((response) => {
        response.data.forEach(result => {
          if (!(result.name).toLowerCase().includes('[hc]'.toLowerCase()))
            formatData.push((new Quest(result)))
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

module.exports = handelQuest