/* 1. Hello World */
//Hellow World: A basic command to run a javascript file is: node name_of_file

function sayHello(name) {
  console.log('Hello ' + name);
}

sayHello('Mosh');

console.log("This is a logged message"); //global scope

//setTimeout() //call function after set amount of time
//clearTimeout(); //cancels a timeout previously established by calling setTimeout()

//setInterval(); //call a function repeatedly after a delay
//clearInterval();

var message = '';
//window.message does not work anymore like in browsers, we have to use the keyword global
//Also the message variable is not added to global as it would for window

global.console.log('Mosh');

//global is a variable whose scope is allocated to the node environment i.e. all files
//variables we define within a file like 'message' above only has scope pertaining to this file.

/* 2. Modules */
//Node avoids defining functions for global scope and instead uses modules!
//This helps us avoid name conflictions when defining functions or variables with the same name.
//Kind of like a class in OOP, we encapsulate the functions and variables.

//EVERY file in node is considered a MODULE!
//Like is OOP these variables and functions within each module are 'private'
//To make it 'public' you have to export it

//Every node app needs a 'Main Module' which is like the main function in OOP

//We can look at the metadata for a module using:
console.log(module); //The module variable is not global

/* 3. Creating/Loading a Module */
//Creating a module
// We will create logger.js to track login 

//Importing modules
//Good practice to declare the module as a constant so it does not get overwritten during runtime
const logger = require('./logger.js'); //Returns an object that is exported from the target module and can capture it in a variable
console.log(logger);
logger.log('message');

//You can also import single functions and not entire modules, check the note left in logger.js
