// Q 1:
// function test(){
//     const arr1 = [1, 2, 3, 4]
//     const arr2 = arr1;
//     arr2.push(10);
//     console.log("Array 2 is :" +arr2);
//     console.log("Array 1 is :" +arr1);
// }
// test();

// Output
// Array 2 is :1,2,3,4,10
// Array 1 is :1,2,3,4,10

// Reason
// Shallow Copy of Array

// Q 2:
// Make deep copy of array1 to arr2
// function test(){
//     const arr1 = [1, 2, 3, 4]
//     const arr2 = arr1;
//     arr2.push(10);
//     console.log("Array 2 is :" +arr2);
//     console.log("Array 1 is :" +arr1);
// }
// test();

// Answer:
// Use spead operator for assigning array values to arr2
// const arr2 = [...arr1];

// Output
// Array 2 is :1,2,3,4,10
// Array 1 is :1,2,3,4


// Q 3:
// function test(){
//     const user1 = {
//         name: "Priyanka",
//         age: 17
//     }
//     const user2 = user1;
//     user2.name = "Rohit"
//     console.log(user2);
//     console.log(user1);
// }
// test();

// Output
// { name: 'Rohit', age: 17 }
// { name: 'Rohit', age: 17 }

// Reason
// Object also makes shallow copy of original object and reference
// to only original object


// To solve the shallow copy to deep copy problem,
// use spread operator in objects also
// const user2 = {...user1};
// Output
// { name: 'Rohit', age: 17 }
// { name: 'Priyanka', age: 17 }

// // Q 3:
// function test(){
//     const user1 = {
//         name: "Priyanka",
//         age: 17
//     }
//     const user2 = {...user1};
//     user2.name = "Rohit"
//     console.log(user2);
//     console.log(user1);
// }
// test();

// Output
// { name: 'Rohit', age: 17 }
// { name: 'Priyanka', age: 17 }

// Reason
// spread operator makes deep copies of object, arrays.

// Q 4:
// function test(){
//     const user1 = {
//         name: "Priyanka",
//         age: 17
//     }
//     // const user2 = {...user1};
//     // or
//     const user2 = Object.assign({},user1)
//     // Object.assign() and spread operator helps you
//     // create deep copy of object
//     user2.name = "Rohit"
//     console.log(user2);
//     console.log(user1);
// }
// test();

// output
// { name: 'Rohit', age: 17 }
// { name: 'Priyanka', age: 17 }


// Q 5:
// Nested object -> make this copy also a deep copy
// function test(){
//     const user1 = {
//         name: "Priyanka",
//         age: 17,
//         location: {
//             city: "Mumbai",
//             state: "Maharashtra"
//         }
//     }
//     const user2 = user1
//     user2.location.city = "Nagpur"
//     console.log(user2);
//     console.log(user1);
// }
// test()

// output
// {
//     name: 'Priyanka',
//     age: 17,
//     location: { city: 'Nagpur', state: 'Maharashtra' }
//  }
//  {
//     name: 'Priyanka',
//     age: 17,
//     location: { city: 'Nagpur', state: 'Maharashtra' }
//  }

// Answer ---->
// function test(){
//     const user1 = {
//         name: "Priyanka",
//         age: 17,
//         location: {
//             city: "Mumbai",
//             state: "Maharashtra"
//         }
//     }
//     const user2 = {...user1}
// // you can do this same with Object.assign() method
//     user2.location = {...user1.location}
//     // m-2
//     // const user2 = JSON.parse(JSON.stringify(user1));
//     user2.location.city = "Nagpur"
//     console.log(user1);
//     console.log(user2);
// }
// test()


