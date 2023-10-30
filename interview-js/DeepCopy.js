// stack memory deep copy
let x = 10;
// console.log("X is " +x);
let y = x;
y =20;
// console.log(`The value of y is ${y}`);

// Here call by reference thing present 

let arr1 = [1, 2, 3, 4]
// console.log("arr1:--->",arr1); // arr1:---> [ 1, 2, 3, 4 ]
let arr2 = arr1;
arr2.push(5);
// console.log("arr1-->",arr1); // arr1--> [ 1, 2, 3, 4, 5 ]
// console.log("arr2---->",arr2); // arr2----> [ 1, 2, 3, 4, 5 ]
// chnages in both array happened due to heap memory value stored  call by ref.

arr1.push(6);
// console.log("arr1-->",arr1); // arr1--> [ 1, 2, 3, 4, 5, 6 ]
// console.log("arr2---->",arr2); // arr2----> [ 1, 2, 3, 4, 5, 6 ]

// Reason
// Shallow Copy (Non- Primitive Datatypes --> Array, Object, Function)
// Original object and cloned object ------> Referenced object (Same memory location)

// Deep Copy( Primitive Datatypes -> String, Number, Boolean)
// Original Object  ----> Referenced Object (diff memory location)
// Cloned Object ----> Referenced Clone (diff memory location)

// In JavaScript, when you work with objects and arrays, understanding the concepts of shallow copy and deep copy is crucial. Both these techniques involve creating a new copy of an object or an array, but they differ in how they handle nested objects or arrays. Here's a brief explanation of shallow copy and deep copy:

// Shallow copy:

// Shallow copying creates a new object or array and then copies the values of the original object or array into the new one. However, if the original object contains nested objects or arrays, only references to those nested objects are copied.
// This means that if you modify a nested object in the copied version, the changes will be reflected in the original object, as they both share the same nested object.
// Here is an example of how to perform a shallow copy in JavaScript:
// let originalArray = [1, 2, 3, [4, 5]];
// let shallowCopyArray = [...originalArray];

// // Modifying the shallow copy
// shallowCopyArray[3][0] = 10;

// console.log(originalArray); // [1, 2, 3, [10, 5]]
// console.log(shallowCopyArray); // [1, 2, 3, [10, 5]]


// Deep copy:

// Deep copying creates a completely new copy of the original object or array, including any nested objects or arrays. This means that the new copy is entirely independent of the original one, and any changes made to the deep copied version will not affect the original object.
// Deep copying is not directly supported in JavaScript, so you need to use various methods such as recursion or libraries like lodash or jQuery to achieve a deep copy. Here is an example using the Lodash library:
// const _ = require('lodash');

// let originalObject = { a: 1, b: { c: 2 } };
// let deepCopyObject = _.cloneDeep(originalObject);

// // Modifying the deep copy
// deepCopyObject.b.c = 3;

// console.log(originalObject); // { a: 1, b: { c: 2 } }
// console.log(deepCopyObject); // { a: 1, b: { c: 3 } }


// In JavaScript, when you work with objects and arrays, understanding the concepts of shallow copy and deep copy is crucial. Both these techniques involve creating a new copy of an object or an array, but they differ in how they handle nested objects or arrays. Here's a brief explanation of shallow copy and deep copy:

// Shallow copy:

// Shallow copying creates a new object or array and then copies the values of the original object or array into the new one. However, if the original object contains nested objects or arrays, only references to those nested objects are copied.
// This means that if you modify a nested object in the copied version, the changes will be reflected in the original object, as they both share the same nested object.
// Here is an example of how to perform a shallow copy in JavaScript:

// let originalArray = [1, 2, 3, [4, 5]];
// let shallowCopyArray = [...originalArray];

// // Modifying the shallow copy
// shallowCopyArray[3][0] = 10;

// console.log(originalArray); // [1, 2, 3, [10, 5]]
// console.log(shallowCopyArray); // [1, 2, 3, [10, 5]]

// Deep copy:
// Deep copying creates a completely new copy of the original object or array, 
// including any nested objects or arrays. This means that the new copy is entirely independent of the original one, 
// and any changes made to the deep copied version will not affect the original object.
// Deep copying is not directly supported in JavaScript, so you need to use various 
// methods such as recursion or libraries like lodash or jQuery to achieve a deep copy. 
// Here is an example using the Lodash library:

// const _ = require('lodash');

// let originalObject = { a: 1, b: { c: 2 } };
// let deepCopyObject = _.cloneDeep(originalObject);

// // Modifying the deep copy
// deepCopyObject.b.c = 3;

// console.log(originalObject); // { a: 1, b: { c: 2 } }
// console.log(deepCopyObject); // { a: 1, b: { c: 3 } }
// Keep in mind that for simple data structures, a shallow copy might be sufficient.
// However, if you are dealing with complex nested data structures, 
// a deep copy is necessary to ensure that the original data remains unaffected by any modifications to the copied version.