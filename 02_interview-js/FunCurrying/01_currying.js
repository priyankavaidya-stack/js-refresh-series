// ********** Function currying **************
// Currying is a process in functional programming in which we can transform a function with multiple arguments into
// a sequence of nesting functions. It returns a new function that expects the next argument inline.

// Q 1:
// function add(x){
//     return function(y){
//         return x + y;
//     }
// }

// const output = add(10)(20)
// console.log(output);

// output
// 30

// Q 2:
// const f = x => x + x;  // f(100)
// const g = y => y * y;  // g(10)
// console.log(f(g(10)));
// output
// 200

// Q 3:
// write function code which can accept normal multiple arguments 
// and functiojn currying srguments also

// function add(x){
//     if(arguments.length > 1){
//         let sum = 0;
//         for (let i = 0; i < arguments.length; i++) {
//             sum += arguments[i];
//         }
//         return sum;
//     }else{
//         // for currying functions
//         return function(y){
//             return x + y;
//         }
//     }
// }

// [Arguments] { '0': 10 }
// [Arguments] { '0': 10, '1': 20 }
// with these argumnets , we will check whether call is normal or currying
// console.log(add(10)(20));
// console.log(add(10,20));

// output
// 30
// 30


// Q 3:
// infinite arguments currying
// add(10)(20)(30)......()
function add(a){
    return function(b){
        if(b){
            return add(a+b)
        }else{
            return a;
        }
    }
}

let output = add(10)(20)();
let output2 = add(10)(20)(30)();
console.log(output);
console.log(output2);