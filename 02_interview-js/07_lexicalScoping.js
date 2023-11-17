// ************* Lexical Scoping and Closures ***********
// Question 1:
// function init(){
//     var name = "Hello World"
//     function displayName(){
//         console.log(name);
//     }
    // here we are not returning displayName
    // so this is not closure, it is lexical scoping
    // displayName();
// }
// init();
// output
// Hello World

// Q 2:

// closure example for above will be
// function makeFunc(){
//     var name = "Hello World"
//     function displayName(){
//         console.log(name);
//     }
//     return displayName;
// }

// var myFunc = makeFunc();
// myFunc();

// output
// Hello World

// checkout difference between lexical scoping and closures

// Q 3:
// function makeAdder(x){
//     return function (y){
//         return x + y;
//     };
// }
// var add5 = makeAdder(5);
// var add10 = makeAdder(10);
// console.log(add5(2));
// console.log(add10(2));

// output
// 7
// 12


// ******* Self Invoking function **********
// Q 4:
// (function testA(a){
//     return (function testB(b){
//         console.log(a);
//     })(1);
// })(0);

// output
// 0

// Q 5 :
// function test(){
//     for(var i=0; i<3;i++){
//         setTimeout(function log(){
//             console.log(i);
//         },1000);
//     }
// }
// test()

// output
// 3
// 3
// 3

// In the code you provided, you're using a for loop to create three setTimeout calls within the test function.
//  Each setTimeout call is set to log the variable i after a delay of 1000 milliseconds.
// However, there is a common issue with using var in this context.
//  Due to the way closures work in JavaScript, all three setTimeout functions will reference the same variable i.
//   By the time the setTimeout callbacks are executed, the for loop has completed, and the final value of i is 3.
// As a result, when you run this code, you will see that all three console.log statements will output the value 3.


// solution for var keyword
// function test(){
//     for(var i=0; i<3;i++){
//         function test2(j){
//             setTimeout(function log(){
//                 console.log(j);
//             },1000);
//         }
//         test2(i)
//     }
// }
// test()

//now output
// 0 
// 1
// 2

// if let is used
// output
// 0
// 1
// 2


// To fix this issue, you can use let instead of var to declare the loop variable. 
// This creates a new binding for i in each iteration of the loop, preserving the value
//  at that point in time for each setTimeout callback.

// With this change, you should see the output as 0, 1, and 2 respectively, as each setTimeout 
// callback captures the value of i at the time it was created.


