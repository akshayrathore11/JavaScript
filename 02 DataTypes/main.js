'use strict'; // Treat all JavaScript code as ECMAScript 5 or newer for better practices and strict error handling.

// alert("3+3"); 
// The above line will give an error because we are running JavaScript on Node.js, which is a server-side environment. 
// `alert` is a feature of the browser's `window` object, which is not available in Node.js. 
// Remember, JavaScript was originally made for browsers, and Node.js is just a medium to run it outside of browsers.

let name = "Akshay"; // Declaring a variable `name` with the value "Akshay".
let age = 20;        // Declaring a variable `age` with the value 20.
let isLoggedIn = false; // Declaring a variable `isLoggedIn` with a boolean value of false.

//! Different data types in JavaScript:

//* primitve :-
let numberExample = 100;              // number: Represents numeric values.
let bigintExample = 12345678901234567890n; // bigint: For large integers beyond the safe integer limit.
let stringExample = "Hello, World!";  // string: Represents text.
let booleanExample = true;            // boolean: Represents true/false values.
let nullExample = null;               // null: Represents an intentional absence of value.
let undefinedExample;                 // undefined: Declared but not yet assigned a value.
let symbolExample = Symbol("unique"); // symbol: Represents a unique and immutable value.

//* non-primitve :-
let objectExample = { name: "Akshay", age: 20 }; // object: A collection of key-value pairs.
let arrayExample = [1, 2, 3, 4, 5];              // array: An ordered list of values.
let functionExample = function() {               // function: A reusable block of code.
    return "Hello from function!";
};

// Checking the `typeof` each data type
console.log("typeof numberExample:", typeof numberExample);           // "number"
console.log("typeof bigintExample:", typeof bigintExample);           // "bigint"
console.log("typeof stringExample:", typeof stringExample);           // "string"
console.log("typeof booleanExample:", typeof booleanExample);         // "boolean"
console.log("typeof nullExample:", typeof nullExample);               // "object" (this is a known quirk in JavaScript)
console.log("typeof undefinedExample:", typeof undefinedExample);     // "undefined"
console.log("typeof symbolExample:", typeof symbolExample);           // "symbol"

console.log("typeof objectExample:", typeof objectExample);           // "object"
console.log("typeof arrayExample:", typeof arrayExample);             // "object" (arrays are a special type of object)
console.log("typeof functionExample:", typeof functionExample);       // "function"

 // The `typeof` operator returns the data type of its operand. 
