import { TestObject } from './assets/js/TestObject.mjs';
import { Creature } from './assets/js/Creature.mjs';
import { createCreature } from './assets/js/Creature.mjs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const inquirer = require('inquirer');

var player, enemy;

function init()
{
  console.log("Test");
  let myObject = new TestObject("My Guy");
  myObject.sayName();

  console.log("You are about to create your creature.");
  createCreature(pt2);
}

var pt2 = function(creature)
{
  player = creature;
  player.addAttack("Move A", 100, 100, 100);
  player.addAttack("Move B", 125, 75, 110);
  console.log(player);

  console.log("You are about to create your enemy.");
  createCreature(pt3);
}

var pt3 = function(creature)
{
  enemy = creature;
  enemy.addAttack("Move A", 100, 100, 100);
  enemy.addAttack("Move B", 125, 75, 110);
  console.log(enemy);

}

init();
