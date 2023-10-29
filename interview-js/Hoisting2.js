// HOisting - 2 (Interview questions)

// Q 1:
// {
//     // Temporal dead zone starts here
//     const func = () => console.log(letVar);
//     // Here actual TDZ
//     let letVar = 3; // TDZ ends here
//     // function called after the variable got assigned therefore 3 will be output
//     func();
// }

// Output
// 3

// Reason
// The variable letVar is accessed within the arrow function func before it's assigned a value. 
// However, due to the function being defined in the TDZ, it captures a reference to letVar. 
// Subsequently, when func() is executed, it has access to the value of letVar, which is 3 because the TDZ has already ended by that point. 
// Therefore, the output is 3.

// Q 2:
// {
//     func();
//     const func = () => console.log(letVar);
//     let letVar = 3;
// }

// Ouput
// Cannot access 'func' before initialization
// same reference error for const, let and var variable
// arrow functions are not hoisted

// Q 3:
// {
//     const func = () => console.log(letVar);
//     func();
//     let letVar = 3;
// }

// Output
//  Cannot access 'letVar' before initialization

// Reason
// The func arrow function is defined, attempting to log the value of letVar before it is declared. 
// This leads to a ReferenceError because the variable letVar is accessed in the temporal dead zone (TDZ) before it's initialized.
// The temporal dead zone for the variable letVar begins when the script starts executing and
// ends at the line where letVar is declared and assigned a value of 3. However, the function func captures the reference to letVar before it's declared, 
// resulting in the ReferenceError when the function is invoked.
// As a result, the code will throw a ReferenceError when trying to log the value of letVar within the func function. 


// Q 4:
// Why var hoisting is present in javascript
// Answer :
// Hoisting with var is a specific behavior that was present in JavaScript from earlier versions, and it can lead to unexpected results and bugs. 
// The introduction of let and const in ES6 was aimed at addressing some of these issues and providing more predictable behavior for variable declarations.


// Q 5:
//  How hoisting works in Javascript if it interpreted ?
// Answer: 
// In JavaScript, the code execution happens line by line in the order that it's written. However, it's crucial to understand that JavaScript engines use 
// a combination of an interpreter and a just-in-time (JIT) compiler to execute JavaScript code efficiently.

// The interpreter in the JavaScript engine reads the source code, parses it, and executes it line by line. The interpreter is responsible for 
// understanding the code and translating it into machine-understandable instructions. 
// This process allows the JavaScript engine to execute the code sequentially and produce the desired output.

// While the JavaScript code is executed line by line by the interpreter, the JIT compiler plays a crucial role
// in optimizing the performance of the code by dynamically compiling parts of it into efficient machine code.
// It's worth noting that the JavaScript engine is typically written in a lower-level language like C++ to interact with the underlying hardware
// and operating system. This allows the JavaScript engine to handle the interpretation and compilation of JavaScript code efficiently.