// Basics of Function

function test() {
    console.log("Priyanka");
}

// test // this is reference of function
// test() // executing the function 
// answer ---> Priyanka

function twoNumbers(num1, num2) {
    // num1 , num2 ---> pararmeters
    console.log(num1 + num2);
    console.log(typeof (num1 + num2)); // string
}
// twoNumbers(3, 4); // 7 
// 3 & 4 are called arguments

// twoNumbers(); // NaN
// twoNumbers(3, "4");  // 34 --> string
// twoNumbers(2, s); // s is not defined
// twoNumbers(3, null)  // 3 --> number typeof 
// twoNumbers(3, undefined) // NaN --> number


// storing functions in a variable
// const result = function twoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

// console.log("Result:", result); // Result: [Function: twoNumbers]

// function twoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// const result = twoNumbers(3, 4);
// console.log("Result:",result);

// output
// 7
// Result: undefined 
// because we didnt return anything from function to store in result variable

// function twoNumbers(num1, num2){
//     return (num1 + num2);
// }

// const result = twoNumbers(3, 4);
// console.log("Result:",result);  // Result: 7


// function useLoginMsg(username){
//     return `${username} just logged in`
// }

// useLoginMsg("Priyanka");

// output
// nothing will be printed

// to print the return value, we need to store it in some variable 
// function useLoginMsg(username){
//     return `${username} just logged in`
// }

// const res = useLoginMsg("priyanka")
// console.log(res); // priyanka just logged in
// or
// console.log(useLoginMsg("priyanka"));
// console.log(useLoginMsg()); // undefined just logged in



// Empty argments sent then handle it this way --->
// function login(username){
//     if(username === undefined){
//         console.log("please enter username");
//         return; // this needs else below return will print
//         // we need to go out of function from here 
//     }
//     return `${username} just logged in`
// }

// console.log(login()); 
// //please enter username
// // undefined


// to give default values in case of undefined username
// function login(username = "sunny"){
//     if(username === undefined){
//         console.log("please enter username");
//         return; // this needs else below return will print
//         // we need to go out of function from here 
//     }
//     return `${username} just logged in`
// }

// console.log(login()); // sunny just logged in

