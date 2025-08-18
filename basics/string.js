const name = "sukhen-bera"

const count = 10

console.log(`Hello my name is ${name} and my repo count is ${count}`); // string interpolation

const gameName = new String("sukhen")    // String declare in another way

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

const str2 = name.toUpperCase();
console.log(str2);

const str3 = name.toLowerCase();
console.log(str3);

let str4 = "subha"

let str5 = str4.charAt(0);
console.log(str5);

let str6 = str4.indexOf('h');
console.log(str6);


let sub = name.substring(0,4)
console.log(sub);

let sli = name.slice(0,4)
console.log(sli);

let sli1 = name.slice(-8,4)
console.log(sli1);

const newstr  = "   sukhen   "
console.log(newstr.trim());

const url = "https://sukhen.com/sukhen20%bera"

console.log(url.replace('%','-'));

console.log(url.includes('sukhen'))

console.log(name.split('-'))




