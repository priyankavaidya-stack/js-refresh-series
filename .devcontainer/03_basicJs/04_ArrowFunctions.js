// Use of 'this' keyword

// const user = {
//     username: "priyanka",
//     price: 999,

//     welcomeMsg: function(){
//         console.log(`${this.username}, welcome to website`);
//     }
// }

// user.welcomeMsg()
// priyanka, welcome to website

// user.username = "sam"
// user.welcomeMsg()
// sam, welcome to website


// const user = {
//     username: "priyanka",
//     price: 999,

//     welcomeMsg: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomeMsg()

// output
// priyanka, welcome to website
// here this refers to current context of object
// {
//   username: 'priyanka',
//   price: 999,
//   welcomeMsg: [Function: welcomeMsg]
// }


// const user = {
//         username: "priyanka",
//         price: 999,
    
//         welcomeMsg: function(){
//             console.log(`${this.username}, welcome to website`);
//             console.log(this);
//         }
// }
// console.log(this);
// output
// {}
// As we are in node environment, current ref of this is empty 
// No context is provided


// As Javascript engine runs on browser
// If we try to access 'this' in browser console, it gives context of window 
// that is a global object

// But as node, deno provides the environment to run js engine,
// we have that standalone engine


// function chai(){
//     console.log(this);
// }
// chai()

// output
// we will get a object will global variables and diff menthods access



// function chai(){
//     let username = "Priyanka"
//     console.log(this.username);
// }
// chai()

// output
// undefined

// Why
// Because it doesn't work in function


// Que:
// const chai = function(){
//     let username = "Priyanka"
//     console.log(this.username);
// }
// chai();

// output
// undefined
// WHY
// Since the function is a regular function (not an arrow function), the value of this inside the function would refer to the global object
// (which is window in a browser or global in Node.js) in non-strict mode and would be undefined in strict mode.


// Que:
// Arrow functions
// const chai = () => {
//     let username = "Priyanka"
//     console.log(this);
// }

// chai();

// output
// undefined


// ******************** Arrow Functions ******************************
// const add = (num1, num2) => {
//     return num1 + num2
// }

// console.log(add);
// // [Function: add]
// console.log(add(1, 2));
// // 3


// ********** Implicit Return *********//
// for one line return statement
// curly braces use hua toh return likhna padega
// () likha toh nhi likhna padega return

// 1] const add = (num1, num2) => num1 + num2;
// 2] const add = (num1, num2) => {
//     return num1 + num2;
// }
// 3] const add = (num1, num2) => (num1 + num2);
// console.log(add(3, 4));
// // 7



// const myArray = [2, 5, 6, 7]

// three types to write function in for loop

// myArray.forEach(()=>{  })
// myArray.forEach(function(){ })
// myArray.forEach(()=>())



// ************* Difference between Regular and arrow function **************
// The main differences between regular functions and arrow functions in JavaScript are as follows:
// 1. Syntax: Arrow functions have a more concise syntax compared to regular functions. They do not have their own bindings to this, super, arguments, or new.target, which can make them more predictable.
// 2. this binding: In regular functions, the value of this is dynamically scoped, whereas in arrow functions, the value of this is lexically (or statically) scoped. This means that arrow functions do not have their own this context; instead, they inherit the this value from the surrounding code.
// 3. Arguments object: Arrow functions do not have their own arguments object. Instead, they inherit the arguments object from the parent scope.
// 4. Constructability: Regular functions are constructible and can be used as constructors to create new objects, whereas arrow functions are not intended to be used as constructors and do not have their own prototype property.

// Regular functions are more versatile and can be used in a wider range of scenarios, including as methods on objects, constructors for creating new objects, and standalone functions. Arrow functions are more concise and useful for short, simple functions and for maintaining the lexical scope of this.
// It's important to choose the appropriate type of function depending on the context and requirements of the code.

 






