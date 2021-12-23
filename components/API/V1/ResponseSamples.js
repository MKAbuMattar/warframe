export const WarframeResponseSample200 = `{
  "status": "ok",
  "section": "Warframe",
  "totalCount": 83,
  "data": [
    {
      "name": "Ash",
      "abilities": [
        {
          "name": "Shuriken",
          "description": "Launches a spinning blade of pain, dealing high damage and impaling enemies to walls."
        },
        {
          "name": "Smoke Screen",
          "description": "Drops a smoke bomb that stuns enemies and obscures their vision, rendering Ash invisible for a short time."
        },
        {
          "name": "Teleport",
          "description": "Ash teleports towards the target, bringing him into melee range and making enemies vulnerable to finishers."
        },
        {
          "name": "Blade Storm",
          "description": "Project fierce shadow clones of Ash upon groups of distant enemies. Join the fray using Teleport."
        }
      ],
      "armor": 100,
      "aura": "madurai",
      "buildPrice": 25000,
      "buildQuantity": 1,
      "buildTime": 259200,
      "category": "Warframes",
      "color": 0,
      "conclave": true,
      "consumeOnBuild": true,
      "description": "Ash is great for players looking for a stealthier approach to combat. Lethal abilities are complemented by powers of distraction.",
      "health": 150,
      "imageName": "ash.png",
      "introduced": {
        "name": "Vanilla",
        "url": "https://warframe.fandom.com/wiki/Closed_Beta_Updates%23Vanilla",
        "aliases": ["0", "0.0"],
        "parent": "0.0",
        "date": "2012-10-25"
      },
      "masteryReq": 0,
      "passiveDescription": "Bleed effects inflicted on enemies do |DAMAGE|% increased damage and last |DURATION|% longer.",
      "polarities": ["madurai", "madurai"],
      "power": 100,
      "productCategory": "Suits",
      "sex": "Male",
      "shield": 100,
      "skipBuildTimePrice": 50,
      "sprint": 1.15,
      "sprintSpeed": 1.15,
      "stamina": 3,
      "tradable": false,
      "type": "Warframe",
      "uniqueName": "/Lotus/Powersuits/Ninja/Ninja",
      "wikiaThumbnail": "https://static.wikia.nocookie.net/warframe/images/1/17/AshNewLook.png/revision/latest?cb=20141124022921",
      "wikiaUrl": "https://warframe.fandom.com/wiki/Ash",
      "releaseDate": "2012-10-25"
    },
    .
    .
    .
  ]
}`

export const WarframeResponseSample400 = ``
export const WarframeResponseSample404 = ``
export const WarframeResponseSample500 = ``

export const PrimaryWeaponResponseSample200 = `{
  "status": "ok",
  "section": "Primary Weapon",
  "totalCount": 153,
  "data": [
    {
      "name": "Acceltra",
      "accuracy": 23.529411,
      "ammo": 96,
      "attacks": [
        {
          "name": "Rocket Impact",
          "speed": 12,
          "crit_chance": 32,
          "crit_mult": 2.8,
          "status_chance": 6,
          "shot_type": "Projectile",
          "shot_speed": 70,
          "flight": 70,
          "damage": { "impact": 35 }
        },
        {
          "name": "Rocket Explosion",
          "speed": 12,
          "crit_chance": 32,
          "crit_mult": 2.8,
          "status_chance": 6,
          "shot_type": "AoE",
          "falloff": { "start": 0, "end": 4, "reduction": 0.5 },
          "damage": { "slash": 8.8, "puncture": 35.2 }
        }
      ],
      "buildPrice": 25000,
      "buildQuantity": 1,
      "buildTime": 86400,
      "category": "Primary",
      "consumeOnBuild": true,
      "criticalChance": 0.31999999,
      "criticalMultiplier": 2.8,
      "damagePerShot": [
        26, 35.200001, 8.7999992, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0
      ],
      "description": "Using a barrage of rapid-fire plasma rockets, Gauss’ signature weapon lays down a path of destruction. Reloads are faster while sprinting, even more so in Gauss’ hands. For safety, rockets arm after traveling a safe distance.",
      "disposition": 1,
      "fireRate": 12.000001,
      "imageName": "acceltra.png",
      "introduced": {
        "name": "Update 25.7",
        "url": "https://warframe.fandom.com/wiki/Update_25%23Update_25.7",
        "aliases": ["25.7", "Saint of Altra"],
        "parent": "25.7",
        "date": "2019-08-29"
      },
      "magazineSize": 48,
      "masteryReq": 8,
      "multishot": 1,
      "noise": "Alarming",
      "omegaAttenuation": 0.60000002,
      "polarities": ["naramon"],
      "procChance": 0.060000002,
      "productCategory": "LongGuns",
      "releaseDate": "2019-08-29",
      "reloadTime": 2,
      "skipBuildTimePrice": 35,
      "slot": 1,
      "tags": ["Tenno"],
      "totalDamage": 70,
      "tradable": false,
      "trigger": "Auto",
      "type": "Rifle",
      "uniqueName": "/Lotus/Weapons/Tenno/LongGuns/SapientPrimary/SapientPrimaryWeapon",
      "wikiaThumbnail": "https://static.wikia.nocookie.net/warframe/images/1/19/Acceltra.png/revision/latest?cb=20190831102245",
      "wikiaUrl": "https://warframe.fandom.com/wiki/Acceltra"
    },
    .
    .
    .
  ]
}`

