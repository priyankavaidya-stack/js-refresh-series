// nested functions and closures

// function one(){
//     console.log("Outer function");
//     function two(){
//         console.log("Inner function");
//     }
//     return two();
// }

// one();

// output
// Outer function
// Inner function


// ***************** Closures **********************
// A closure is an expression (most commonly a function)
//  that can have free variables together with an environment that binds
// those variables (that "closes" the expression).

// Since a nested function is a closure, this means that a nested function can 
// "inherit" the argument and variables of its containing function.
// In other words, the inner function contains the scope of the outer functions.

// function one(){
//     const val = 11;
//     console.log("Outer function");
//     function two(){
//         console.log("Inner function", val);
//     }
//     return two();
// }

// one();

// output
// Outer function
// Inner function 11


