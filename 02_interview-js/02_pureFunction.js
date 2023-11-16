// ************* Pure Functions ***************

// Q 1: console.log() is a pure function ?

// let output = console.log("Hello World");
// console.log(output);
// output
// Hello World
// undefined

// Yes, console.log() is a pure function
// but chatgpt says it also has side effects so not that pure function
// The console.log("Hello World") statement logs the message "Hello World" to the console.
// However, the console.log function itself does not return a value, or it returns undefined specifically.



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

// Reason
// The areaOfRectangle function you provided is not a pure function because it has a side effect: 
// the console.log statement that logs information to the console. In pure functions,
//  it's generally best to avoid side effects, as they can make the behavior of the function
//  less predictable and can lead to issues in terms of reasoning about the code, testing, and maintaining it.



// Q 3: 
// const words = ['spray', 'destruction'];
// const result = words.filter(word => word.length > 6)
// console.log(result);

// output
// [ 'destruction' ]

// It is a pure function, as you pass same array, it will always return same result as output
// Reason
// The arrow function used as the predicate for filter is pure. 
// It takes an input (each element of the array), performs a computation 
// (checks if the length of the word is greater than 6), and returns a boolean result. 
// It does not modify any external state or variables and does not have side effects.


// Q 4:
function geeks(){
    const words = ['spray', 'destruction'];
    const result = words.filter( word => word.length>6 );
    console.log(result);
}
geeks();

// It is not pure function , As filter is pure function, it will return always a same output 
// but it is inside geeks function, it makes it as side effect and thats why, it is impure function

// Reason

// The geeks function, as it stands, is not a pure function because it has a side effect:
// the console.log statement. Pure functions should not have side effects, 
// meaning they should not perform actions that affect the external environment,
//  such as logging to the console, modifying global variables, or interacting with I/O.



// Q 5: Why pure functions are essential ?s
// Pure functions offer several benefits in software development,
//  and their use is considered a best practice in functional programming. 
// Here are some reasons why pure functions are essential:

// Deterministic: Pure functions are deterministic, meaning that for a given set of inputs, 
// they will always produce the same output. This predictability simplifies reasoning about
//  code and debugging, as you can rely on the fact that the function's behavior won't change unpredictably.

// No Side Effects: Pure functions have no side effects. They do not modify external state or variables, 
// making the code more maintainable and easier to understand. This property is crucial for 
// building robust and scalable systems.

// Easy to Test: Because pure functions only depend on their input parameters and do not have side effects, 
// they are easy to test. You can test them in isolation by providing different inputs and asserting 
// the expected outputs, without worrying about complex setups or external dependencies.

// Immutable Data: Pure functions often work well with immutable data structures. 
// Since they don't modify existing data, they encourage the use of immutability, 
// which can simplify code and help prevent bugs related to unexpected changes in state.

// Parallelism and Concurrency: Pure functions are inherently thread-safe. Because they don't rely
// on shared state or have side effects, they can be safely executed in parallel or in a concurrent 
// environment without the risk of race conditions.

// Memoization: Pure functions are amenable to memoization, a technique where the results of expensive
//  function calls are cached based on their input parameters. This can significantly improve 
// performance in certain scenarios.

// Functional Composition: Pure functions are composable. You can easily combine and compose pure 
// functions to create more complex functions or pipelines, leading to modular and maintainable code.

// Easier Refactoring: The absence of side effects and the deterministic nature of pure functions 
// make them easier to refactor. Since they don't depend on external state, changing the function's 
// implementation won't have unexpected consequences in other parts of the code.
// In summary, pure functions contribute to code that is more predictable, testable, and maintainable,
//  promoting good software design principles and facilitating the development of reliable and scalable systems.