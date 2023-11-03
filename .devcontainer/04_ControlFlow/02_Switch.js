// Switch case

// const month = 3
// // switch takes any value --> boolean, String and Number

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     default:
//         console.log("May");
//         break;
// }

// Output
// March

// break is used to stop executing coming code after the condition got satisfied

const userEmail = "p@priyanka.ai"

const user = [] // here it will execute as true means 
// output
// Got user email 

// if(userEmail){
//     // here userEmail != empty ? true : false
//     console.log("Got user email");
// } else {
//     // here userEmail == "" ? true : false
//     console.log("Don't have user email");
// }


// Falsy values
// false, 0, -0, BigInt 0n, "", null,  undefined, NaN

// Truthy values
// true, 1, "0", "false", "true", "cdkjcdkj", [], {}, " ", function(){}



// if(userEmail.length === 0){
//     console.log("Array is Empty");
// }else{
//     console.log("Array is not Empty");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log(`Object is Empty`);
// }
// Object.keys(emptyObj) returns an array


// false == 0  -> true
// false == "" -> true
// 0 == "" -> true

// ****************************************************
// Nullish Coalescing Operator (??): null undefined (keywords)

// let val1;
// val1 = 5 ?? 10   // 10
// val1 = null ?? 10  // 10
// val1 = undefined ?? 15  // 15
// val1 = null ?? 10 ?? 20 // 10


// ************* Terniary Operator **********************

// condition ? true : false

// const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log("less than 80"): console.log("more than 80");

// output
// less than 80



