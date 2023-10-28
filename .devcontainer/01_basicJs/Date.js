// Dates

let myDate = new Date();
// console.log(myDate); // 2023-10-28T11:34:38.916Z
// console.log(myDate.toString()); // Sat Oct 28 2023 11:35:12 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString());  // 10/28/2023, 11:35:49 AM
// console.log(typeof myDate); // obejct

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate);  2023-01-23T00:00:00.000Z
// console.log(myCreatedDate.toString()); // Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
// console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleDateString()); //1/14/2023
let myCreatedDate = new Date('01-14-2023')
// console.log(myCreatedDate.toLocaleDateString());  // 1/14/2023

//Timestamp
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(Date.now()/1000));  // gets unix timestamp

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()); // 9 ---> oct
// console.log(newDate.getDay()); // 6 ---> Sat
newDate.toLocaleString('default', {
    weekday : "narrow"
})
// console.log(newDate); // customised data a/c to requirement





