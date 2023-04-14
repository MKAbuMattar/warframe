export default class Resource {
  constructor(data) {
    this.name = data.name
    this.buildPrice = data.buildPrice
    this.buildQuantity = data.buildQuantity
    this.buildTime = data.buildTime
    this.category = data.category
    this.consumeOnBuild = data.consumeOnBuild
    this.description = data.description
    this.imageName = data.imageName
    this.itemCount = data.itemCount
    this.parents = data.parents
    this.skipBuildTimePrice = data.skipBuildTimePrice
    this.tradable = data.tradable
    this.type = data.type
    this.uniqueName = data.uniqueName
  }
}
