const prompt = require("prompt-sync")();

var math,ada,ca,adc,dbms,avg;

math = parseFloat(prompt("enter math :"));
ada = parseFloat(prompt("enter ada :"));
ca = parseFloat(prompt("enter ca :"));
adc = parseFloat(prompt("enter adc :"));
dbms = parseFloat(prompt("enter dbms :"));

avg=(math+ada+ca+adc+dbms)/5;

console.log("avg of 5 subj",avg);

