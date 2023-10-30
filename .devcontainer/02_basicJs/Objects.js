// Singleton
// Object.create --> singleton banta hai
// constructor se object singleton banata hai
// otherwise singleton nhi banata hai


// Object literals

// to create symbol in objects
const mySym  = Symbol("Symbol name");

const JsUser = {
    name: "Priyanka",
    "full name": "Priyanka Vaidya",
    age: 18,
    [mySym]: "Kshitij",
    location: "MUmbai",
    email: "priyanka@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["Monday", "Saturday"]
}

// console.log(JsUser["full name"]);
// console.log(JsUser["name"]);
// console.log(JsUser.name);
// not allowed when key has more than one word as full name

// console.log(JsUser.[mySym]); // wrong access to symbol
// console.log(typeof JsUser[mySym]);  // string

// console.log(JsUser[mySym]);  // Kshitij

JsUser.email = "rohit@gmail.com"
// console.log(JsUser.email);  // rohit@gmail.com

// Doesnt want anyone to change original value 
// we use freeze
// Object.freeze(JsUser)
// JsUser.email = "kshitij@gmail.com"

// console.log(JsUser["email"]);


// console.log(JsUser);
// {
//   name: 'Priyanka',
//   'full name': 'Priyanka Vaidya',
//   age: 18,
//   location: 'MUmbai',
//   email: 'rohit@gmail.com',
//   isLoggedIn: false,
//   lastloginDays: [ 'Monday', 'Saturday' ],
//   [Symbol(Symbol name)]: 'Kshitij'
// }


JsUser.greeting = function (){
    console.log("Hello Js user");
}

// console.log(JsUser.greeting); // [Function (anonymous)]

// console.log(JsUser.greeting()); 
// output
//Hello Js user
// undefined


// this is used to access same keys within an object 
// this is used to access all keys for JsUser object
JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}

// console.log(JsUser.greetingTwo());
// Output
// Hello Js User Priyanka
// undefined