export const PrimaryWeaponResponseSample400 = ``
export const PrimaryWeaponResponseSample404 = ``
export const PrimaryWeaponResponseSample500 = ``

export const SecondaryWeaponResponseSample200 = `{
  "status": "ok",
  "section": "Secondary Weapon",
  "totalCount": 123,
  "data": [
    {
      "name": "Acrid",
      "accuracy": 100,
      "ammo": 210,
      "attacks": [
        {
          "name": "Normal Attack",
          "speed": 6.67,
          "crit_chance": 5,
          "crit_mult": 2,
          "status_chance": 10,
          "shot_type": "Projectile",
          "shot_speed": 65,
          "flight": 65,
          "damage": { "toxin": 35 }
        }
      ],
      "buildPrice": 30000,
      "buildQuantity": 1,
      "buildTime": 86400,
      "category": "Secondary",
      "consumeOnBuild": true,
      "criticalChance": 0.050000001,
      "criticalMultiplier": 2,
      "damagePerShot": [
        0, 0, 0, 0, 0, 0, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      "description": "The Acrid fires an acidic-infused needle.",
      "disposition": 5,
      "fireRate": 6.666667,
      "imageName": "acrid.png",
      "introduced": {
        "name": "Update 8.0",
        "url": "https://warframe.fandom.com/wiki/Update_8%23Update_8.0",
        "aliases": ["8", "8.0", "Update 8"],
        "parent": "8.0",
        "date": "2013-05-23"
      },
      "magazineSize": 15,
      "masteryReq": 7,
      "multishot": 1,
      "noise": "Alarming",
      "omegaAttenuation": 1.33,
      "polarities": [],
      "procChance": 0.10000002,
      "productCategory": "Pistols",
      "releaseDate": "2013-05-23",
      "reloadTime": 1.2,
      "skipBuildTimePrice": 35,
      "slot": 0,
      "tags": ["Grineer"],
      "totalDamage": 35,
      "tradable": false,
      "trigger": "Semi",
      "type": "Pistol",
      "uniqueName": "/Lotus/Weapons/ClanTech/Bio/AcidDartPistol",
      "wikiaThumbnail": "https://static.wikia.nocookie.net/warframe/images/a/a8/Acrid2.png/revision/latest?cb=20190926231820",
      "wikiaUrl": "https://warframe.fandom.com/wiki/Acrid"
    },
    .
    .
    .
  ]
}`

export const SecondaryWeaponResponseSample400 = ``
export const SecondaryWeaponResponseSample404 = ``
export const SecondaryWeaponResponseSample500 = ``

export const MeleeWeaponResponseSample200 = `{
  "status": "ok",
  "section": "Melee Weapon",
  "totalCount": 178,
  "data": [
    {
      "name": "Ack & Brunt",
      "attacks": [
        {
          "name": "Normal Attack",
          "speed": 0.833,
          "crit_chance": 20,
          "crit_mult": 2,
          "status_chance": 10,
          "damage": { "impact": 14.9, "slash": 119.2, "puncture": 14.9 },
          "slide": "149",
          "slam": {
            "damage": "447.00",
            "radial": { "damage": "149.00", "element": "Impact", "radius": 7 }
          }
        }
      ],
      "blockingAngle": 70,
      "buildPrice": 65000,
      "buildQuantity": 1,
      "buildTime": 86400,
      "category": "Melee",
      "comboDuration": 5,
      "consumeOnBuild": true,
      "criticalChance": 0.2,
      "criticalMultiplier": 2,
      "damagePerShot": [
        14.900001, 14.900001, 119.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0
      ],
      "description": "Tyl Regor’s custom axe and shield are how he likes to eliminate ‘frustrations’.",
      "disposition": 5,
      "fireRate": 0.83333337,
      "followThrough": 0.60000002,
      "heavyAttackDamage": 745,
      "heavySlamAttack": 596,
      "heavySlamRadialDamage": 596,
      "heavySlamRadius": 8,
      "imageName": "ack-&-brunt.png",
      "introduced": {
        "name": "Update 17.0",
        "url": "https://warframe.fandom.com/wiki/Update_17%23Update_17.0",
        "aliases": ["Update 17", "17.0", "17"],
        "parent": "17.0",
        "date": "2015-07-31"
      },
      "masteryReq": 3,
      "omegaAttenuation": 1.35,
      "polarities": [],
      "procChance": 0.10000002,
      "productCategory": "Melee",
      "range": 2.5,
      "releaseDate": "2015-07-31",
      "skipBuildTimePrice": 35,
      "slamAttack": 447,
      "slamRadialDamage": 149,
      "slamRadius": 7,
      "slideAttack": 149,
      "slot": 5,
      "stancePolarity": "madurai",
      "tags": ["Grineer"],
      "totalDamage": 149,
      "tradable": false,
      "type": "Sword And Shield",
      "uniqueName": "/Lotus/Weapons/Grineer/Melee/GrineerTylAxeAndBoar/RegorAxeShield",
      "wikiaThumbnail": "https://static.wikia.nocookie.net/warframe/images/4/41/RegorAxeShield.png/revision/latest?cb=20150731174942",
      "wikiaUrl": "https://warframe.fandom.com/wiki/Ack_%26_Brunt",
      "windUp": 0.69999999
    },
    .
    .
    .
  ]
}`

