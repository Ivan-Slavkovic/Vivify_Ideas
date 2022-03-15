const { Weapon } = require("./Weapon");
const { Hero } = require("./Hero");
const { warriorWeapons } = require("./allowedWeapons");

class Macevalac extends Hero {
  constructor(weapon) {
    super(100, new Weapon(weapon), warriorWeapons);
  }
}

module.exports = {
  Macevalac: Macevalac,
};
