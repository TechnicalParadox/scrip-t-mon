import { TestObject } from './assets/js/TestObject.mjs';
import { Creature } from './assets/js/Creature.mjs';
import { Battle } from './assets/js/Battle.mjs';
import { createCreature } from './assets/js/Creature.mjs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const inquirer = require('inquirer');

var player, enemy;

function init()
{
  console.log("You are about to create your creature.");
  createCreature(pt2);
}

var pt2 = function(creature)
{
  player = creature;
  console.log(player);

  console.log("You are about to create your enemy.");
  createCreature(pt3);
}

var pt3 = function(creature)
{
  enemy = creature;
  console.log(enemy);

  let fight = new Battle(player, enemy);
  fight.begin();

  while (fight.isFighting())
  {
    fight.status();
    fight.nextMove();
  }
}

init();
