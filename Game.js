const { Zmaj } = require("./Monster/Dragon");
const { Pauk } = require("./Monster/Spider");
const { Macevalac } = require("./Hero/Warrior");
const { Mage } = require("./Hero/Mage");
const { Weapon } = require("./Hero/Weapon");

const { FileManager } = require("./FileManager");
const { fileName } = require("./fileName");

class Game {
  constructor(hero, monster) {
    this.hero = hero;
    this.monster = monster;
  }

  displayWinner() {
    if (this.hero.health < this.monster.health) {
      let combatText = `${this.monster.constructor.name} je pobedio u duelu sa ${this.hero.constructor.name} `;
      FileManager.writeFile(fileName, combatText);
      console.log(combatText);
    } else {
      let combatText = `${this.hero.constructor.name} je pobedio u duelu sa ${this.monster.constructor.name}`;
      FileManager.writeFile(fileName, combatText);
      console.log(combatText);
    }
  }
  //Function that plays out the fight
  startFight() {
    while (this.hero.health > 0 && this.monster.health > 0) {
      let randomAttack = Math.ceil(Math.random() * 100) + 1;
      if (randomAttack < 50) {
        this.hero.attack(this.monster);
      } else {
        this.monster.attack(this.hero);
      }
    }
    this.displayWinner(this.hero, this.monster);
  }
}

const Sindragosa = new Zmaj(100);
const Arthas = new Macevalac("Koplje");

FileManager.clearFile(fileName);

let duel = new Game(Arthas, Sindragosa);
duel.startFight(Arthas, Sindragosa);

// Manual fight
const Garen = new Macevalac("Mac");
const Shyvana = new Zmaj(100);
FileManager.writeFile(fileName, "\nManual fight: \n");
Garen.attack(Shyvana);
Garen.attack(Shyvana);
Shyvana.attack(Garen);
Garen.dropWeapon();
Garen.dropWeapon();
Garen.dropWeapon();
Garen.dropWeapon();
Garen.dropWeapon();
Garen.attack(Shyvana);
Garen.weaponPickup("Mac");
Garen.weaponPickup("Koplje");
Garen.weaponPickup("Mac");
Garen.weaponPickup("Mac");
Garen.attack(Shyvana);
Shyvana.attack(Garen);
Shyvana.attack(Garen);
Garen.attack(Shyvana);
Shyvana.attack(Garen);
Garen.attack(Shyvana);
Garen.attack(Shyvana);
Garen.attack(Shyvana);
