'use strict';

// task:
// Create a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {  
    function fight(name1, name2, health1, health2, force1, force2) {
        for (let i = 1; health1 > 0; i++) {
           
           if (i % 2 != 0) {
             health2 -= force1;
           } else {
             health1 -= force2;
           }
        }
        
        return health2 <= 0 ? name1 : name2;
    }
    
    if (fighter1.name === firstAttacker) {
      return fight(fighter1.name,
                   fighter2.name,
                   fighter1.health,
                   fighter2.health,
                   fighter1.damagePerAttack,
                   fighter2.damagePerAttack);
    } else {
      return fight(fighter2.name,
                   fighter1.name,
                   fighter2.health,
                   fighter1.health,
                   fighter2.damagePerAttack,
                   fighter1.damagePerAttack);
    }
}

console.log( declareWinner(new Fighter('John', 10, 2), new Fighter('Piter', 5, 4), 'John') );