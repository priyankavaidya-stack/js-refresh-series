// Hoisting
//  Q 1:
// test();
// function test(){
//     console.log("val of x = 10");
// } 
// test();

// Output
// val of x = 10
// val of x = 10

// Reason 
// This happens because the test() function is called twice,
// once before its definition and then again after the definition.
// However, JavaScript allows functions to be called before their 
// actual declarations due to a concept called "hoisting."

// Q 2:
// function test(){
//     console.log('Value of x is '+x);
//     var x;
// }
// test()

// Output
// Value of x is undefined

//  Reason
//  In JavaScript, the var keyword is used to declare a variable.
//  However, variables declared with var are hoisted to the top of their scope,
//  which means that they are moved to the top of the script or the function in which they are declared.
//  In your code snippet, the variable x is declared using the var keyword within the function test().
//  However, it is not assigned a value before it is used in the console.log statement.
//  This happens because even though the variable x is declared within the function, it is hoisted to the top,
//  but it remains uninitialized until explicitly assigned a value. In JavaScript, when a variable is declared but not initialized, its value is undefined.

// Q 3:
// function test(){
//     console.log('Value of x is '+x);
//     var x = 80;
// }
// test()

// Output
// Value of x is undefined

// Reason
// It's important to note that in JavaScript, variable declarations are hoisted to the top of their scope,
// but their assignments are not. This means that the variable x is hoisted, but its value is not assigned until the line where it is assigned.
// This occurs because the console.log statement is trying to access the value of x before it has been assigned.
//  Although x is declared and initialized later in the function, the log statement comes before the assignment, resulting in undefined being printed to the console.

// Q 4:
// function test(){
//     console.log('Value of x is '+x);
//     // const x; you cannot declare const variable without a value;
//     const x = 30
// }
// test()

// Output
// Cannot access 'x' before initialization --> syntax error

// Reason
// An error arises in the code before it is even executed because a const variable must be initialized with a value at the time of its declaration.
//  The line const x; is invalid because const variables must be assigned a value during their declaration.


// Q 5:
// function test(){
//     console.log('Value of x is '+x);
//     // let x;
//      let x=80
// }
// test()

// Output
// Cannot access 'x' before initialization --> syntax error

// Reason
// Here let keyword is used , so it will get hoisted but without initializing any value to x.
// So getting hoisted without any assigned val is called temporal dead zone.
// So  When using the let keyword in JavaScript, it throws a reference error if you try to access the variable before it's initialized.

// Hoisting points 
// Functions gets hoisted
// variables gets hoisted
// let const, var gets hoisted
// class gets hoisted

