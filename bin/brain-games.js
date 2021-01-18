console.log("Welcome to the Brain Games!");

//-----------------------------------------------
//import { surfaceArea, square } from './math.js';
import {square} from "./math.js";

//const surfaceOfMars = surfaceArea(3390);
//const surfaceOfMercury = surfaceArea(2440);
const yearSquared = square(5);

//console.log(surfaceOfMars);
//console.log(surfaceOfMercury);
console.log(yearSquared);
//----------------------------------------------

import {hello} from './cli.js';
hello();




/*
var readlineSync = require('readline-sync');

// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

// Handle the secret text (e.g. password).
var favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');
*/

