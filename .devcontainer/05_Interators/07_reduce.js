const myNums = [1, 2, 3]

// accumulator takes initail value as 0 that we need to pass
// then it takes the updated val from (acc + currval) and store in it.

// const myTotal = myNums.reduce(function(acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)
// console.log(myTotal);

// acc: 0 and currVal: 1
// acc: 1 and currVal: 2
// acc: 3 and currVal: 3
// 6


// ********* with arrow function **************
// const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)

// console.log(myTotal);

// 6

const shoppingCart = [
    {
        itemName: "js course",
        price: 1999
    },
    {
        itemName: "py course",
        price: 1799
    },
    {
        itemName: "java course",
        price: 2499
    },
    {
        itemName: "cpp course",
        price: 1599
    }
]

// we need to calculate all price of courses;
// we will use reduce method
// const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(total);

// 7896



