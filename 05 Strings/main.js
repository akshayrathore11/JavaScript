// Single, double, and backticks are used for string declaration in JavaScript

const name = "Akshay "; 
const repoCount = 50;   

// Using outdated string concatenation
console.log(name + repoCount + " Value"); 
// This line adds `name` (a string) and `repoCount` (a number) together, resulting in "Akshay 50 Value".
// Concatenation joins strings together, and the number is converted to a string in the process.

// Using modern string interpolation with backticks (template literals)
// Injects variables directly into the string
console.log(`Hello my name is ${name}and my repo count is ${repoCount}`); 
// This line uses backticks and curly braces to embed the `name` and `repoCount` variables directly into the string.
// The result is "Hello my name is Akshay and my repo count is 50".

// Another way to declare a string using the String object constructor
const gameName = new String("Black Myth");


console.log(gameName[0]); 
// Logs the first character of the string "Black Myth", which is "B".

console.log(gameName.__proto__); 
// Logs the prototype of the string object. In JavaScript, every object has a prototype which defines properties and methods that the object can use.

console.log(name.length); 
console.log(gameName.length); 

console.log(name.toUpperCase()); 
console.log(gameName.toUpperCase()); 


// Extracts a substring from "Black Myth" from index 0 to 4 (not inclusive of 4)
const newString = gameName.substring(0, 4); 
console.log(newString); 
// Logs "Blac", which is the substring starting from index 0 up to, but not including, index 4.

// Extracts a portion of the string using negative and positive indices
const anoString = gameName.slice(-8, 4); 
console.log(anoString); 
// This line is intended to slice the string from index -8 to index 4.
// However, using a negative index with a larger end index (4) doesn't work as expected and logs an empty string.

const one = "            Akshay      "; //
console.log(one); 

console.log(one.trim()); 
// Removes the extra spaces from the beginning and end of the string and logs "Akshay".

const url = "https://github.com%20akshayrathore1197"; 
console.log(url.replace("%20", "-")); 
// Replaces "%20" (the URL encoding for a space) with "-" and logs the updated URL "https://github.com-akshayrathore1197".

console.log(url.includes("github")); 
// Checks if the string "github" is present in the URL and logs true if it is found.

console.log(url.split("//")); 
// Splits the URL at "//" and logs an array with two elements: ["https:", "github.com%20akshayrathore1197"].
