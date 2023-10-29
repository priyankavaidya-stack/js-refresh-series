// Advanced array concepts

const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);  //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// means array took another array as one element
// one single array can contains diff type of elements 
// interger, wit boolean, string values

// console.log(marvel_heroes[3][0]);  // superman

// concat
const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes); [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// concat actually merges two arrays

// spread operator
// this is good method of adding different array or merging it together
// spread operator getting used today by developers
// const allNewHeros = [...marvel_heroes,...dc_heroes]
// console.log(allNewHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_array = another_array.flat(infinity)
// console.log(real_array); 
//[
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

// const real_array = another_array.flat(1)
// console.log(real_array);
//[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]



// isArray
// console.log(Array.isArray("Priyanka"));  // false

// console.log(Array.from("Priyanka")); 
//[
//     'P', 'r', 'i',
//     'y', 'a', 'n',
//     'k', 'a'
//   ]

// console.log(Array.from({name:"Priyanka"}));  // []
// need to tell to form array from key of object

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ]
// of also creates array from multiple single variables