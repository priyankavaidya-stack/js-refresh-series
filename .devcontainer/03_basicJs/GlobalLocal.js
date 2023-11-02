// ************* Concept of let, const, var *****************

// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// {}    // this is the scope in function , if else

// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
//     // here scope of let, const is in between braces
//     // but var has scope out of braces because of hoisting
//     // it gets declared above its scope
// }

// console.log(a);
// console.log(b);
// console.log(c);

// Output
// ReferenceError: a is not defined
// ReferenceError: b is not defined
// 30

// Reason
// Hoisting


// Q 1:
// let a = 300
// if(true) {
//     let a = 10
//     const b = 20
//     console.log("INNER: ", a);
// }
// console.log("OUTER:", a);

// output
// INNER:  10
// OUTER: 300


// **************************************************
// broswer console scope is different 
// and we run js files with node they have diff scope
// **************************************************


// Q 2:
// function one(){
//     const username = "priyanka"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     console.log(website);
//     two();
// }
// one();

// output
// ReferenceError: website is not defined
// and two() function not executed as log threw error

// reason
// website is a const datatype which has scope within two() braces
// you cannot access let, const outside its scope


// Q 3:
// function one(){
//     const username = "priyanka"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     two();
// }

// one();


// output
// priyanka

// reason
// const datatype priyanka has global scope which can be access anywhere whitihn one();

// Q 4:
// if(true){
//     const username = "priyanka"
//     if(username === "priyanka"){
//         const website = " youtube"
//         console.log(username + website);
//     }
//     console.log(website);
// }
// console.log(username);

// output
// priyanka youtube
// Reference Error: website is not defined
// Also one error will be there
// Reference Error: username is not defined


// ****************** Interesting *********************

// function addOne(num){
//     return num+1;
// }

// addOne(5)
// const addTwo = addOne(5)
// console.log(addTwo);

// function addOne(num){
//     return num+1;
// }

// addOne(5)

// const addTwo = function(num){
//     return num + 2
// }

// const a = addTwo(5)
// console.log(a);
// 7


// Que :
// console.log(addOne(5));

// function addOne(num){
//     return num+1;
// }

// output
// 6
// hoisting happened


// Que:
// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }

// output
// Cannot access 'addTwo' before initialization
// because of const





