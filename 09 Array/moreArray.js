const marvelHeros = ["thor", "ironman", "wanda"];
const marvelVillains = ["luis", "thanos", "ultron"];

// console.log(marvelHeros); 
// console.log(marvelVillains); 

// Adding an array to another array
// marvelHeros.push(marvelVillains);  // Adds the entire marvelVillains array as a single element to marvelHeros
// console.log(marvelHeros);          // The marvelHeros array now has another array inside it
// console.log(marvelHeros[3]);       // Accesses the array inside marvelHeros
// console.log(marvelHeros[3][2]);    // Accesses the third element of the nested array (ultron)

// Concatenating two arrays
// const marvel = marvelHeros.concat(marvelVillains); // Creates a new array by concatenating marvelHeros and marvelVillains
// console.log(marvel);                             

// Using the spread operator to merge arrays
// const mcu = [...marvelHeros, ...marvelVillains]; // Merges marvelHeros and marvelVillains using the spread operator (preferred over concat)
// console.log(mcu);                               

// Nested arrays and flattening them
const anotherArr = [1, 2, 3, [4, 5, 6, [23]], [7, 8], 9, 10];
// console.log(anotherArr); 

const flatArray = anotherArr.flat(Infinity); // Flattens the array to any depth (Infinity ensures all levels are flattened)
// console.log(flatArray); 


console.log(Array.isArray("Akshay")); // Checks if the argument is an array (returns false as "Akshay" is a string)


console.log(Array.from("Akshay")); // Converts the string "Akshay" into an array of characters

// Using Array.from() with an object
console.log(Array.from({ name: "akshay" })); 
// This returns an empty array [] because the object does not have a length property or iterable elements.
// Array.from() expects an array-like object (with a length property) or an iterable (like a string).


let s1 = 100, s2 = 200, s3 = 300;
console.log(Array.of(s1, s2, s3)); // Creates a new array from the given elements (outputs [100, 200, 300])
