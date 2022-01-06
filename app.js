/* 1. Hello World */
//Hellow World: A basic command to run a javascript file is: node name_of_file

//function sayHello(name) {
//  console.log('Hello ' + name);
//}

//sayHello('Mosh');

//console.log("This is a logged message"); //global scope

//setTimeout() //call function after set amount of time
//clearTimeout(); //cancels a timeout previously established by calling setTimeout()

//setInterval(); //call a function repeatedly after a delay
//clearInterval();

//var message = '';

//window.message does not work anymore like in browsers, we have to use the keyword global
//Also the message variable is not added to global as it would for window

//global.console.log('Mosh');

//global is a variable whose scope is allocated to the node environment i.e. all files
//variables we define within a file like 'message' above only has scope pertaining to this file.

//-----------------------------------------------------------------------------------------------------------------------

/* 2. Modules */
//Node avoids defining functions for global scope and instead uses modules!
//This helps us avoid name conflictions when defining functions or variables with the same name.
//Kind of like a class in OOP, we encapsulate the functions and variables.

//EVERY file in node is considered a MODULE!
//Like is OOP these variables and functions within each module are 'private'
//To make it 'public' you have to export it

//Every node app needs a 'Main Module' which is like the main function in OOP

//We can look at the metadata for a module using:
//console.log(module); //The module variable is not global

//-----------------------------------------------------------------------------------------------------------------------

/* 3. Creating/Loading a Module */
//Creating a module
// We will create logger.js to track login 

//Importing modules
//Good practice to declare the module as a constant so it does not get overwritten during runtime
//const logger = require('./logger.js'); //Returns an object that is exported from the target module and can capture it in a variable
//console.log(logger);
//logger.log('message');

//You can also import single functions and not entire modules, check the note in logger.js

//-----------------------------------------------------------------------------------------------------------------------

/* 4. Native Modules */
//Look at the online documentation to see the native modules.

//Path
/*
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
*/

//OS
//Grabbing information from the Operating System.
/*const os = require('os');
var totalMemory = os.totalmem();
totalMemory = totalMemory/Math.pow(1024,3);
var freeMemory = os.freemem();
freeMemory = freeMemory/Math.pow(1024,3);

//Template String (Based on ES6 allows us to perform String Interpolation)
console.log(`Total Memory: ${totalMemory} GB`);
console.log(`Free Memory: ${freeMemory} GB`);
*/

//Filesystem
/*
const fs = require('fs');
//Avoid methods like fs.accessSync() because synchronous methods causes blocking and we want the asycnhronous version which is fs.access() to prevent blocking

//const files = fs.readdirSync('./'); //This will return the files in this directory as a string array.
//console.log(files);


//All asynchronous methods takes a function as the last parameter to call right after the current function runs. These are callback functions
//For this function the callback takes two parameters, an error and a string array output
//One of the callback function parameters will have a value and the other will be null
fs.readdir('$', function(err, files) {
  if(err) console.log('Error', err);
  else console.log('Result', files);
});
*/

//-----------------------------------------------------------------------------------------------------------------------

/* 5. Events */
//Events are signals to let us know that something has happened within our application 

/*
const EventEmitter = require('events'); //The naming is using uppercase because we are grabbing the class and not the object and now we need an instance of the class
const emitter = new EventEmitter();

//With our emmiter we can raise an event similar to throwing an exception without stopping the program. The raised event needs to be caught by a listener so first we will register the listener then raise the event

//Register the listener
//There are two methods we can use, te addListener or the equivalent 'on' method
//There are two parameters, the name of the event to listen for and a callback function to run when the event is caught
//Note that the listener must be registered before raising an event
emitter.on('messagedLogged', function(){
  console.log('Listener called');
});
emitter.emit('messagedLogged')

//Most times we want to send information about the error back to the developer, server, or user and we can by adding more event arguments in the emit function

emitter.on('messagedLogged2', function(eventArg){
  console.log('Second listener called', eventArg)
});
emitter.emit('messagedLogged2', {id:1, url: 'http://'}); //event, object/eventArg {id, url}

//Exercise

emitter.on('Logging', function(eventArg){
  console.log('Logging', eventArg);
});

emitter.emit('Logging', {data: 'This is a test logged message.'});
*/

//-----------------------------------------------------------------------------------------------------------------------

/* 6. Extending Event Emmiter (Using events the proper way) */
//In normal circumstances we do not want to work with the emitter directly. We want to extend a class for it and have all of its capabilities stored there. The reason we extend is to allow us to add more functionality like custome methods to our Emitter, which in our case is the log function.
//Look at the logger.js file

/*
const Logger = require('./logger.js');
const logger = new Logger();

logger.on('messagedLogged2', function(eventArg){
  console.log('Second listener called', eventArg)
});

logger.log('message');
*/

//-----------------------------------------------------------------------------------------------------------------------

/* 7. HTTP Module */

/*
const http = require('http');
const server = http.createServer(); //This server is an extension of event emitter specifically Event Emitter > Net.Server > HTTP.Server

//Connection is a default event. Look in the documentation for details.
server.on('connection',  function(socket){
  console.log('New connection...');
});

//This allows us to listen to a specified port on the machine. This is raising an event and needs to be caught by the listener above
server.listen(3000); 
console.log('Listening on port 3000...');
*/

//In a real world application we will not be responding to the connection event. It is too low level
const http = require('http');
const server = http.createServer(function(req, res){ //Request and response
  //Instead of working with the socket like before we can work with the actual request and responses
  if(req.url === '/') {
    res.write('Hellow World');
    res.end();
  }

});

server.listen(3000); 
console.log('Listening on port 3000...');

//Now this is not how we will typically go about handling more routes/endpoints. Things will get very messy and that is where express comes in as a build upon the HTTP Module in node.