export const MeleeWeaponResponseSample400 = ``
export const MeleeWeaponResponseSample404 = ``
export const MeleeWeaponResponseSample500 = ``

export const PetResponseSample200 = `{
  "status": "ok",
  "section": "Pet",
  "totalCount": 22,
  "data": [
    {
      "name": "Adarza Kavat",
      "armor": 50,
      "category": "Pets",
      "description": "Piercing eyes reflect deadly instincts.",
      "health": 80,
      "imageName": "adarza-kavat.png",
      "power": 100,
      "productCategory": "KubrowPets",
      "shield": 70,
      "stamina": 8,
      "tradable": false,
      "type": "Pets",
      "uniqueName": "/Lotus/Types/Game/CatbrowPet/MirrorCatbrowPetPowerSuit"
    },
    {
      "name": "Bhaira Hound",
      "category": "Pets",
      "description": "",
      "imageName": "bhaira-hound.png",
      "productCategory": "Pistols",
      "tradable": false,
      "type": "Pets",
      "uniqueName": "/Lotus/Types/Friendly/Pets/ZanukaPets/ZanukaPetParts/ZanukaPetPartHeadB"
    },
    .
    .
    .
  ]
}`

export const PetResponseSample400 = ``
export const PetResponseSample404 = ``
export const PetResponseSample500 = ``

export const SentinelResponseSample200 = `{
  "status": "ok",
  "section": "Sentinel",
  "totalCount": 15,
  "data": [
    {
      "name": "Carrier",
      "armor": 50,
      "buildPrice": 15000,
      "buildQuantity": 1,
      "buildTime": 86400,
      "category": "Sentinels",
      "consumeOnBuild": true,
      "description": "With 'Assault Mode' and 'Ammo Case' as default Precepts, Carrier is a seeker Sentinel. Carrier also comes with a shotgun weapon.Note: This item requires two open slots.",
      "health": 200,
      "imageName": "carrier.png",
      "power": 100,
      "productCategory": "Sentinels",
      "shield": 100,
      "skipBuildTimePrice": 30,
      "stamina": 8,
      "tradable": false,
      "type": "Sentinel",
      "uniqueName": "/Lotus/Types/Sentinels/SentinelPowersuits/CarrierPowerSuit"
    },
    .
    .
    .
  ]
}`

export const SentinelResponseSample400 = ``
export const SentinelResponseSample404 = ``
export const SentinelResponseSample500 = ``

export const SentinelWeaponResponseSample200 = `{
  "status": "ok",
  "section": "Sentinel Weapon",
  "totalCount": 22,
  "data": [
    {
      "name": "Akaten",
      "attacks": [
        {
          "name": "Normal Attack",
          "speed": 1,
          "crit_chance": 10,
          "crit_mult": 3,
          "status_chance": 15,
          "damage": { "slash": 76, "puncture": 76 }
        }
      ],
      "blockingAngle": 90,
      "category": "Primary",
      "criticalChance": 0.1,
      "criticalMultiplier": 3,
      "damagePerShot": [
        0, 76, 76, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      "description": "Hound melee attacks eviscerate with Puncture and Slash damage.",
      "disposition": 1,
      "excludeFromCodex": true,
      "fireRate": 1,
      "imageName": "akaten.png",
      "introduced": {
        "name": "Update 30.5",
        "url": "https://warframe.fandom.com/wiki/Update_30%23Update_30.5",
        "aliases": ["30.5"],
        "parent": "30.5",
        "date": "2021-07-06"
      },
      "masteryReq": 0,
      "omegaAttenuation": 0.5,
      "polarities": [],
      "procChance": 0.14999998,
      "productCategory": "SentinelWeapons",
      "releaseDate": "2021-07-06",
      "sentinel": true,
      "slot": 1,
      "tags": [],
      "totalDamage": 152,
      "tradable": false,
      "type": "Unique",
      "uniqueName": "/Lotus/Types/Friendly/Pets/ZanukaPets/ZanukaPetMeleeWeaponPS",
      "wikiaThumbnail": "https://static.wikia.nocookie.net/warframe/images/1/1a/Akaten.png/revision/latest?cb=20210719052622",
      "wikiaUrl": "https://warframe.fandom.com/wiki/Akaten"
    },
    .
    .
    .
  ]
}`

