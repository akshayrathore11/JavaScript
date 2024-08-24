// Declare a variable with the value 3
let value = 3;

// Negate the value, resulting in -3
let negValue = -value;
// Output the negated value to the console
// console.log(negValue); // Output: -3

// Arithmetic operations with constants
// Addition: 2 + 2 results in 4
// console.log(2 + 2); // Output: 4

// Subtraction: 2 - 2 results in 0
// console.log(2 - 2); // Output: 0

// Multiplication: 2 * 2 results in 4
// console.log(2 * 2); // Output: 4

// Exponentiation: 2 ** 2 results in 4 (2 raised to the power of 2)
// console.log(2 ** 2); // Output: 4

// Division: 2 / 2 results in 1
// console.log(2 / 2); // Output: 1

// Modulus: 2 % 2 results in 0 (remainder of 2 divided by 2)
// console.log(2 % 2); // Output: 0

// String concatenation
let str1 = "hello";
let str2 = " Reader";
// Concatenate str1 and str2 resulting in "hello Reader"
console.log(str1 + str2); // Output: "hello Reader"

// String and number operations
// Concatenation of a string "1" with number 2 results in "12" because the number is converted to a string
console.log("1" + 2); // Output: "12"

// Addition of number 1 with string "2" results in "12" because the number is converted to a string
console.log(1 + "2"); // Output: "12"

// Concatenation of string "1" with number 2 results in "12", and then concatenation of "12" with number 2 results in "122"
console.log("1" + 2 + 2); // Output: "122"

// Addition of number 1 with number 2 results in 3, and then concatenation of 3 with string "2" results in "32"
console.log(1 + 2 + "2"); // Output: "32"

// Unary plus operator converts true to 1
console.log(+true); // Output: 1

// Unary plus operator converts an empty string to 0
console.log(+""); // Output: 0

// Variable assignment using chained assignment
let num1, num2, num3;
// Assign 2 + 2 (which is 4) to num3, num2, and num1
num1 = num2 = num3 = 2 + 2; // All variables are set to 4
// It's generally not recommended to chain assignments like this for clarity

// Increment and Decrement Operators
let i = 1;
// Prefix increment: Increments i before using its value
console.log(++i); // Output: 2 (i is now 2)

// Postfix increment: Uses the current value of i (2), then increments i
console.log(i++); // Output: 2 (i is now 3)

// Prefix decrement: Decrements i before using its value
console.log(--i); // Output: 2 (i is now 2)

// Postfix decrement: Uses the current value of i (2), then decrements i
console.log(i--); // Output: 2 (i is now 1)

// Comparison Operators
let a = 5;
let b = "5";

// Strict equality (===): Checks for equality and type; different types are not considered equal
console.log(a === b); // Output: false (number 5 is not the same type as string '5')

// Loose equality (==): Checks for equality with type conversion; values are compared after type coercion
console.log(a == b); // Output: true (number 5 is coerced to string '5')

// Relational operators
console.log(5 > 3); // Output: true (5 is greater than 3)
console.log(5 < 3); // Output: false (5 is not less than 3)
console.log(5 >= 5); // Output: true (5 is equal to 5)
console.log(5 <= 5); // Output: true (5 is equal to 5)

// Logical operators
console.log(true && false); // Output: false (both sides are not true)
console.log(true || false); // Output: true (at least one side is true)
console.log(!true); // Output: false (negation of true is false)

// Type conversion examples
let num = "123";
// Convert string '123' to number
console.log(Number(num)); // Output: 123

let bool = 0;
// Convert number 0 to boolean
console.log(Boolean(bool)); // Output: false

// Type conversion during concatenation
console.log("5" + 1); // Output: '51' (1 is converted to string and concatenated)
console.log("5" - 1); // Output: 4 (string '5' is converted to number and subtracted)

// Object and array literals
let obj = { name: "Alice", age: 30 };
let arr = [1, 2, 3];

// Accessing object properties
console.log(obj.name); // Output: 'Alice'
console.log(obj["age"]); // Output: 30

// Accessing array elements
console.log(arr[0]); // Output: 1
console.log(arr[1]); // Output: 2

// Using undefined and null
let undef;
console.log(undef); // Output: undefined (variable declared but not initialized)

let nul = null;
console.log(nul); // Output: null (explicitly assigned null value)

// Array methods
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // Output: 5 (number of elements in the array)
console.log(numbers.push(6)); // Output: 6 (new length of the array after adding element 6)
console.log(numbers.pop()); // Output: 6 (last element removed from the array)
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Template literals
let name = "Bob";
let age = 25;
// Template literals allow embedding expressions inside string literals using `${}`
console.log(`Name: ${name}, Age: ${age}`); // Output: "Name: Bob, Age: 25"
