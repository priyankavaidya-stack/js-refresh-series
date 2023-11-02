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