export const SentinelWeaponResponseSample400 = ``
export const SentinelWeaponResponseSample404 = ``
export const SentinelWeaponResponseSample500 = ``

export const ArchwingResponseSample200 = `{
  "status": "ok",
  "section": "Archwing",
  "totalCount": 5,
  "data": [
    {
      "name": "Amesha",
      "abilities": [
        {
          "name": "Watchful Swarm",
          "description": "Tiny drones orbit the Warframe or an ally, and intercept enemy fire."
        },
        {
          "name": "Benevolent Decoy",
          "description": "Creates beacons that draw enemy fire, converting the damage into healing pulses."
        },
        {
          "name": "Warding Grace",
          "description": "Renders the Warframe and nearby allies immune to Status Effects, while slowing nearby enemies."
        },
        {
          "name": "Vengeful Rush",
          "description": "All damage taken is transformed into Energy, while abilities gain enhanced Range, Duration and Power. Affects the Warframe and nearby allies."
        }
      ],
      "armor": 200,
      "buildPrice": 25000,
      "buildQuantity": 1,
      "buildTime": 43200,
      "category": "Archwing",
      "consumeOnBuild": true,
      "description": "Transform into a winged guardian.",
      "health": 400,
      "imageName": "amesha.png",
      "masteryReq": 0,
      "power": 200,
      "productCategory": "SpaceSuits",
      "shield": 200,
      "skipBuildTimePrice": 50,
      "sprintSpeed": 1.1,
      "stamina": 150,
      "tradable": false,
      "type": "Archwing",
      "uniqueName": "/Lotus/Powersuits/Archwing/SupportJetPack/SupportJetPack"
    },
    .
    .
    .
  ]
}`

export const ArchwingResponseSample400 = ``
export const ArchwingResponseSample404 = ``
export const ArchwingResponseSample500 = ``

export const ArchGunWeaponResponseSample200 = `{
  "status": "ok",
  "section": "ArchGun Weapon",
  "totalCount": 16,
  "data": [
    {
      "name": "Cortege",
      "accuracy": 100,
      "ammo": null,
      "attacks": [
        {
          "name": "Held",
          "speed": 12,
          "crit_chance": 20,
          "crit_mult": 1.9,
          "status_chance": 40,
          "shot_type": "Discharge",
          "damage": { "heat": 90 }
        },
        {
          "name": "Grenade Impact",
          "speed": 0.25,
          "crit_chance": 30,
          "crit_mult": 2.4,
          "status_chance": 16.7,
          "damage": { "impact": 10 }
        },
        {
          "name": "Radial Attack",
          "speed": 0.25,
          "crit_chance": 30,
          "crit_mult": 2.4,
          "status_chance": 16.7,
          "shot_type": "AoE",
          "falloff": { "start": 0, "end": 4, "reduction": 0.3 },
          "damage": { "blast": 1000 }
        }
      ],
      "buildPrice": 20000,
      "buildQuantity": 1,
      "buildTime": 43200,
      "category": "Arch-Gun",
      "consumeOnBuild": true,
      "criticalChance": 0.2,
      "criticalMultiplier": 1.9,
      "damagePerShot": [
        0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ],
      "description": "An ancient weapon designed by the Entrati for use by their Necramechs. Primary fire siphons life essence from the target to fuel a devastating secondary fire. A heavy flamethrower with surprising range. Secondary fire launches three projectiles in a fan pattern that explode, leaving a damaging area of effect for a short duration.",
      "disposition": 3,
      "fireRate": 12.000001,
      "imageName": "cortege.png",
      "introduced": {
        "name": "Update 29.0",
        "url": "https://warframe.fandom.com/wiki/Update_29",
        "aliases": ["29", "29.0", "Heart of Deimos"],
        "parent": "29.0",
        "date": "2020-08-25"
      },
      "magazineSize": 100,
      "masteryReq": 14,
      "multishot": 1,
      "noise": "Alarming",
      "omegaAttenuation": 1,
      "polarities": [],
      "procChance": 0.39999998,
      "productCategory": "SpaceGuns",
      "releaseDate": "2020-08-25",
      "reloadTime": 3,
      "skipBuildTimePrice": 25,
      "slot": 1,
      "tags": ["Entrati"],
      "totalDamage": 90,
      "tradable": false,
      "trigger": "Held",
      "type": "Arch-Gun",
      "uniqueName": "/Lotus/Weapons/Tenno/Archwing/Primary/ThanoTechArchGun/ThanoTechArchGun",
      "wikiaThumbnail": "https://static.wikia.nocookie.net/warframe/images/4/4e/Cortege.png/revision/latest?cb=20200825211514",
      "wikiaUrl": "https://warframe.fandom.com/wiki/Cortege"
    },
    .
    .
    .
  ]
}`

export const ArchGunWeaponResponseSample400 = ``
export const ArchGunWeaponResponseSample404 = ``
export const ArchGunWeaponResponseSample500 = ``

