const prompt = require("prompt-sync")();

var weight,quintal,kg,gram,miligram;

weight = parseInt(prompt("enter weight"));

quintal = 10*weight;
kg=100*quintal;
gram=1000*kg;
miligram=1000*gram;


console.log(`weight to quintal${weight} = ${quintal}`);
console.log(`weight to kg ${weight} = ${kg}`);
console.log(`weight to gram ${weight} = ${gram}`);
console.log(`weight to miligram ${weight} = ${miligram}`);