// Stack Memory and Heap Memory Concept
// All primitive datatypes----> Number, String, Boolean, null, undefined, Symbol, BigInt
// get stored in stack memory and you get a copy of that variable which you used
let nameOne = "priyanka"
let nameTwo = nameOne;
nameTwo = "rohit"

console.log(nameOne); // priyanka
console.log(nameTwo);// rohit



// Heap memory get used in non primitive datatypes --> array, object, function
// Here you get a reference of the variable 
// means if the value of variable gets change, original will change also

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

// Here userOne and userTwo variable are stored in stack memory but the object key values
// struture is stored in heap memory
// so whenever we change any key's value, it will change in original and effect in every result

let userTwo = userOne
userTwo.email = "priyanka@gmail.com"

// console.log(userOne.email);  priyanka@gmail.com
// console.log(userTwo.email);   priyanka@gmail.com