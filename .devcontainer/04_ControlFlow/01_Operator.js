//   = assigning value to variable, Ex: let a = true
//   ==  checking value of variable ,not for checking dattayypes
//   Ex: (2 == "2") it will be true but (2 === "2") --> false as datatypes are different
//   === checking value of variables with dattaypes also
//   if(2 === "2") console.log("hello") --> output-> no
//   if( 2 === 2) console.log("hii") --> output -> hii

//   if(2 != "2") it will be false as checking only value not dattyapes, bot 2 are same,
// answer will be false
//   if(2 !== "2") it will be true as values are same but datatypes are not same


// Que:

// let score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`User Power: ${power}`);
// }

// console.log(`Score Power: ${power}`);

// output
// ReferenceError: power is not defined 
// as power has scope within if block


// if elseif .... else

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){ // both should be true
    console.log("Allow to buy course");
}

// or// anyone is true
if( loggedInFromGoogle || loggedInFromEmail ){
    console.log("User Logged In");
}



