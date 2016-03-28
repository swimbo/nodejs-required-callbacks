// Write a separate program that takes a color and returns 'light' if the luminosity is greater than 155 and 'dark' otherwise. At this point, you can just copy the luminosity function from the last step into a new file. You'll require it as a module in Part III. $ node islight.js 255 239 213 light $ node islight.js 50 15 25 dark
//

var fs = require('fs');
console.log(process.argv)

var colorLumosity = function(Red, Green, Blue){
  fs.readFileSync(process.argv[1], 'utf-8');
  var Red = process.argv[2];
  var Blue = process.argv[3];
  var Green = process.argv[4];
  var lumosity = 0.2126*Red + 0.7152*Blue + 0.0722*Green;
  console.log(lumosity);
  return lumosity
}

var globalLumosity = colorLumosity()
console.log(globalLumosity);

var isLight = function (){
  if (globalLumosity <= 155){
    return 'light'
  }
  else{
    return 'dark'
  }

}
console.log(isLight());
