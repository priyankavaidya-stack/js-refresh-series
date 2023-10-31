// Destructuring the objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "priyanka"
}

const { courseInstructor } = course
// const { courseInstructor: instructor } = course
// console.log(courseInstructor); // priyanka
// console.log(instructor);  // priyanka

// In react , props.company we dont use, use obj destructuring 
// as { company }
// const navbar = ({ company }) => {
    // ..........
// }

// JSON structure
// same as object
// {
//     "name" : "Priyanka",
//     "coursename": "js in hindi",
//     "price" : "free"
// }

// [
//     {},
//     {},
//     {}
// ]