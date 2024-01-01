// High Order Functions
// ************************** forof loop ***********************

// for of
// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// output
// 1
// 2
// 3
// 4
// 5


// const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(greet);
// }

// output
// H
// e
// l
// l
// o
 
// W
// o
// r
// l
// d

// Maps
// Map is the object, holds key value pair
// remembers the order of keys inserted

 
// const map = new Map();

// map.set('id', "1")
// map.set('name', "India")
// map.set('code', "+91")

// console.log(map);

// const map = new Map();
// map.set("id",1);
// map.set("name","Priyanka")
// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ":-", value);
// }

// output
// id :- 1
// name :- India
// code :- +91

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ":-",value);
// }

// output
// myObject is not iterable

// ************************* forin loop ************************************
// reason
const myObj = {
    js : "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}


// use forin loop for iterating objects
// for (const key in myObj) {
//    console.log(key);
// }

// output
// js
// cpp
// rb
// swift

// to access key's value in objects
// for (const key in myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`);
// }

// output
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple


// const arr = ["js", "ruby", "cpp", "python"]

// for (const key in arr) {
//     console.log(key,":",arr[key]);
// }

// output
// 0 : js
// 1 : ruby
// 2 : cpp
// 3 : python

// ********************************
// recap the map things
// const mp = new Map();
// map.set("IN","India")
// map.set("USA","Unites States of America")
// map.set("Fr","France")

// // not iterble this way
// for (const key in mp) {
//     console.log(key,":",value);
// }

// *********************************
// Generally 
// for objects --> forin
// for arrays --> forof
// *********************************
