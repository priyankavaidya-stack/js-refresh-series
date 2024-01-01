// console.log(2 == 1); false
// console.log(2 != 1); true

console.log("2" > 1); 
// converting string to number then compare
console.log("02" > 1);

// console.log(null > 0); false
// console.log(null == 0); false
// console.log(null >= 0); true
//equal operator and comparison work differently.
// Comparisions convert null to 0. That's why null >=0 is true and null > 0 false

// console.log(undefined > 0); false
// console.log(undefined == 0); false
// console.log(undefined < 0); false


// ************ Datatypes overall ************
// divide into 2 parts
// 1. Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggenIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId); false
// const bigNumber = 1456789876547388909289e76


// 2. Reference (Non Primitive)
// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}
// Objects can contain any datatype , even other obj or function

// store function in a variable
const myFun = function (){
    console.log("Hello my function");
}

console.log(typeof heroes);


