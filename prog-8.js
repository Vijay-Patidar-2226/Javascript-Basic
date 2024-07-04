const prompt = require("prompt-sync")();

var radius,circle;

radius = parseInt(prompt("enter radius"));

circle=3.14*radius*radius;

console.log(` circle  ${radius} and ${radius} = ${circle}`);