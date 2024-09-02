export default class Enemy {
  constructor(data) {
    this.name = data.name;
    this.armor = data.armor;
    this.category = data.category;
    this.description = data.description;
    this.drops = data.drops;
    this.health = data.health;
    this.imageName = data.imageName;
    this.regionBits = data.regionBits;
    this.resistances = data.resistances;
    this.shield = data.shield;
    this.type = data.type;
    this.uniqueName = data.uniqueName;
  }
}