export const ArchMeleeWeaponResponseSample200 = `{
  "status": "ok",
  "section": "ArchMelee Weapon",
  "totalCount": 8,
  "data": [
    {
      "name": "Agkuza",
      "attacks": [
        {
          "name": "Normal Attack",
          "speed": 1,
          "crit_chance": 5,
          "crit_mult": 1.5,
          "status_chance": 15,
          "damage": { "impact": 65.4, "slash": 65.4, "puncture": 305.2 }
        }
      ],
      "blockingAngle": 90,
      "buildPrice": 25000,
      "buildQuantity": 1,
      "buildTime": 43200,
      "category": "Arch-Melee",
      "comboDuration": 5,
      "consumeOnBuild": true,
      "criticalChance": 0.050000001,
      "criticalMultiplier": 1.5,
      "damagePerShot": [
        65.400002, 305.19998, 65.399986, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0
      ],
      "description": "Tear apart incoming enemies with this massive hooked blade.",
      "disposition": 1,
      "fireRate": 1,
      "followThrough": 0.69999999,
      "heavyAttackDamage": 436,
      "heavySlamAttack": 436,
      "imageName": "agkuza.png",
      "introduced": {
        "name": "Update: Specters of the Rail",
        "url": "https://warframe.fandom.com/wiki/Update_19%23Update%3A_Specters_of_the_Rail",
        "aliases": ["Specters of the Rail", "SotR"],
        "parent": "19.1",
        "date": "2016-07-08"
      },
      "masteryReq": 3,
      "omegaAttenuation": 0.5,
      "polarities": ["vazarin"],
      "procChance": 0.14999998,
      "productCategory": "SpaceMelee",
      "range": 2.5,
      "releaseDate": "2016-07-08",
      "skipBuildTimePrice": 50,
      "slamAttack": 436,
      "slamRadialDamage": 436,
      "slamRadius": 3,
      "slideAttack": 934,
      "slot": 5,
      "tags": ["Tenno"],
      "totalDamage": 435.99997,
      "tradable": false,
      "type": "Arch-Melee",
      "uniqueName": "/Lotus/Weapons/Tenno/Archwing/Melee/ArchSwordHook/ArchHookSwordWeapon",
      "wikiaThumbnail": "https://static.wikia.nocookie.net/warframe/images/c/c2/ArchHookSword.png/revision/latest?cb=20160710175147",
      "wikiaUrl": "https://warframe.fandom.com/wiki/Agkuza"
    },
    .
    .
    .
  ]
}`

export const ArchMeleeWeaponResponseSample400 = ``
export const ArchMeleeWeaponResponseSample404 = ``
export const ArchMeleeWeaponResponseSample500 = ``

export const NecramechResponseSample200 = `{
  "status": "ok",
  "section": "Necramech",
  "totalCount": 2,
  "data": [
    {
      "name": "Bonewidow",
      "abilities": [
        {
          "name": "Meathook",
          "description": "Skewer and hold a target, siphoning their health. Use again to hurl the victim damaging them and anyone near the impact site."
        },
        {
          "name": "Shield Maiden",
          "description": "Raise Bonewidow's shield to block incoming forward damage, reflecting it back at attackers. While active, bash enemies with a Maiden's Kiss."
        },
        {
          "name": "Firing Line",
          "description": "Sweep surrounding enemies into the line of fire and suspend them in air with a force beam."
        },
        {
          "name": "Exalted Ironbride",
          "description": "Summon a devastating exalted blade."
        }
      ],
      "armor": 500,
      "buildPrice": 25000,
      "buildQuantity": 1,
      "buildTime": 259200,
      "category": "Warframes",
      "consumeOnBuild": true,
      "description": "This fearsome Necramech, fashioned in honor of the Entrati matriarch, is a robust front-line fighter. Favoring armor and health over shield strength, Bonewidow can grab and hurl enemies, deploy a heavy shield for personal defense, and cleave through opposing ranks with a massive warblade.",
      "exalted": [
        "/Lotus/Types/Enemies/Orokin/Entrati/EntratiTech/NechroTech/AbilitySword/NechroTechSwordWeapon",
        "/Lotus/Weapons/Tenno/Archwing/Primary/ThanoTechArchLongGun/ThanoTechLongGun"
      ],
      "health": 1800,
      "imageName": "bonewidow.png",
      "masteryReq": 0,
      "power": 150,
      "productCategory": "MechSuits",
      "shield": 300,
      "skipBuildTimePrice": 50,
      "sprintSpeed": 1.1,
      "stamina": 200,
      "tradable": false,
      "type": "Warframe",
      "uniqueName": "/Lotus/Powersuits/EntratiMech/ThanoTech"
    },
    .
    .
    .
  ]
}`

export const NecramechResponseSample400 = ``
export const NecramechResponseSample404 = ``
export const NecramechResponseSample500 = ``

