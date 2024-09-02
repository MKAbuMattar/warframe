export default class Warframe {
  constructor(data) {
    this.name = data.name;
    this.abilities = data.abilities;
    this.armor = data.armor;
    this.aura = data.aura;
    this.buildPrice = data.buildPrice;
    this.buildQuantity = data.buildQuantity;
    this.buildTime = data.buildTime;
    this.category = data.category;
    this.color = data.color;
    this.conclave = data.conclave;
    this.consumeOnBuild = data.consumeOnBuild;
    this.description = data.description;
    this.exalted = data.exalted;
    this.health = data.health;
    this.imageName = data.imageName;
    this.introduced = data.introduced;
    this.masteryReq = data.masteryReq;
    this.passiveDescription = data.passiveDescription;
    this.polarities = data.polarities;
    this.power = data.power;
    this.productCategory = data.productCategory;
    this.sex = data.sex;
    this.shield = data.shield;
    this.skipBuildTimePrice = data.skipBuildTimePrice;
    this.sprint = data.sprint;
    this.sprintSpeed = data.sprintSpeed;
    this.stamina = data.stamina;
    this.tradable = data.tradable;
    this.type = data.type;
    this.uniqueName = data.uniqueName;
    this.wikiaThumbnail = data.wikiaThumbnail;
    this.wikiaUrl = data.wikiaUrl;
    this.releaseDate = data.releaseDate;
    this.estimatedVaultDate = data.estimatedVaultDate;
    this.vaultDate = data.vaultDate;
    this.vaulted = data.vaulted;
  }
}
