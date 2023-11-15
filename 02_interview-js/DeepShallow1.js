// Shallow to deep copy

// Q 1:
// function test(){
//     const testObj = {
//         sampleDate: new Date()
//     };
//     const testObj2 = JSON.parse(JSON.stringify(testObj));
//     // solution here-->
//     // const testObj2 = {...testObj} // use this
//     // testObj2.sampleDate = new Date("2023-03-09") // helps to converto to deep copy
//     console.log(testObj);
//     console.log(testObj2);
// }

// test();

// output
// { sampleDate: 2023-10-30T10:54:21.262Z } // object
// { sampleDate: '2023-10-30T10:54:21.262Z' } // string

// Reason
// As we used JSON.parse here, object converted to string which is not
// should be converted
// so in this case, we shoul not convert with JSON.parse thing


// Q 2:
// function test(){
//     const testObj = {
//         sampleFunction: console.log,
//         sampleUndefined: undefined
//     };
//     const testObj2 = JSON.parse(JSON.stringify(testObj));
//     // solution to use spread operator
//     // const testObj2  = {...testObj}
//     console.log(testObj);
//     console.log(testObj2);
// }
// test();

// output
// { sampleDate: [Function: log], sampleUndefined: undefined }
// {}

// Reason
// we lost both values in second object
//  In case of console.log thing or undefined value,
// do not use JSON.parse to convert shallow to deep copy


// Q 3:
// function test(){
//     const testObj = {
//         sampleFunction: console.log,
//         sampleInfinity: -Infinity,
//         sampleNaN: NaN,
//     };
//     const testObj2 = JSON.parse(JSON.stringify(testObj));

//     console.log(testObj);
//     console.log(testObj2);
// }
// test();

// output
// {
//     sampleFunction: [Function: log],
//     sampleInfinity: -Infinity,
//     sampleNaN: NaN
// }
// { sampleInfinity: null, sampleNaN: null }


// Q 4:
// function test(){
//     const testObj = {
//         sampleFunction: "user",
//         sampleInfinity: -Infinity,
//         sampleNaN: NaN,
//     };

//     // const testObj2 = JSON.parse(JSON.stringify(testObj));
//     // solution
//     // shallow to deep convert
//     // const testObj2 = {...testObj};
//     // testObj2.sampleFunction = "priyanka"

//     console.log(testObj);
//     console.log(testObj2);
// }
// test();

// output
// { sampleFunction: 'user', sampleInfinity: -Infinity, sampleNaN: NaN }
// { sampleFunction: 'user', sampleInfinity: null, sampleNaN: null }

// after conversion solution is:
// { sampleFunction: 'user', sampleInfinity: -Infinity, sampleNaN: NaN }
// {
//   sampleFunction: 'priyanka',
//   sampleInfinity: -Infinity,
//   sampleNaN: NaN
// }


// We can use lodash library also 


// Q 5:
// Why array, objects are shallow Copied and primitive datatypes likes
// Number, String, Boolean are Deep Copied

// Answer:---->


// Check javascript doesnt have its own memory as it runs on browsers



