// function addSquare(a, b){
//     function square(x){
//         return x * x;
//     }
//     return square(a) + square(b);
// }

// const a = addSquare(2, 3)
// const b = addSquare(3, 4)
// const c = addSquare(4, 5)
// console.log(a, b, c);

// output
// 13 25 41

// working process
// const a stores the return square(a)+square(b) and call them one by one
// then return it vale X * X
// same for const b and c.

// Q 2:
// function A(x){
//     function B(y){
//         function C(z){
//             console.log(x + y + z);
//         }
//         C(3);
//     }
//     B(2);
// }
// A(1);

// output
// 6

// working
// Let's break down the code step by step:

// The A function is called with the argument 1.
// Inside A, the B function is defined and immediately called with the argument 2.
// Inside B, the C function is defined and immediately called with the argument 3.
// Inside C, the console.log statement prints the sum of x (from A), y (from B), and z (from C), which are 1 + 2 + 3. Therefore, it prints 6.
// So, when you run the code by calling A(1), it outputs 6 to the console.



// Q 3:
// ************* Counter Dilemma ***************
// Create a function where everytime calling it, counter gets increase by onemptied.
// best approach would be with closures

// 1.Basic Approach

// let count = 0
// function add(){
//     count = count + 1
//     console.log(count);
// }
// add();
// add();
// add();

// output
// 1
// 2
// 3

// 2. Best Approach

// function test(){
//     let count = 0;
//     function add(){
//         count += 1;
//         return count;
//     }
//     return add;
// }

// const output = test();
// console.log(output());
// console.log(output());
// console.log(output());

// here calling subsequent calls ot output actually stores prev val of count;
// thats why we r getting 1 2 3 as output


// working
// The test function defines a local variable count and a nested function add that increments count and returns its value.
// test returns the add function, creating a closure where the inner function retains access to the outer function's scope, including the count variable.
// The output variable is assigned the result of calling test(), which is the add function.
// Subsequent calls to output() continue to access and modify the shared count variable, effectively creating a counter.
// So, in this way, you're using a closure to maintain the state (count in this case) across multiple function calls. This is a common and valid approach in JavaScript.