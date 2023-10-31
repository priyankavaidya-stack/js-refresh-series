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
function test(){
    const testObj = {
        sample: console.log,
        sampleUndefined: undefined,

    };
    const testObj2 = JSON.parse(JSON.stringify(testObj));

    console.log(testObj);
    console.log(testObj2);
}
test();

