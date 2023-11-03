// Immediately invoked function expressions (IIFE)

// to immediately invoke function , syntax -->

// this is named IIFE as function has a name
// (function chai(){
//     console.log(`DB CONNECTED`);
// })();

// add semicolon for ending function execution

// output
// DB CONNECTED


// What is use of IIFE
// 1. To immediately execute function, we use IIFE
// 2. To get rid off global scope polution , we use IIFE


// Type 2:
// (function chai(){
//     console.log(`DB CONNECTED`);
// })();

// add semicolon for ending function execution

// (() => {
//     console.log(`DB CONNECTED TWO`);
// })()

// output
// DB CONNECTED
// DB CONNECTED TWO


// Type 3:
// ((user) => {
//     console.log(`Hello , Good Morning ${user}`);
// })("Priyanka")

// output
// Hello , Good Morning Priyanka


// Type 4:
// this is simple IIFE because function has no name
// to write two or more IIFE together, just add semicolon at last of each IIFE function to end its execution

// ((user) => {
//     console.log(`Hello , Good Morning ${user}`);
// })("Priyanka")

// output
// Hello , Good Morning Priyanka



(() =>{
    let x,y;
    try{
        throw new Error();
    }catch(x){
        (x=1),(y=2);
        console.log(x);
    }
    console.log(x);
    console.log(y);
})()