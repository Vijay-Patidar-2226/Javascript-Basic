const prompt = require("prompt-sync")();

var rectangle,length,breadth;

length = parseInt(prompt("enter length"));
breadth = parseInt(prompt("enter breadth"));

rectangle=length*breadth;

console.log('area of rectangle :',rectangle);