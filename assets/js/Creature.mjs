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

/**
 * Creates a creature with inquirer prompts and passes it back to rf.
 * @param  {function} rf - the function to pass the new Creature to upon creation
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
    .then(answers => {attackInquirer(rf, answers);}) // We know what creature to create, now lets work on Attacks
    .catch(error => {console.log("Error:", error);});
}

/** Asks the user if they want to add more attacks */
function attackInquirer(rf, a, c)
{
  let creature;
  if (c) creature = c;
  else creature = new Creature(a.name, a.maxHealth, a.speed);

  let mustAdd = false;
  let cantAdd = false;
  if (creature.attacks.length == 0)
    mustAdd = true;
  else if (creature.attacks.length >= 4) // Have up to 4 attacks per Creature
    cantAdd = true;

  if (mustAdd || !cantAdd) // If there is room for more attacks
  {
    // Ask if the user wants to add an attack
    inquirer
      .prompt
      (
        {
          type: 'confirm',
          name: 'add',
          message: 'Would you like to add another attack',
          default: true
        }
      )
      .then(answer => addAttackConfirmer(rf, answer, creature))
      .catch(e => {console.log("Error", e);});
  }
  else // User can't add another attack
  {
    rf(creature);
  }
}

/** Asks questions about the attack to create */
function addAttackConfirmer(rf, a, creature)
{
  if (a.add) // User wants to add another attack
  {
    let attackQuestions =
    [
      {
        type: 'input',
        name: 'name',
        message: 'Attack name:',
        validate: a => {return a ? true : 'Enter an attack name!';}
      },
      {
        type: 'number',
        name: 'damage',
        message: 'Attack damage:',
        validate: a => {return a ? true : 'Enter attack damage!';}
      },
      {
        type: 'number',
        name: 'accuracy',
        message: 'Attack accuracy (0-100):',
        validate: a => {return a ? true : 'Enter attack accuracy!';}
      },
      {
        type: 'number',
        name: 'speed',
        message: 'Attack speed (0-200):',
        validate: a => {return a ? true : 'Enter attack speed!';}
      }
    ]

    inquirer
      .prompt(attackQuestions)
      .then(a => createAttack(rf, a, creature))
      .catch(e => {console.log("Error", e);});
  }
  else // User is finished adding attacks
    rf(creature);
}

/**
 * Adds a new attack to Creature's attacks list
 * @param  {function} rf     - the function to call after Creature creation is finished.
 * @param  {Object} a        - The array of answers from the previous inquirer.
 * @param  {Creature} creature The creature whom we need to add the attack to.
 * @return {undefined}
 */
function createAttack(rf, a, creature)
{
  creature.addAttack(a.name, a.damage, a.accuracy, a.speed);
  console.log(`Attack added for ${creature.getName()}`, creature.getAttacks()[creature.getAttacks().length - 1]);
  attackInquirer(rf, undefined, creature);
}

export { Creature };
export { createCreature };
