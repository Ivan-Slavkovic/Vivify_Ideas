const { Monster } = require("./Monster");
class Pauk extends Monster {
  constructor(health) {
    super(health, [
      { nameOfAttack: "Udara", damage: 5 },
      { nameOfAttack: "Ujeda", damage: 8 },
    ]);
  }
}

module.exports = {
  Pauk,
};
