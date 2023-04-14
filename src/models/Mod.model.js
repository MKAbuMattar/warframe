export default class Mod {
  constructor(data) {
    this.name = data.name
    this.baseDrain = data.baseDrain
    this.category = data.category
    this.compatName = data.compatName
    this.fusionLimit = data.fusionLimit
    this.imageName = data.imageName
    this.introduced = data.introduced
    this.isAugment = data.isAugment
    this.levelStats = data.levelStats
    this.polarity = data.polarity
    this.rarity = data.rarity
    this.releaseDate = data.releaseDate
    this.tradable = data.tradable
    this.transmutable = data.transmutable
    this.type = data.type
    this.uniqueName = data.uniqueName
    this.wikiaThumbnail = data.wikiaThumbnail
    this.wikiaUrl = data.wikiaUrl
  }
}
