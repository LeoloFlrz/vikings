class War {
  constructor(vikingArmy) {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomViking = this.vikingArmy[randomVikingIndex];

    randomSaxon.receiveDamage(randomViking.strength);

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
      return "A Saxon has died in combat";
    }

    return "";
  }

  saxonAttack() {
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomViking = this.vikingArmy[randomVikingIndex];
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[randomSaxonIndex];

    randomViking.receiveDamage(randomSaxon.strength);

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
      return `${randomViking.name} has died in act of combat`;
    }

    return "";
  }
}

module.exports = War;
