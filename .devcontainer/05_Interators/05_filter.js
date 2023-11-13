// ************** map, reduce functions ********************
const  coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
    // console.log(item);
    // return item;
})

// output
// js
// ruby
// java
// python
// cpp

// if we return in forEach loop, it will be undefined
// so it doen's return any values actually

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9,10]

// const returnVal = myNums.filter((num) => {
//     return (num > 4)
// })

// or
// same thing to return val
// const returnVal = myNums.filter((num) => (num > 4) )

// console.log(returnVal);

// output
// [ 5, 6, 7, 8, 9, 10 ]


// **********************  filter with forEach loop  ***********************
const newNums = [];

myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num)
    }
})

// console.log(newNums);

// output
// [ 5, 6, 7, 8, 9, 10 ]


// ********** Example for filter function *******************
const books = [
    {
        title: 'Book One',
        genre: 'Fiction',
        publish: 1981,
        edition: 2004
    },
    {
        title: 'Book Two',
        genre: 'Non Fiction',
        publish: 1992,
        edition: 2008
    },
    {
        title: 'Book Three',
        genre: 'History',
        publish: 1999,
        edition: 2007
    },
    {
        title: 'Book Four',
        genre: 'Non Fiction',
        publish: 1989,
        edition: 2010
    },
    {
        title: 'Book Five',
        genre: 'Science',
        publish: 2009,
        edition: 2014
    },
    {
        title: 'Book Six',
        genre: 'History',
        publish: 1939,
        edition: 2019
    }
]

// const userBooks = books.filter((book) => book.genre === "History" )

// console.log(userBooks);

// output
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     { title: 'Book Six', genre: 'History', publish: 1939, edition: 2019 }
// ]

// const userBooks = books.filter((book) => book.publish > 2000)

// console.log(userBooks);
// [
//     {
//       title: 'Book Five',
//       genre: 'Science',
//       publish: 2009,
//       edition: 2014
//     }
// ]

// const userBooks = books.filter((book) => book.publish > 2000 && book.genre === "Science")

// console.log(userBooks);
// [
//  {
//     title: 'Book Five',
//     genre: 'Science',
//     publish: 2009,
//     edition: 2014
//   }
// ]




