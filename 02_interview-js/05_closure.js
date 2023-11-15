// Q 1:
// console.log(square);
// console.log(square(5));

// const square = function(n){
//     return n * n;
// }

// output

// ReferenceError: Cannot access 'square' before initialization

// Q 2:
// console.log(square);
// console.log(square(5));

// var square = function(n){
//     return n * n;
// }

// output
// undefined
// console.log(square(5));
// TypeError: square is not a function

// because square variable got hoisted but function is not hoisted


// Q 3:
// function test(theObject){
//     theObject.make = "Toyota";
// }

// const car_details = {
//     make: "Honda",
//     model: "Accord",
//     year: 1998
// };
// console.log("car-details.make 1",car_details.make);
// test(car_details);
// console.log("car-details.make 2" ,car_details.make);


//output
// car-details.make 1 Honda
// car-details.make 2Toyota

// reason
// shallow copy of objects



// Q 4:
// var num1 = 20,
//     num2 = 3,
//     name = "Chamakh"

// function getScore(){
//     var num1 = 2,
//         num2 = 3;
//     function add(){
//         return name + ' scored ' + (num1 + num2);
//     }
//     return add();
// }
// console.log(getScore());

//output
// Chamakhscored 5

// Q 5
// var num1 = 20,
//     num2 = 3,
//     name = "Chamakh"

// function getScore(){
//     var num1 = 2;
//     function add(){
//         return name + ' scored ' + (num1 + num2);
//     }
//     return add();
// }
// console.log(getScore());

// output
// Chamakh scored 5


