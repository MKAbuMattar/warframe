export default class Skin {
  constructor(data) {
    this.accuracy = data.accuracy;
    this.name = data.name;
    this.category = data.category;
    this.description = data.description;
    this.imageName = data.imageName;
    this.tradable = data.tradable;
    this.type = data.type;
  }
}
