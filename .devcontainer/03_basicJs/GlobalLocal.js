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

// broswer console scope is different 
// and we run js files with node they have diff scope