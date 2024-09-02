export default class Miscellaneous {
  constructor(data) {
    this.name = data.name;
    this.description = data.description;
    this.imageName = data.name === 'Forma' ? 'forma.png' : data.imageName;
    this.type = data.type;
    this.uniqueName = data.uniqueName;
  }
}
