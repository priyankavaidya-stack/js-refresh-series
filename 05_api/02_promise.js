// step 1 : Creating promise
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    }, 1000)
});

// resolving promise
// .then() ka relation is directly with resolve()
// to consume promise, resolve() needs to call
promiseOne.then(function(){
    console.log("Promise consumed");
})

// output
// Async task is complete
// Promise consumed

//  ********* Type 2 ***********
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// output
// Async task 2
// Async 2 resolved


// *************** Type 3 ***********************
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        // when we fetch any data from db through api
        // resolve get that data 
        resolve({username: "Chai", email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// output
// { username: 'Chai', email: 'chai@example.com' }



// **************** Type 4 *************
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'Priyanka', password: "123"});
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then((username)=>{
    // Priyanka
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))
// Use of finally
// to tell you that promise is resolved or rejected


// if error is false

// output
// { username: 'Priyanka', password: '123' }
// Priyanka
// The promise is either resolved or rejected

// if error is true
 
// output
// ERROR: Something went wrong
// The promise is either resolved or rejected



// ************* Type 5 **************
// use async await instead of .then()
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "javscript", password: "123"})
        }else{
            reject('ERROR: Js went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive();

//output
// ERROR: Js went wrong


// ********************************
// ********************************
async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // response.json() will take time to come
        // so make it await
        const data = await response.json()
        console.log(data);
    }catch(error){
        console.log("E: ", error);
    }
}

getAllUsers();


// ************************************
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => {
    console.log(error);
})

// why r we getting response data first then all previous promise execution later