export const ModResponseSample200 = `{
  "status":"ok",
  "section":"Mods",
  "totalCount":1147,
  "data":[
      {
        "name":"Abating Link",
        "baseDrain":6,
        "category":"Mods",
        "compatName":"TRINITY",
        "fusionLimit":3,
        "imageName":"abating-link.jpg",
        "introduced":{
            "name":"Update 15.6",
            "url":"https://warframe.fandom.com/wiki/Update_15%23Update_15.6",
            "aliases":[
              "15.6.0",
              "15.6"
            ],
            "parent":"15.6",
            "date":"2014-12-11"
        },
        "isAugment":true,
        "levelStats":[
            {
              "stats":[
                  "Link Augment: Reduces Armor Rating by 25% on enemies targeted by Link."
              ]
            },
            {
              "stats":[
                  "Link Augment: Reduces Armor Rating by 30% on enemies targeted by Link."
              ]
            },
            {
              "stats":[
                  "Link Augment: Reduces Armor Rating by 35% on enemies targeted by Link."
              ]
            },
            {
              "stats":[
                  "Link Augment: Reduces Armor Rating by 45% on enemies targeted by Link."
              ]
            }
        ],
        "polarity":"zenurik",
        "rarity":"Rare",
        "releaseDate":"2014-12-11",
        "tradable":true,
        "transmutable":false,
        "type":"Warframe Mod",
        "uniqueName":"/Lotus/Powersuits/Trinity/LinkAugmentCard",
        "wikiaThumbnail":"https://static.wikia.nocookie.net/warframe/images/2/27/AbatingLinkMod.png/revision/latest?cb=20180329123742",
        "wikiaUrl":"https://warframe.fandom.com/wiki/Abating_Link"
      },
      .
      .
      .
    ]
  }`

export const ModResponseSample400 = ``
export const ModResponseSample404 = ``
export const ModResponseSample500 = ``

export const ArcaneResponseSample200 = `{
  "status": "ok",
  "section": "Arcanes",
  "totalCount": 89,
  "data": [
    {
      "name": "Arcane Acceleration",
      "imageName": "arcane-acceleration.png",
      "levelStats": [
        {
          "stats": [
            "On Critical Hit:5% chance for +15% Fire Rate to Primary Weapons for 2s"
          ]
        },
        {
          "stats": [
            "On Critical Hit:10% chance for +30% Fire Rate to Primary Weapons for 3s"
          ]
        },
        {
          "stats": [
            "On Critical Hit:15% chance for +45% Fire Rate to Primary Weapons for 5s"
          ]
        },
        {
          "stats": [
            "On Critical Hit:20% chance for +60% Fire Rate to Primary Weapons for 6s+1 Arcane Revive"
          ]
        },
        {
          "stats": [
            "On Critical Hit:25% chance for +75% Fire Rate to Primary Weapons for 8s+1 Arcane Revive"
          ]
        },
        {
          "stats": [
            "On Critical Hit:30% chance for +90% Fire Rate to Primary Weapons for 9s+1 Arcane Revive"
          ]
        }
      ],
      "rarity": "Uncommon",
      "tradable": true,
      "uniqueName": "/Lotus/Upgrades/CosmeticEnhancers/Offensive/LongGunSpeedOnCrit"
    },
    .
    .
    .
  ]
}`

export const ArcaneResponseSample400 = ``
export const ArcaneResponseSample404 = ``
export const ArcaneResponseSample500 = ``

export const QuestResponseSample200 = `{
  "status": "ok",
  "section": "Quest",
  "totalCount": 34,
  "data": [
    {
      "name": "A Man Of Few Words",
      "category": "Quests",
      "description": "Darvo needs your help again. Save one of his best contractors from Grineer execution.",
      "imageName": "a-man-of-few-words.png",
      "tradable": false,
      "type": "Key",
      "uniqueName": "/Lotus/Types/Keys/GetClemQuest/GetClemQuestKeyChain"
    },
    {
      "name": "Apostasy Prologue",
      "category": "Quests",
      "description": "Inspect your personal quarters upon finishing the Chains of Harrow quest.",
      "imageName": "apostasy-prologue.png",
      "tradable": false,
      "type": "Key",
      "uniqueName": "/Lotus/Types/Keys/ApostasyQuest/ApostasyKeyChain"
    },
    {
      "name": "Awakening",
      "category": "Quests",
      "description": "The Tenno: monuments of an ancient warrior caste.For generations you've slept, with no call to wake you.Until now.",
      "imageName": "awakening.png",
      "tradable": false,
      "type": "Key",
      "uniqueName": "/Lotus/Types/Keys/NewPlayerQuest/NewPlayerQuestKeyChain"
    },
    .
    .
    .
  ]
}`

export const QuestResponseSample400 = ``
export const QuestResponseSample404 = ``
export const QuestResponseSample500 = ``

