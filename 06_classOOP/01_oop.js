// javascript have classes. This feature was introduced with theECMAScript
// 2015 specification(ES6). However, javascript primarily a prototype-based language,
// and its classes are primarily syntactic sugar over existing prototype-based interitence mechanism.
// It provides a more familiar syntax for developers coming from class based languages like java cpp but
// unde the hood it works somewhat differently.

// Object
// - collection of properties and methods

// Parts of OOP
// Object Literal

// - Constructor function
// - Prototypes
// - Instances (new, this)


// 4 Pillars
// Abstraction
// Encapsulation
// Inheritance
// Polymorphism


const user = {
    username: "Priyanka",
    loginCount: 7,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from databse");
        // this is used to refer values outside of  this func context
        console.log(`Username: ,${this.username}`);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// output
// Priyanka
// Got user details from databse
// Username: ,Priyanka
// undefined



// new keyword is used to create new context everytime
// const primiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    // this. values are from user object
    // and we are assigning this parameters of function User
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // even if we not return, it is implicitely default returned
    return this;
}

// const userOne = User("priyanka", 12, true)
// const userTwo = User("chai", 12, true)

// console.log(userOne);
// output
// User { username: 'chai', loginCount: 12, isLoggedIn: true }

// here userTwo oerriding the values of userOne even if we didnt call it
// this is bad


// constructor function ek naya context, instance deta hai
// i.e new keyword

const userOne = new User("priyanka", 12, true)
const userTwo = new User("priyanka", 12, true)
console.log(userOne);

// User { username: 'priyanka', loginCount: 12, isLoggedIn: true }

