// Pure function
// Those functions who are deterministic in nature
// If you pass the same values to function, it will give same output everytime

function areaOfTriangle(length, breadth){
    return length * breadth;
}

console.log(areaOfTriangle(10,20));

// Impure function
// Because of random variable , we cannot surely tell the area of rectangle
// Everytime area will be different
  
function randomArea(length, breadth){
    const random = Math.floor(Math.random() * 10 + 1);
    return length * breadth * random;
}

console.log(randomArea(20,30));