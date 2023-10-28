const name = "Priyanka"
// const count = 20

// console.log(`My name is ${name} and my count is ${count}`);

const gameName = new String("Priyanka");
// console.log(gameName[0]); // P
// console.log(name[0]);
// name and gameName declarration is dferent but it is same thing

// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName); // [String: 'Priyanka']
// console.log(gameName.charAt(4)); // a
// console.log(gameName.indexOf('y')); // 3

// substring require start no and end no, but the end number index is not counted actually
const newString = gameName.substring(0,6); // takes 0 to 5 index actual
// console.log(newString);

const anotherString = gameName.slice(-8,4);
// it starts from last with negative counting and then move forward with provided no.
// console.log(anotherString); // Priy (-8 --> p to 4 --->y ---> Priy)

//trim()
const strOne = "   Priyanka    "
// console.log(strOne);
// console.log(strOne.trim()); // removes all forward backward spaces

// replace()
// brpwser atomatically fill %20 to spaces in url
const url = "https://priyanka%20vaidya.com"
// to remove that string we use replace
// console.log(url.replace('%20',"-"));

// console.log(url.includes("sundar")) // false

const newName = "Priyanka-Vaidya"
// console.log(newName.split('-')); //['Priyanka', 'Vaidya']







