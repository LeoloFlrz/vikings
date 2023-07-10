class Soldier {
    constructor(name, health, strength) {
        this.name = name
        this.health = health
        this.strength = strength
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
    }
}

module.exports = Soldier;
