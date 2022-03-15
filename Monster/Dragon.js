const { Monster } = require("./Monster");

class Zmaj extends Monster {
  constructor(health) {
    super(health, [
      { nameOfAttack: "Udara", damage: 5 },
      { nameOfAttack: "Bljuje vatru", damage: 20 },
    ]);
  }
}

module.exports = {
  Zmaj,
};