export const EnemyResponseSample200 = `{
  "status": "ok",
  "section": "Enemy",
  "totalCount": 476,
  "data": [
    {
      "name": "002-Er",
      "armor": 200,
      "category": "Enemy",
      "description": "",
      "drops": [
        {
          "location": "Flux Overdrive",
          "type": "Mod Locations",
          "rarity": "Uncommon",
          "chance": 0.125
        },
        {
          "location": "Thermagnetic Shells",
          "type": "Mod Locations",
          "rarity": "Uncommon",
          "chance": 0.125
        },
        {
          "location": "Static Discharge",
          "type": "Mod Locations",
          "rarity": "Uncommon",
          "chance": 0.125
        },
        {
          "location": "Pain Threshold",
          "type": "Mod Locations",
          "rarity": "Uncommon",
          "chance": 0.125
        },
        {
          "location": "Kinetic Ricochet",
          "type": "Mod Locations",
          "rarity": "Uncommon",
          "chance": 0.125
        },
        {
          "location": "Medi-Pet Kit",
          "type": "Mod Locations",
          "rarity": "Uncommon",
          "chance": 0.125
        },
        {
          "location": "Tether Grenades",
          "type": "Mod Locations",
          "rarity": "Uncommon",
          "chance": 0.125
        },
        {
          "location": "Shield Charger",
          "type": "Mod Locations",
          "rarity": "Uncommon",
          "chance": 0.125
        },
        { "location": "002-Er", "type": "Enemy Mod Tables", "chance": null }
      ],
      "health": 150,
      "imageName": "002-er.png",
      "regionBits": 128,
      "resistances": [
        {
          "amount": 100,
          "type": "Shield",
          "affectors": [
            { "element": "Impact", "modifier": 0.75 },
            { "element": "Cold", "modifier": 0.75 },
            { "element": "Magnetic", "modifier": 0 },
            { "element": "Puncture", "modifier": -0.5 },
            { "element": "Radiation", "modifier": -0.5 }
          ]
        },
        {
          "amount": 200,
          "type": "Alloy Armor",
          "affectors": [
            { "element": "Puncture", "modifier": 0.5 },
            { "element": "Cold", "modifier": 0.5 },
            { "element": "Radiation", "modifier": 0 },
            { "element": "Slash", "modifier": -0.75 },
            { "element": "Electricity", "modifier": -0.75 },
            { "element": "Magnetic", "modifier": -0.75 }
          ]
        },
        {
          "amount": 150,
          "type": "Robotic",
          "affectors": [
            { "element": "Puncture", "modifier": 0.5 },
            { "element": "Electricity", "modifier": 0.75 },
            { "element": "Radiation", "modifier": 0.5 },
            { "element": "Slash", "modifier": -0.5 },
            { "element": "Toxin", "modifier": -0.5 }
          ]
        }
      ],
      "shield": 100,
      "type": "Corpus",
      "uniqueName": "/Lotus/Types/Enemies/CorpusChampions/TeamD/CCTeamDOspreyAvatar"
    },
    .
    .
    .
  ]
}`

export const EnemyResponseSample400 = ``
export const EnemyResponseSample404 = ``
export const EnemyResponseSample500 = ``

export const MiscellaneousResponseSample200 = `{
  "status": "ok",
  "section": "Miscellaneous",
  "totalCount": 588,
  "data": [
    {
      "name": "Additional Appearance Config Slot For This Item",
      "description": "Unlocks an additional appearance config slot for this item, up to a maximum of 3 extra slots.",
      "imageName": "additional-appearance-config-slot-for-this-item.png",
      "type": "Misc",
      "uniqueName": "/Lotus/Types/Items/MiscItems/CustomizationSlotUnlocker"
    },
    {
      "name": "Additional Mod Config Slot For This Item",
      "description": "Unlocks an additional appearance config slot for this item, up to a maximum of 3 extra slots.",
      "imageName": "additional-mod-config-slot-for-this-item.png",
      "type": "Misc",
      "uniqueName": "/Lotus/Types/Items/MiscItems/ModSlotUnlocker"
    },
    {
      "name": "Alloy Plate",
      "description": "Carbon steel plates used to reinforce Grineer armor.Locations: Venus, Phobos, Ceres, Jupiter, Pluto, and Sedna.",
      "imageName": "alloy-plate.png",
      "type": "Misc",
      "uniqueName": "/Lotus/Types/Items/MiscItems/AlloyPlate"
    },
    {
      "name": "Alpha Corruptor",
      "description": "Inert on its own this corruptor is highly effective if mixed with its Beta counterpart. Properly mixed, these will destabilize Fomorian Reactors much faster than their Stable counterparts. This volatile item cannot be simultaneously equipped with Beta Corruptors. Recommended for Tenno operating as a team.",
      "imageName": "alpha-corruptor.png",
      "type": "Misc",
      "uniqueName": "/Lotus/Types/Items/MiscItems/AlphaCorruptorResource"
    },
    .
    .
    .
  ]
}`

export const MiscellaneousResponseSample400 = ``
export const MiscellaneousResponseSample404 = ``
export const MiscellaneousResponseSample500 = ``

