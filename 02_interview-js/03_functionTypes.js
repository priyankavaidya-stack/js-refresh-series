// ************* All Types of Functions **************
// 1. Normal Functions
// function welcome(){
//     console.log("Hello");
// }

// welcome();


// 2 . Anonymous function (no name)
// ---> function ref is passed to welcome variable 

// const welcome = function(){
//     console.log("Hello");
// }

// welcome();

// 2. 
// welcome();
// const welcome = function(){
//     console.log("Hello");
// }

// output
// ReferenceError: Cannot access 'welcome' before initialization

// not hoisting of function is here


// 3. self invoking function
// (function(){
//     console.log("hi");
// })()


// output
// hi


// 4. Function inside function
// function add(sum1, sum2){
//     return sum1 + sum2;
// }

// function res(fun, sum1, sum2){
//     const result = fun(sum1, sum2)
//     return result;
// }

// const output = res(add,10,20);
// console.log(output);

// output
// 30



