export default class Necramech {
  constructor(data) {
    this.name = data.name;
    this.abilities = data.abilities;
    this.armor = data.armor;
    this.buildPrice = data.buildPrice;
    this.buildQuantity = data.buildQuantity;
    this.buildTime = data.buildTime;
    this.category = data.category;
    this.consumeOnBuild = data.consumeOnBuild;
    this.description = data.description;
    this.exalted = data.exalted;
    this.health = data.health;
    this.imageName = data.imageName;
    this.masteryReq = data.masteryReq;
    this.power = data.power;
    this.productCategory = data.productCategory;
    this.shield = data.shield;
    this.skipBuildTimePrice = data.skipBuildTimePrice;
    this.sprintSpeed = data.sprintSpeed;
    this.stamina = data.stamina;
    this.tradable = data.tradable;
    this.type = data.type;
    this.uniqueName = data.uniqueName;
  }
}
