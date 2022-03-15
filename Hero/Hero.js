const { FileManager } = require("../FileManager");
const { fileName } = require("../filename");

class Hero {
  static droppedWeapons = [];

  constructor(health, activeWeapon, allowedWeapons) {
    this.allowedWeapons = allowedWeapons;
    this.Bag = [];
    this.activeWeapon = activeWeapon;
    this.health = health;
  }

  changeActiveWeapon() {
    if (this.Bag.length < 1) {
      console.log(`${this.constructor.name} nema oruzije`);
      return;
    }

    if (this.activeWeapon) {
      this.Bag.push(this.activeWeapon);
    }

    this.activeWeapon = this.Bag[0];
    this.Bag.slice(0, 1);

    console.log(`${this.constructor.name} je stavio ${this.activeWeapon.name}`);
  }

  dropWeapon() {
    if (this.activeWeapon === null) {
      console.log(`${this.constructor.name} ne moze baciti oruzije`);
    }

    Hero.droppedWeapons.push(this.activeWeapon);
    console.log(`${this.constructor.name} je bacio ${this.activeWeapon}`);
    this.activeWeapon = null;

    this.changeActiveWeapon();
  }

  attack(monsterClass) {
    if (!this.activeWeapon) {
      let stringInfo = `${this.constructor.name} ne nosi oruzije`;
      FileManager.writeFile(fileName, stringInfo);
      console.log(stringInfo);
      return;
    }

    monsterClass.health -= this.activeWeapon.damage;
    let combatText = `${this.constructor.name} je napravio ${this.activeWeapon.damage} napadne stete ${monsterClass.constructor.name}`;
    FileManager.writeFile(fileName, combatText);
    console.log(combatText);
  }

  weaponPickup(name) {
    if (this.Bag.length === 2) {
      let bagInfo = `Ranac je pun!`;
      FileManager.writeFile(fileName, bagInfo);
      console.log(bagInfo);
      return;
    }

    if (this.allowedWeapons.includes(name)) {
      const foundWeapon = Hero.droppedWeapons.find(
        (droppedWeapon) => droppedWeapon === name
      );
      if (!foundWeapon) {
        console.log(`Oruzije nije pronadjeno: ${name}`);
        return;
      }

      if (this.activeWeapon) {
        console.log(this.activeWeapon, this.Bag);
        this.Bag.push(this.activeWeapon);
      }
      console.log(`${this.constructor.name} je pokupio ${foundWeapon}`);
      this.activeWeapon = foundWeapon;

      let combatText = `${this.constructor.name} je pokupio oruzije ${name}`;
      FileManager.writeFile(fileName, combatText);
      console.log(combatText);
    } else {
      console.log(`${this.constructor.name} ne moze nositi oruzije`);
    }
  }
}

module.exports = {
  Hero,
};
