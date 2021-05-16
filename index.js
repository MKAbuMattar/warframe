const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('views'))
app.set('view engine', 'ejs')

//JSON
const links = require('./json/data.json')

//modules
const handelWarframe = require('./modules/warframe/warframe')
const handelPrimary = require('./modules/primary/primary')
const handelSecondary = require('./modules/secondary/secondary')
const handelMelee = require('./modules/melee/melee')
const handelArchwing = require('./modules/archwing/archwing')
const handelArchGun = require('./modules/archGun/archGun')
const handelArchMelee = require('./modules/archMelee/archMelee')
const handelSentinel = require('./modules/sentinel/sentinel')
const handelSentinelWeapon = require('./modules/sentinelWeapon/sentinelWeapon')
const handelNecrameche = require('./modules/necrameche/necrameche')
const handelMod = require('./modules/mod/mod')
const handelEnemy = require('./modules/enemy/enemy')
const handelQuest = require('./modules/quest/quest')
const handelPet = require('./modules/pet/pet')
const handelGear = require('./modules/gear/gear')
const handelArcane = require('./modules/arcane/arcane')
const handelGlyph = require('./modules/glyph/glyph')
const handelResource = require('./modules/resource/resource')

//env
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.render('index', { links: links })
})

app.get('/warframe', handelWarframe)
app.get('/primary', handelPrimary)
app.get('/secondary', handelSecondary)
app.get('/melee', handelMelee)
app.get('/archwing', handelArchwing)
app.get('/archGun', handelArchGun)
app.get('/archMelee', handelArchMelee)
app.get('/sentinel', handelSentinel)
app.get('/sentinelWeapon', handelSentinelWeapon)
app.get('/necrameche', handelNecrameche)
app.get('/mod', handelMod)
app.get('/enemy', handelEnemy)
app.get('/quest', handelQuest)
app.get('/pet', handelPet)
app.get('/gear', handelGear)
app.get('/arcane', handelArcane)
app.get('/glyph', handelGlyph)
app.get('/resource', handelResource)

app.listen(PORT)