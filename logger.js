//This module will be to track login messages.
var url = 'http://mylogger.io/log'; //This is fake, Lets imagine that we are using a 3rd party logging service. We will send an http request to this url
function log(message) {
  //Send an http request (we will not actaully issue this request)
  console.log(message);
}

//We want to use the function above in the main app so we need to export the function and variable
//Syntax: module.exports.export_variable/function_name = actual_name
module.exports.log = log;
module.exports.endPoint = url; //Note that we do not need to run this line so we can keep url private

//To export just the function and not the entire module + functions you can type
//module.exports = log;

/* 3.Wrapping Modules */
// Modules are actually functions ran at runtime with the following syntax
// (function(exports, require, module, __filename, __dirname){ your code here })
//The main importance is that the require, module, exports, etc are local functions and not global functions
//We can run something like consol.log(__filename); and get the filename for this module