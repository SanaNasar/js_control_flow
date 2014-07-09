 
var temperature1 = prompt("What's the current temperature in celsius?");
var ftemp = temperature1 * 1.8 + 32;
console.log ("The current temperature in fahrenheit is " + ftemp );
 
var temperature2 = prompt("What's the current temperature in fahrenheit?");
// // // Convert it to celsius and output "NN°F is NN°C."
var ctemp = (temperature2 - 31) / 1.80;
console.log ("The current temperature in celsius is " + ctemp );