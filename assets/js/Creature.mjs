import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const inquirer = require('inquirer');

class Creature
{
  /**
   * Constructs a new Creature
   * @param {String} name      - The name of the creature
   * @param {Number} maxHealth - The maximum health of the creature
   * @param {Number} speed     - The speed value of the creature
   */
  constructor(name, maxHealth, speed)
  {
    this.setName(name);
    this.setMaxHealth(maxHealth);
    this.setHealth(maxHealth);
    this.setSpeed(speed);
    this.setUpAttacks();
  }

  setUpAttacks()
  {
    this.attacks = [];
  }

  addAttack(name, damage, accuracy, speed)
  {
    let attack = {};
    attack.name = name;
    attack.damage = damage;
    attack.accuracy = accuracy;
    attack.speed = speed;
    this.attacks.push(attack);
    return attack;
  }

  getName() { return this.name; }

  setName(name) { this.name = name; }

  getAttacks() { return this.attacks; }

  getMaxHealth() { return this.maxHealth; }

  setMaxHealth(amount) { this.maxHealth = amount; }

  getHealth() { return this.health; }

  setHealth(amount) { this.health = amount; }

  getSpeed() { return this.speed; }

  setSpeed(amount) { this.speed = amount; }

  attacked(attack)
  {
    // TODO: Account for accuracy/etc and this creatures stats and dynmically respond
    // % Chance of hit = (Attack Speed / Creature's Speed) * Attack Accuracy
  }


}

// Create a Creature with Inquirer prompts
/**
 * Creates a creature with inquirer prompts.
 * @param  {function} rf - the function to pass the new Creature to
 * @return {undefined}
 */
function createCreature(rf)
{
  const creatureCreationQs =
  [
    {
      type: 'input',
      name: 'name',
      message: 'Creature\'s Name:',
      validate: a => {return a ? true : 'Enter the Creature\'s name!';}
    },
    {
      type: 'number',
      name: 'maxHealth',
      message: 'Creature\'s Max Health:',
      validate: a => {return a ? true : 'Enter the Creature\'s max health!';}
    },
    {
      type: 'number',
      name: 'speed',
      message: 'Creature\'s Speed (0-200):',
      validate: a => {return a ? true : 'Enter the Creature\'s speed (0-200)!';}
    }
  ];

  inquirer
    .prompt(creatureCreationQs)
    .then(a => {rf(new Creature(a.name, a.maxHealth, a.speed));})
    .catch(error => {console.log("Error:", error);});
}

export { Creature };
export { createCreature };
