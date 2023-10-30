// Singleton object creation

const tinderUser = new Object(); // singleton object
// const tinderUser = {} // non singleton object

// console.log(tinderUser); // {}
tinderUser.id = "123abc"
tinderUser.name = "Priyanka"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// { id: '123abc', name: 'Priyanka', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        username:{
            firstname:"priyanka",
            lastname:"vaidya"
        }
    }
}

// console.log(regularUser.fullname);
//{ username: { firstname: 'priyanka', lastname: 'vaidya' } }

// console.log(regularUser.fullname.username.firstname);
// priyanka

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

// console.log(obj1 + obj2); //[object Object][object Object]

// const obj3 = { obj1 , obj2 }
// console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// objects inside object

// to merge two objects

// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = Object.assign({}, obj1, obj2)
// here empty array mai obj1, obj2 jayenge
// {} --> target , obj1, obj2 --> source
// console.log(obj3);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// Best method to merge two or more objects
// using spread operator
const obj3 = {...obj1 , ...obj2}
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// objects in array
const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 2,
        email: "v@gmail.com"
    }
]
// console.log(users[0].email); // p@gmail.com

// console.log(tinderUser); // { id: '123abc', name: 'Priyanka', isLoggedIn: false }
 
// console.log(typeof Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// typeof object

// console.log(Object.values(tinderUser)); //[ '123abc', 'Priyanka', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Priyanka' ], [ 'isLoggedIn', false ] ]


// hasOwnProperty
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true


