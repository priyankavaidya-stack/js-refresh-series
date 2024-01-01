// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         resolve("Welcome")
//     },2000)
// })

// promiseOne.then(data => {
//     console.log("Promise success: ", data);
// }).catch(err => console.log("ERROR: ",err))

// output
// Promise success:  Welcome



// Question 1: execution log statement order detection
// console.log("Before promise starts");
// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve("Welcome to promise world")
//     },2000);
// })

// console.log("After promise starts");
// promiseOne.then(data => {
//     console.log(data);
// }).catch(err => console.log(err));

// console.log("After promise ends");

// output
// Before promise starts
// After promise starts
// After promise ends
// Welcome to promise world

// Reason 
// even is setTime out has 0 sec, as it is asynchronous task, 
// it will take away from stack and put into  to heap memory or web apps separately.



// Promise chaining
const promise1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("Promise 1")
    },1000)
})

const promise2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("Promise 2")
    },1000)
})

promise1.then(data => {
    console.log(data);
    promise2.then(data => {
        console.log(data);
    }).catch(err => console.log(err))
    
}).catch(err => console.log(err))

// output
// Promise 1
// Promise 2


