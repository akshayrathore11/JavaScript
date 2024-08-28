// Function to log each letter of the name "AKSHAY"
function sayMyName() {
  console.log("A");
  console.log("K");
  console.log("S");
  console.log("H");
  console.log("A");
  console.log("Y");
}

// Function reference - this doesn't execute the function, just references it
sayMyName;

// Function execution - this would execute the function
// sayMyName()

// Function to add two numbers and print the result
function addTwoNum(num1, num2) {
  // `num1` and `num2` are parameters
  // console.log(num1 + num2); // Uncomment to log the sum of num1 and num2
}

// Function to add two numbers, store the result in a variable, and return it
function addTwoNum0(num1, num2) {
  // `num1` and `num2` are parameters
  let r = num1 + num2; // Store the sum of num1 and num2 in variable `r`
  return r; // Return the result `r`
  console.log("after return nothing with work"); // This will not execute as it's after the return statement
}

// Function calls with various arguments
// addTwoNum(2, 5); // Uncomment to execute the function and log the sum of 2 and 5
// addTwoNum(2, "3");  // Arguments: 2 (number) and "3" (string)
// addTwoNum(2, "a");  // Arguments: 2 (number) and "a" (string)
// addTwoNum(2, null); // Arguments: 2 (number) and null

const result = addTwoNum(3, 7); // Call addTwoNum with 3 and 7 as arguments, but it does nothing since no return or console.log is in the function
// console.log("Result :", result); // Uncomment to log the result, but it will be `undefined`

const result0 = addTwoNum0(3, 7); // Call addTwoNum0 with 3 and 7, store the returned result
// console.log("Result :", result0); // Uncomment to log the result

// Function to log a message when a user logs in
function loginMsg(username) {
  if (username === undefined) { // Check if no username is provided
    // Alternative: if (!username)
    // console.log("Please enter a username"); // Log an error message
    return; // Exit the function
  }
  return `${username} just logged in`; // Return a message with the username
}

loginMsg(); // Call loginMsg with no arguments, so it will log "Please enter a username"
// loginMsg("Akshay"); // Uncomment to call loginMsg with "Akshay" as the argument

// let store = loginMsg("Akshay"); // Call loginMsg with "Akshay", store the returned message
// console.log(store); // Uncomment to log the stored message

// console.log(loginMsg("Check")); // Uncomment to call loginMsg with "Check" and log the returned message

// Function with a default parameter value
function loginMsg0(username = "Motu") { // Default value for `username` is "Motu"
  if (!username) { // Check if username is falsy (null, undefined, empty string, etc.)
    // console.log("Please enter a username"); // Log an error message
    return; // Exit the function
  }
  return `${username} just logged in`; // Return a message with the username
}

// console.log(loginMsg0()); // Call loginMsg0 with no arguments, logs "Motu just logged in"
// console.log(loginMsg0("CHeck kr  ")); // Call loginMsg0 with "CHeck kr" as the argument, logs "CHeck kr just logged in"

// Function to calculate cart price using rest parameters
function calculateCartPrice(a, b, ...num2) { // `...num2` captures the rest of the arguments as an array
  return num2; // Return the array of additional numbers
}
// console.log(calculateCartPrice(200, 300, 400, 500)); // Uncomment to see the result, logs [400, 500]

// Object representing a user
const user = {
  name: "Akshay",
  age: 25,
};

// Function to handle and log information from an object
function handleObj(anyObj) {
  console.log(`Username is ${anyObj.name} and age is ${anyObj.age}`); // Log the user's name and age
}

handleObj(user); // Call handleObj with the `user` object

handleObj({
  name: "Aditya",
  age: 28,
}); // Call handleObj with an inline object

// Array of numbers
let myNewArray = [10, 20, 30, 40];

// Function to return the second value from an array
function returnSecondVal(array) {
  return array[1]; // Return the element at index 1 (the second element)
}

console.log(returnSecondVal(myNewArray)); // Call returnSecondVal with `myNewArray`, logs 20
