export default class Railjack {
  constructor(data) {
    this.name = data.name;
    this.category = data.category;
    this.description = data.description;
    this.imageName = data.imageName;
    this.type = data.type;
    this.tradable = data.tradable;
    this.health = data.health;
    this.armor = data.armor;
    this.shield = data.shield;
    this.speed = data.speed;
    this.buildPrice = data.buildPrice;
    this.buildTime = data.buildTime;
    this.skipBuildTimePrice = data.skipBuildTimePrice;
    this.masteryReq = data.masteryReq;
    this.uniqueName = data.uniqueName;
    this.introduced = data.introduced;
    this.wikiaThumbnail = data.wikiaThumbnail;
    this.wikiaUrl = data.wikiaUrl;
    this.components = data.components;
    this.abilities = data.abilities;
  }
}
