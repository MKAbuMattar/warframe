export default class Archwing {
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
    this.estimatedVaultDate = data.estimatedVaultDate;
    this.health = data.health;
    this.imageName = data.imageName;
    this.masteryReq = data.masteryReq;
    this.power = data.power;
    this.productCategory = data.productCategory;
    this.releaseDate = data.releaseDate;
    this.shield = data.shield;
    this.skipBuildTimePrice = data.skipBuildTimePrice;
    this.sprintSpeed = data.sprintSpeed;
    this.stamina = data.stamina;
    this.tradable = data.tradable;
    this.type = data.type;
    this.uniqueName = data.uniqueName;
    this.vaultDate = data.vaultDate;
    this.vaulted = data.vaulted;
  }
}
