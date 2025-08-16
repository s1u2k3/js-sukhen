// Primitive datatypes

// 7 types => String, Number, Boolean, null, undefined, Symbol, Bigint

const str = "Sukhen"
const val = 98
let bool = true
const my = null
let userEmail;

const id = Symbol('123')

const newId = Symbol('123')

console.log( id === newId);


// Reference (non-primitive)

// Array, Object, Functions


let ar =["sukhen", "sumit", "basu"];

let myObj = {
    name: "sukhen",
    age:20
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof(my));

console.log(typeof(undefined));

console.log(typeof(myFunction));


// javascript is a dynamic language because in javasript don't require to declare data types