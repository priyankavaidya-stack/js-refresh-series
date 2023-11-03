// How js execute code + call stack

// 1. To run js engine, node , deno, bun this all are diff environment to run 
// 2. When we print this, it actually refers to Global execution context in this env
// 3. In browser console, it refers to the global window object
// 4. Two exceution context are there:
//    a. Global Execution Context
//    b. Function Execution Context
//    c. Eval Execution Context (optional type)


// 1. Memory Creation Phase
// {}
// Here, memory gets allocated to declared variables and  other code
// 2.Execution Phase

// Let's understand with an example
// let val1 = 10
// let val2 = 5
// function addNum(num1, num2){
//     let total = num1 + num2
//     return total
// }
// let result1 = addNum(val1, val2)
// let result2 = addNum(10, 2)

// Step I: Global Execution Context --> refers to this

// Step II: Memory Phase
// --> val1 = undefined 
// --> val2 = undefined
// --> addNum = defination
// --> result1 = undefined
// --> result1 = undefined

// Step III: Execution Phase:
//  val1 = 10
//  val2 = 5
//  result1 =   { diff execution context
//                new variable environment 
//                and execution thread 
//              }
//              *********Memory Phase *********         
//               val1 = undefined 
//               val2 = undefined
//               total = undefined
//
//              *********Execution Phase ****** 
//              num1 = 10
//              num2 = 5
//              total = 15
//              *********Return val in Global execution context **************** 
//              *********Delete Execution context created for result1 **********

//  result2 =   { diff execution context
//                new variable environment 
//                and execution thread 
//              }
//              *********Memory Phase *********         
//               val1 = undefined 
//               val2 = undefined
//               total = undefined
//
//              *********Execution Phase ****** 
//              num1 = 10
//              num2 = 5
//              total = 15
//              *********Return val in Global execution context **************** 
//              *********Delete Execution context created for result1 **********


// *********** Call Stack ****************
//       |                              |
///      |        ...                   |
//       |         ....                 |
//       |      3rd fun call()          |
//       |     2nd fun()                |
//       |______first call fun()________|
//       |___Global Execution Context___|

//       last in first out 3rd last ayya first execute hoga


// In console go to source tab
// create any function and execute it
// there is call stack



