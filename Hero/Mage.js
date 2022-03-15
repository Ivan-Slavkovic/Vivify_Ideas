const { Weapon } = require("./Weapon");
const { Hero } = require("./Hero");
const { mageWeapons } = require("./allowedWeapons");

class Mage extends Hero {
  constructor(weapon) {
    super(150, new Weapon(weapon), mageWeapons);
  }
}

module.exports = {
  Mage,
};
