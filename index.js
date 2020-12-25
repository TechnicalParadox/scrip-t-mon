import { TestObject } from './assets/js/TestObject.mjs';
import { Creature } from './assets/js/Creature.mjs';

console.log("Test");
let myObject = new TestObject("My Guy");

myObject.sayName();

let giamo = new Creature("Giamo", 1000, 100);
giamo.addAttack("Move A", 100, 100);
giamo.addAttack("Move B", 125, 75);

console.log(giamo);
