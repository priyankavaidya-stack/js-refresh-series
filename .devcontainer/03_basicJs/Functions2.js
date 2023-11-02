// // restand spread operator usecase

// function calculatePrice(num1) {
//     return num1;
// }

// console.log(calculatePrice(200, 400, 500));
// // output
// // 200

// Answer
// function calculatePrice(...num1) {
//     return num1;
// }

// console.log(calculatePrice(200, 400, 500));
// output
// [ 200, 400, 500 ]
// here spread operator works as "rest operator"

// Q 2:
// function calculatePrice(val1, val2, ...num1) {
//     return num1;
// }

// console.log(calculatePrice(200, 400, 500));
// output 
// [ 500 ]

// Q 3:
// function calculatePrice(val1, val2, ...num1) {
//     return num1;
// }

// console.log(calculatePrice(200, 400, 500, 2000));
// output
// [ 500, 2000]


// ********* Passing Objects in function *************

// const user = {
//     username: "priyanka",
//     price: 299
// }

// function handleObject(anyObject) {
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
// }

// handleObject(user);
// handleObject({
//     username: "Sam",
//     price: 399
// })


// *********** Passing arrays in function ***********

// const myNewArray = [200, 400, 100, 600]

// function returnSecondVal(getArray) {
// return getArray[1]
// }

// console.log(returnSecondVal(myNewArray)); // or
// console.log(returnSecondVal([200, 400, 100, 600]));
// output
// 400

