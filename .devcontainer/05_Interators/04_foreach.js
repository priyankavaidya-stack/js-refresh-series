// **************** foreach loop ********************
// Most used loop for arrays
const coding = ["js","ruby","java","python","cpp"]

// callback function ko naam nhi hota
// coding.forEach(function(item){
//     console.log(item);
// })

// output
// js
// ruby
// java
// python
// cpp

// ******************* Using Arrow function ******************
// coding.forEach((item) => {
//     console.log(item);
// })

// output
// js
// ruby
// java
// python
// cpp

// function call inside foreach loop
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// output
// js
// ruby
// java
// python
// cpp

// different parametrs access foreach have
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

// output

// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]


const myCoding = [
    {
        langName: "Javascript",
        shortcut: "js"
    },
    {
        langName: "C++",
        shortcut: "cpp"
    },
    {
        langName: "Ruby",
        shortcut: "rb"
    },
    {
        langName: "python",
        shortcut: "py"
    }
]

// myCoding.map((item)=>{
//     console.log(item);
// })

// we can use forEach to modify array elements
myCoding.forEach((item, index)=>{
    // if(index === 0)
    // item.langName = "swift";
    console.log(item);
})

// output
// { langName: 'Javascript', shortcut: 'js' }
// { langName: 'C++', shortcut: 'cpp' }
// { langName: 'Ruby', shortcut: 'rb' }
// { langName: 'python', shortcut: 'py' }




