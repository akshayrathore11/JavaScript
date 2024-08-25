const score = 400; //js automatically determine it as a number
console.log(score);

const balance = new Number(200) //here im instructing that it is number
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNum = 23.44544;
console.log(otherNum.toPrecision(3));// return a string

const hundreds = 10000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));





