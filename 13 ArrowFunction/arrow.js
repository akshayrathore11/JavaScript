// Define a regular function `one`
function one() {
  let name = "Akshay";
  console.log("name: ", name); // Logs the value of the local variable `name`
}
one(); // Calls the function `one`, logs: "name: Akshay"

// Define an arrow function `two`
const two = () => {
  let name = "Akshay 2";
  console.log("name: ", name); // Logs the value of the local variable `name`
};
two(); // Calls the arrow function `two`, logs: "name: Akshay 2"

// Define an arrow function `three` that takes two parameters and returns their sum
const three = (num1, num2) => {
  let sum = num1 + num2;
  return sum; // Returns the sum of `num1` and `num2`
};
console.log(three(2, 5)); // Calls `three` with arguments 2 and 5, logs: 7

// Define an arrow function `four` with implicit return
const four = (num1, num2) => num1 + num2; // The return statement is implicit
console.log(four(20, 5)); // Calls `four` with arguments 20 and 5, logs: 25

// Define another arrow function `five` (same as `four`, but with different arguments)
const five = (num1, num2) => (num1 + num2);
console.log(five(55, 5)); // Calls `five` with arguments 55 and 5, logs: 60

// Define an arrow function `six` with a mistaken syntax
const six = () => {
  name: "Akshay"; // This is interpreted as a label, not an object property
};
console.log(six()); // Logs: undefined, because the function doesn't return anything

// Define an arrow function `seven` with a correct object literal return
const seven = () => ({ name: "Akshay" }); // Arrow function returning an object
console.log(seven()); // Calls `seven`, logs: { name: 'Akshay' }
