export default class Gear {
  constructor(data) {
    this.name = data.name
    this.buildPrice = data.buildPrice
    this.buildQuantity = data.buildQuantity
    this.buildTime = data.buildTime
    this.category = data.category
    this.consumeOnBuild = data.consumeOnBuild
    this.description = data.description
    this.imageName = data.imageName
    this.skipBuildTimePrice = data.skipBuildTimePrice
    this.tradable = data.tradable
    this.type = data.type
    this.uniqueName = data.uniqueName
  }
}
