// Array

const myArr = [0, 1, 2, 3, 4, 5]
// const myHeroes = ["shaktiman", "nagaraj"]

const myArr2 = myArr
myArr2.push(6)

// console.log(myArr);
// console.log(myArr2);
// changes in main array this proves array gets stored in heap memory 

// Array methods
// myArr.push(7)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(0) // added 0 at the starting of array, means it shifted all
// elements which is time consuming 
// console.log(myArr);

// myArr.shift()
// console.log(myArr);  // [1, 2, 3, 4, 5, 6] ---> means shifted 0 kind of removed 0 from an array

// Slice and Splice method
// const newArr = myArr.slice(1,3)
// console.log(newArr);  // [1, 2] // means piece of arr from index 1 to index (3-1) = index 2

// const spliceArr = myArr.splice(1,5)
// console.log(spliceArr); // splice actually took some piece of array that will be not present 
// // in myArr original array. // [1, 2, 3, 4, 5]
// console.log(myArr);   // Here elements will be left that is not in splice array
// //[0, 6]

// includes method
// console.log(myArr.includes(9)); // false --> not present 

// const strArr = myArr.join()  // makes array as whole string 
// console.log( typeof strArr );   // 0,1,2,3,4,5,6


// indexOf
// console.log(myArr.indexOf(9));  // -1 -> not present





