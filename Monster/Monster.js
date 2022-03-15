const { FileManager } = require("../FileManager");
const { fileName } = require("../fileName");

class Monster {
  constructor(health, abilities) {
    this.health = health;
    this.abilities = abilities;
  }
  attack(hero) {
    let randomAttack = Math.ceil(Math.random() * 100) + 1;
    if (randomAttack < 50) {
      let combatText = `${this.constructor.name} je napao ${hero.constructor.name} pomocu ${this.abilities[0].nameOfAttack} ${this.abilities[0].damage} napadne stete`;

      FileManager.writeFile(fileName, combatText);

      console.log(combatText);

      hero.health -= this.abilities[0].damage;
    } else {
      let combatText = `${this.constructor.name} je napao ${hero.constructor.name} pomocu ${this.abilities[1].nameOfAttack} ${this.abilities[1].damage} napadne stete`;
      FileManager.writeFile(fileName, combatText);

      console.log(combatText);

      hero.health -= this.abilities[1].damage;
    }
  }
}

module.exports = {
  Monster,
};
