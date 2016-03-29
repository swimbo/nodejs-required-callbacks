var fs = require('fs');
console.log(process.argv)

// require lumosity-cli.js. Store it on a variable lumosityCLICall.
var lumosityCLICall = require ('./lumosity-cli.js')

// Call the luminosity method defined on the colorutil module, passing the r, g, b values that are specified on the command line (process.argv[2], process.argv[3], process.argv[4]) and store the calculated result in a variable.

var darkLumosity = lumosityCLICall.darken

console.log(darkLumosity);
