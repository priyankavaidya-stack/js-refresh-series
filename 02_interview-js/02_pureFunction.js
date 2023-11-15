// ************* Pure Functions ***************

// Q 1: console.log() is a pure function ?

// let output = console.log("Hello World");
// console.log(output);
// output
// Hello World
// undefined

// Yes, console.log() is a pure function





// Q 2: check whether is it pure function ?
// function areaOfRectangle(length, breadth){
//     console.log("Area is: ", length * breadth);
//     return length * breadth;
// }

// areaOfRectangle(10,20);

// output
// Area is: 200

// No, it is not pure function. we are writing console.log() inside a function,
// it makes function impure




// Q 3: 
// const words = ['spray', 'destruction'];
// const result = words.filter(word => word.length > 6)
// console.log(result);

// output
// [ 'destruction' ]

// It is a pure function, as you pass same array, it will always return same result as output



// Q 4:
function geeks(){
    const words = ['spray', 'destruction'];
    const result = words.filter( word => word.length>6 );
    console.log(result);
}
geeks();

// It is not pure function , As filter is pure function, it will return always a same output 
// but it is inside geeks function, it makes it as side effect and thats why, it is impure function



// Q 5: Why pure functions are essential ?
// 1. Deterministic
// 2. Memoisation
// 3. 
