const Soldier = require('./../soldier/Soldier')

class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength)
        this.health = health
        this.strength = strength
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.health <= 0) {
            return 'A Saxon has died in combat'
        } else {
            return `A Saxon has received ${damage} points of damage`
        }
    }
}

module.exports = Saxon;
