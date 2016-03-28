// Part II: require
// Create a new project directory.
// Create a file colorutil.js with the following content: module.exports = { };
//
var oldLumosityFunction = require ('../6-1-Node-Colors/server')

module.exports = {
  lumosity : oldLumosityFunction,
};



// Add your luminosity function from Part I as a method on the module.exports object.
console.log(module.exports.lumosity);
