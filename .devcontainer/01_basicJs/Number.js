const score = 400
// console.log(score); // 400

const balance = new Number(100)
// console.log(balance); // [Number: 100 ]
// console.log(balance.toString().length); // 3
// toFixed() get used in eccomerce site for displaing val upto 2 decimals
// console.log(balance.toFixed(2));

// Precision()
// precise val gets return with priority
const otherNumber = 1123.9897
// console.log(otherNumber.toPrecision(4)); // 1123

// toLocalString() used to get readable number system digit with commas
const hundreds = 100000
// console.log(hundreds.toLocaleString());// 100,000
// for indian values, 
// console.log(hundreds.toLocaleString('en-IN')); // 1,00,000

// ************** MATHS **********************
// console.log(Math); // object
// console.log(Math.abs(-4)); // 4 --> gives negative in postive val

// console.log(Math.round(4.6)); // 5

// console.log(Math.ceil(4.2)); // choose top value always --> 5
// console.log(Math.floor(4.7));// choose small val always --> 4

// console.log(Math.min(4, 5,1, 4, 7,8,3)); // 1 // max is also available

// console.log(Math.random());// returns val between 0-1
// console.log(Math.random()*10);  to get val greater than 0 to 10
// to get 1-10 val
// console.log(Math.floor(Math.random()*10)+1);


// togenerate val between 10 --- 0
// const min  = 10
// const max = 20
// console.log(Math.floor(Math.random() * ( max - min + 1 )) + min);













