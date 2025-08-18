const score = 400 
console.log(score);

const newScore = new Number(100);
console.log(newScore);

console.log(newScore.toString());

console.log(newScore.toString().length);

console.log(newScore.toFixed(2));


const othernum = 123.89
console.log(othernum.toPrecision(4));

const hundreds = 100000000
console.log(hundreds.toLocaleString());

console.log(hundreds.toLocaleString('en-IN'));

// .MAX_VALUE   // .MIN_VALUE  // MAX_SAFE_INTEGER

// ++++++++++++++++++++ MATHS +++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-8));

console.log(Math.round(8.9));

console.log(Math.ceil(8.2));

console.log(Math.floor(8.6));

console.log(Math.max(8, 7, 9, 10));

console.log(Math.min(5, 6, 7, 8));


// .random

console.log(Math.random());

console.log(Math.random()*10 + 1);

const min = 10 
const max = 20

console.log(Math.floor(Math.random()* (max - min + 1)) + min)