export const ResourcesResponseSample200 = `{
  "status": "ok",
  "section": "Resources",
  "totalCount": 159,
  "data": [
    {
      "name": "Adramal Alloy",
      "buildPrice": 1000,
      "buildQuantity": 20,
      "buildTime": 60,
      "category": "Resources",
      "consumeOnBuild": false,
      "description": "Purged of spores and contaminants, this alloy is highly versatile.",
      "imageName": "adramal-alloy.png",
      "itemCount": 80,
      "parents": [
        "Bonewidow Engine",
        "Cortege Barrel",
        "Morgha Barrel",
        "Voidrig Casing"
      ],
      "skipBuildTimePrice": 5,
      "tradable": false,
      "type": "Gem",
      "uniqueName": "/Lotus/Types/Items/Gems/Deimos/DeimosCommonOreAAlloyItem"
    },
    {
      "name": "Adramalium",
      "category": "Resources",
      "description": "Sinewy and metallic, possessed of great elastic strength.",
      "imageName": "adramalium.png",
      "itemCount": 20,
      "parents": ["Adramal Alloy", "Xaku Kintsu Helmet"],
      "tradable": false,
      "type": "Gem",
      "uniqueName": "/Lotus/Types/Items/Gems/Deimos/DeimosCommonOreAItem"
    },
    .
    .
    .
  ]
}`

export const ResourcesResponseSample400 = ``
export const ResourcesResponseSample404 = ``
export const ResourcesResponseSample500 = ``

export const GearResponseSample200 = `{
  "status": "ok",
  "section": "Gear",
  "totalCount": 176,
  "data": [
    {
      "name": "A Fishing Spear",
      "category": "Gear",
      "description": "The barbed prongs on this fishing spear make it easier to catch fish with smooth skin.",
      "imageName": "a-fishing-spear.png",
      "tradable": false,
      "type": "Gear",
      "uniqueName": "/Lotus/Types/Restoratives/Consumable/BaseSpearFishingSpear"
    },
    {
      "name": "Adrenal Stim",
      "buildPrice": 10000,
      "buildQuantity": 1,
      "buildTime": 60,
      "category": "Gear",
      "consumeOnBuild": false,
      "description": "Elevates adrenaline levels to enable faster movement while increasing sensitivity to damage.",
      "imageName": "adrenal-stim.png",
      "skipBuildTimePrice": 1,
      "tradable": false,
      "type": "Gear",
      "uniqueName": "/Lotus/Types/Restoratives/Consumable/NpcBuffs/SpeedBuffArmorDebuff"
    },
    {
      "name": "Advanced Nosam Cutter",
      "buildPrice": 3500,
      "buildQuantity": 1,
      "buildTime": 3600,
      "category": "Gear",
      "consumeOnBuild": true,
      "description": "Enhanced with cybernetics, this tool is able to locate nearby gems and ore veins and has chance to retrieve Eidolon Gems.",
      "imageName": "advanced-nosam-cutter.png",
      "skipBuildTimePrice": 10,
      "tradable": false,
      "type": "Gear",
      "uniqueName": "/Lotus/Types/Restoratives/Consumable/MiningLaserC"
    },
    {
      "name": "Air Support Charges",
      "buildPrice": 4000,
      "buildQuantity": 10,
      "buildTime": 60,
      "category": "Gear",
      "consumeOnBuild": false,
      "description": "Charges consumed by Landing Craft Air Support.",
      "imageName": "air-support-charges.png",
      "skipBuildTimePrice": 1,
      "tradable": false,
      "type": "Gear",
      "uniqueName": "/Lotus/Types/Restoratives/LisetAirSupport"
    },
    .
    .
    .
  ]
}`

export const GearResponseSample400 = ``
export const GearResponseSample404 = ``
export const GearResponseSample500 = ``

export const GlyphResponseSample200 = `{
  "status": "ok",
  "section": "Glyph",
  "totalCount": 921,
  "data": [
    {
      "name": "-Chroma- Prime Partner Glyph",
      "category": "Glyphs",
      "description": "A Glyph for your profile.",
      "imageName": "-chroma--prime-partner-glyph.png",
      "tradable": false,
      "type": "Glyph",
      "uniqueName": "/Lotus/Types/StoreItems/AvatarImages/FanChannel/AvatarImageChromaPrimePartner"
    },
    {
      "name": "13angtv Glyph",
      "category": "Glyphs",
      "description": "A Glyph for your profile.",
      "imageName": "13angtv-glyph.png",
      "tradable": false,
      "type": "Glyph",
      "uniqueName": "/Lotus/Types/StoreItems/AvatarImages/FanChannel/AvatarImage13angTV"
    },
    {
      "name": "A H R Glyph",
      "category": "Glyphs",
      "description": "A Glyph for your profile.",
      "imageName": "a-h-r-glyph.png",
      "tradable": false,
      "type": "Glyph",
      "uniqueName": "/Lotus/Types/StoreItems/AvatarImages/FanChannel/AvatarImageAHR"
    },
    .
    .
    .
  ]
}`

export const GlyphResponseSample400 = ``
export const GlyphResponseSample404 = ``
export const GlyphResponseSample500 = ``
