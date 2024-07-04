const prompt = require("prompt-sync")();

var p,r,t,simple;

p = parseInt(prompt("enter principle"));
r = parseInt(prompt("enter rate"));
t = parseInt(prompt("enter time"));
simple=(p*r*t)/100;

console.log(`simple interest ${p} and ${r} and ${t} = ${simple}`);

