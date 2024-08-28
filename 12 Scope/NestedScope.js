// Nested function example to demonstrate scope
function one() {
  const name = "Akshay"; // `name` is declared in the scope of function `one`

  // Nested function `two` inside function `one`
  function two() {
    const lName = "Rathore"; // `lName` is declared in the scope of function `two`
    // `lName` is accessible here
    console.log(name); // `name` is also accessible here because `two` is nested inside `one`
  }

  // `lName` is not accessible here because it's scoped to function `two`
  // console.log(lName); // Uncommenting this line will result in an error

  two(); // Call the nested function `two` to log `name` and `lName`
}

one(); // Call function `one` to execute the code

// *************************************

// Block scope example to demonstrate `const` and block scoping
if (true) {
  const uName = "Akshay"; // `uName` is declared in the scope of this `if` block

  if (true) {
    const lName = "Rathore"; // `lName` is declared in the scope of this nested `if` block
    console.log(uName + lName); // `uName` and `lName` are accessible here, output: "AkshayRathore"
  }

  // `lName` is not accessible here because it's scoped to the nested `if` block
  // console.log('lName: ', lName); // Uncommenting this line will result in an error
}

// `uName` is not accessible here because it's scoped to the outer `if` block
// console.log(uName); // Uncommenting this line will result in an error

//***************----------Hoisting-----***************** */

// Function declaration example demonstrating hoisting
console.log(addOne(5)); // Output: 6, because function declarations are hoisted to the top

// Function declaration
function addOne(num) {
  return num + 1;
}

// Function expression example showing that it's not hoisted
// console.log(addTwo(6)); // Uncommenting this line will result in an error because `addTwo` is not hoisted

// Function expression
const addTwo = function (num) {
  return num + 2;
};
