class Weapon {
  constructor(name) {
    this.name = name;

    if (name === "Koplje") return (this.damage = 15);
    else if (name === "Mac") return (this.damage = 10);
    else if (name === "Carolija") return (this.damage = 20);
    else {
      return console.log("Ne postoji odredjeno oruzije");
    }
  }
}

module.exports = {
  Weapon,
};
