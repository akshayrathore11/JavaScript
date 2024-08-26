//* Arrays in JavaScript are resizable and can contain a mix of different data types.
//* Array-copy operations in JavaScript create shallow copies, which means that only the references to objects are copied, not the actual objects themselves.

// A shallow copy duplicates the top-level elements of an array or object, but nested objects or arrays are still shared between the original and the copy.
// A deep copy duplicates everything, including nested objects or arrays, ensuring that the original and the copy are completely independent.


const myArr = [1, 2, 3, 4, 5];
const myHeros = ["thor", "hulk"];

// Another way to declare an array using the Array constructor
const myArr2 = new Array(11, 22, 33, 44);

// console.log(myArr2[2]);
// console.log(myArr2);   


myArr.push(6);
// console.log(myArr);
myArr.pop();   
// console.log(myArr);

myArr.unshift(11); // Adds 11 to the beginning of the array (heavy operation as it shifts all elements)
// console.log(myArr);
myArr.shift();    // Removes the first element from the array
// console.log(myArr);

// Checking for elements
// console.log(myArr.includes(9));  // Checks if 9 is in the array (returns false)
// console.log(myArr.indexOf(9));   // Finds the index of 9 in the array (returns -1 if not found)

const newArr = myArr.join(); // Joins all elements into a string separated by commas
// console.log(myArr);        // Original array remains unchanged
// console.log(newArr);       // Output the joined string
// console.log(typeof newArr); // Output the type of newArr (string)

// * slice and splice methods

console.log("Normal print ", myArr); // Prints the original array

const storeSlice = myArr.slice(1, 3); // Extracts a portion of the array from index 1 to 3 (not including index 3)
console.log("slice ", storeSlice);    // Prints the sliced portion
console.log("After slice ", myArr);   // Original array remains unchanged

console.log("\t"); // Prints a tab for spacing

const storeSplice = myArr.splice(1, 3); // Removes 3 elements starting from index 1
console.log("splice ", storeSplice);    // Prints the removed elements
console.log("After splice ", myArr);    // Original array is modified, elements are removed

// * Understanding slice and splice
// Slice creates a shallow copy of a portion of the array without modifying the original array.
// Splice modifies the original array by removing or adding elements.
