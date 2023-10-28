// Hoisting part 1 code

// Q 1:
// function test(){
//     var x;
//     var x;
//     console.log("X is "+x);
// }
// test()

// Output
// X is undefined

// Reason
// In JavaScript, it is possible to declare the same variable multiple times within the same scope, 
// but it's not considered good practice. When you declare a variable multiple times in the same scope,
// the subsequent declarations do not create new variables; they are effectively ignored, and the variable
// retains its initial value or undefined if no initial value is assigned.

// In the provided code snippet, the variable x is declared twice within the function test().
// However, the value of x is not assigned a specific value in either declaration.

// Q 2:
// function test(){
//     var x;
//     var x = 10;
//     var x;
//     console.log("X is "+x);
// }
// test()

// Output
// X is 10

// Reason
// In JavaScript, when you declare a variable multiple times within the same scope, only the first declaration is actually processed.
// Subsequent declarations of the same variable are effectively ignored. In your example, the second declaration of var x; 
// and the assignment var x = 10; both exist, but the second declaration does not reinitialize the variable. The value x takes is that of the most recent assignment, in this case, var x = 10;.

// Q 3:
// function test(){
//     var x = 10;
//     var x;
//     var x = 40;
//     console.log("X is "+x);
// }
// test()

// Output 
// X is 40

// Reason
// The initial value assignment var x = 10; is recognized, the second declaration var x; is ignored,
// and the final value assignment var x = 40; takes precedence. Thus, the value of x is 40 when the console.log statement is executed.


// Q 4:
// function test(){
//     var x = 40;
//     var x = 10;
//     var x;
//     console.log("X is "+x);
// }
// test()

// Output 
// X is 10

// Reason
// Same as above
// Not higher lower value thing is here


// Q 5:
// function test(){
//     var x = 1;
//     {
//         var x = 2;
//         console.log(x);
//     }
//     console.log(x);
// }
// test()

// Output 
// 2
// 2

// Reason
// In JavaScript, variables declared with the var keyword are function-scoped, not block-scoped.
// This means that the variable is available throughout the whole function regardless of the block in which it is defined.
// The variable x is first declared and initialized to 1 in the function scope.
// Then, within the block, a new variable x is declared and initialized to 2.
// This declaration of x within the block affects the value of the x variable declared in the function scope.
// Therefore, both console.log statements will output the value 2.

// Q 6:
// function test(){
//     let x = 1;
//     {
//         let x = 2;
//         console.log(x);
//     }
//     console.log(x);
// }
// test()

// Output
// 2
// 1

// Reason
// In JavaScript, variables declared with let are block-scoped,
// meaning that the variable is only accessible within the block in which it is defined.
// In this case, two separate variables with the name x are declared, one in the function scope and the other within the block. 
// The variable x inside the block has local scope and does not affect the value of the variable x declared in the function scope.
// Hence, the first console.log statement outputs the value of the x variable declared within the block (which is 2),
// and the second console.log statement outputs the value of the x variable declared in the function scope (which is 1).

// Q 7:
// function test(){
//     let x = 1;
//     let x = 2;
//     console.log(x);
//     console.log(x);
// }
// test()

// output
// Identifier 'x' has already been declared
// No output -> throwing error of redeclaration

// Reason
// In JavaScript, when you declare a variable using let, it must be unique within the same block scope. 
// Redefining the same variable within the same scope will result in an error.
// In the provided code snippet, the variable x is being declared twice in the same block scope, which is not allowed. This will lead to a syntax error. 


// Q 8:
// function test(){
//     console.log(bar);
//     var bar = 111
//     console.log(bar);
// }
// test()

// Output
// undefined
// 11

// Reason
// In JavaScript, when you declare a variable using the var keyword, the variable is hoisted to the top of its scope during the compilation phase.
// However, only the declaration is hoisted, not the initialization. Therefore, the variable is known to the JavaScript engine within its scope,
// but its value will be undefined until the line where it's assigned a value is executed.


// Q 10:
// var rate = 10
// function getRate(){
//     // Here rate variable gets hoisted with undefined valur
//    if(rate === undefined){
//         var rate = 6
//         return rate;
//    } else {
//         return 10;
//    }
// }
// console.log("Rate is ",getRate());

// Output
// Rate is 6

// Reason
// In the function getRate, a local variable rate is declared using the var keyword. 
// Since the variable rate is hoisted to the top of the function scope, the if condition becomes true within the function scope,
// causing it to return the value of the local rate variable, which is 6. The global rate variable remains 10 and is not accessed 
// within the function due to the presence of the local variable.


// // Q 10:
// var rat = 10
// function getRate(){
//     // Here rate variable gets hoisted with undefined valur
//    if(rat === undefined){
//         var rate = 6
//         return rate;
//    } else {
//         return 10;
//    }
// }
// console.log("Rate is ",getRate());

// Output
// Rate is 10
// Given the if condition checking if rat is undefined, it's important to note that the condition will evaluate to false
// since rat is not undefined (it is set to 10). As a result, the else block will be executed, returning the value 10.