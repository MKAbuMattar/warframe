export default class Glyph {
  constructor(data) {
    this.name = data.name
    this.category = data.category
    this.description = data.description
    this.imageName = data.imageName
    this.tradable = data.tradable
    this.type = data.type
    this.uniqueName = data.uniqueName
  }
}
