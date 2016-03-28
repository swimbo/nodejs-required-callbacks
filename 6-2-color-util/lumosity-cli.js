// Create a file luminosity-cli.js which does the same thing as luminosity.js from Part I, but instead requires colorutil.js to include the luminosity function.

var fs = require('fs');
console.log(process.argv)

// require colorutil.js. Store it on a variable colorutil.
var colorUtil = require ('./colorutil.js')

// Call the luminosity method defined on the colorutil module, passing the r, g, b values that are specified on the command line (process.argv[2], process.argv[3], process.argv[4]) and store the calculated result in a variable.

var originalLumosity = colorUtil.lumosity

console.log(originalLumosity);



// console.log the result.
// Run node luminosity-cli.js. $ node luminosity-cli.js 255 239 213 240.52439999999999 $ node luminosity-cli.js 50 15 25 23.163
//
// $ Success! You can now create your own library to be used in any nodejs script. Anything that you add to the module.exports object will be available to other scripts via require.
//
