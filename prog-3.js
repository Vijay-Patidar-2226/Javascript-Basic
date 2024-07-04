const prompt = require("prompt-sync")();

var a,b,sum;

a = parseInt(prompt("enter a"));
b = parseInt(prompt("enter b"));

sum=a+b;

console.log(`sum of ${a} and ${b}  = ${sum}`);
