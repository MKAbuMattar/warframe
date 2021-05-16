const axios = require('axios')
require('dotenv').config()
//env
const API_URL = process.env.API_URL
const API_FORMAT = process.env.API_FORMAT
const CDN_IMG_URL = process.env.CDN_IMG_URL

//Cache Storage
let inCache = require('../inCache/inCache')

class Resource {
  constructor(data) {
    this.uniqueName = data.uniqueName
    this.name = data.name
    this.description = data.description
    this.imageName = `${CDN_IMG_URL}${data.imageName}`
  }
}
const handelResource = (req, res) => {
  try {
    let formatData = []
    const key = `Resources`
    if (inCache[key] && (Date.now() - inCache[key].timestamp < (60 * 60 * 1000))) {
      res.send(inCache[key])
    } else {
      axios({
        method: 'get',
        url: `${API_URL}Resources${API_FORMAT}`,
        responseType: 'json'
      }).then((response) => {
        response.data.forEach(result => {
          if (!(result.name).toLowerCase().includes('[Ph]'.toLowerCase()))
            if (!(result.name).toLowerCase().includes('[hc]'.toLowerCase()))
              if (!(result.name).toLowerCase().includes('/'.toLowerCase()))
                formatData.push((new Resource(result)))
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

module.exports = handelResource