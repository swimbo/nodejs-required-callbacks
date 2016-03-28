// Objective
// Create a series of command line node scripts for working with colors.
//
// Requirements
// Part I: Luminosity
// Write a program that takes a color and returns the luminosity of that color using the following formula: luminosity = 0.2126*r + 0.7152*g + 0.0722*b
//
// $ node luminosity.js 255 239 213 240.52439999999999 $ node luminosity.js 50 15 25 23.163 It should take each RGB color component as a separate command line argument. They can be accessed with process.argv[2], process.argv[3], process.argv[4]. (process[argv[0] refers to the executing program, 'node', and process.argv[1] refers to the current filename, e.g. 'luminosity.js'.)

var fs = require('fs');
console.log(process.argv)

var lumosity = function(Red, Green, Blue){
  fs.readFileSync(process.argv[1], 'utf-8');
  var Red = process.argv[2];
  var Blue = process.argv[3];
  var Green = process.argv[4];
  var lumosity = 0.2126*Red + 0.7152*Blue + 0.0722*Green;
  console.log(lumosity);
}
lumosity()

//


// Bonus I: Luminosity Library
// Add a darken function to your luminosity module which returns the given color in r,g,b, but with each value decreased by 20% in order to return a darker overall color. Write a darken-cli.js to take r,g,b command line arguments like luminosity-cli.js to test your darken function. It should also require colorutil.js. It should output space-separated r,g,b values for the darker color.
//
// $ node darken-cli.js 255 239 213
// 204 191.2 170.4
// $ node darken-cli.js 50 15 25
// 40 12 20
// Bonus II: Web Colors API
// Write a program that takes a color name like 'red', 'green', or 'blue' as a command line argument and returns the RGB components, comma-separated. Use the request module to make an HTTP request to retrieve a list of web colors to use for comparison.
//
// Create a new project directory.
// Initialize an empty package.json file using npm init.
// Install the request module using npm install --save request.
//
// ? Note: npm install downloads the module and saves it in the node_modules folder. The --save option modifies your package.json, adding the module as a dependency. Use --save-dev to add the module as a dependency for development only, such as a unit testing framework like mocha.
//
// There are 140 web color names that browsers recognize. Use the request module to retrieve webcolors.json which contains an array of all 140 colors, stored as objects in the following format: { name: 'FireBrick', hex: 'B22222', rgb: { r: 178, g: 34, b: 34 } }
//
// Call JSON.parse on the content body that comes back from the request in order to get a workable Javascript array containing all the colors.
//
// Search the colors array for a color name that matches the user-specified name. Make sure to do a case-insensitive comparision. Return the R, G, and B components separated by spaces: $ node color.js papayawhip 255 239 213
