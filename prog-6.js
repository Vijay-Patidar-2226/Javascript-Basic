const prompt = require("prompt-sync")();

var distance,meter,cm,inch,feet;

distance = parseInt(prompt("enter distance :"));

meter = 1000*distance;
cm=100*meter;
inch=cm/2.54;
feet=inch/12;


console.log(`distance to meter ${distance} = ${meter}`);
console.log(`distance to cm    ${distance} = ${cm}`);
console.log(`distance to inch ${distance} = ${inch}`);
console.log(`distance to feet ${distance} = ${feet}`);