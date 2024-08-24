// Comparison Operators

// Checks if 2 is greater than or equal to 1
// Reason: 2 is indeed greater than 1
// console.log(2 >= 1); // Output: true

// Checks if 2 is less than or equal to 1
// Reason: 2 is not less than or equal to 1
// console.log(2 <= 1); // Output: false

// Checks if 2 is greater than 1
// Reason: 2 is greater than 1
// console.log(2 > 1); // Output: true

// Checks if 2 is less than 1
// Reason: 2 is not less than 1
// console.log(2 < 1); // Output: false

// Checks if 2 is not equal to 1
// Reason: 2 is not equal to 1
// console.log(2 != 1); // Output: true

// Checks if 2 is equal to 1
// Reason: 2 is not equal to 1
// console.log(2 == 1); // Output: false

// Checks if the string "2" is greater than the number 1
// Reason: The string "2" is converted to the number 2 for comparison. Since 2 > 1, the result is true
// console.log("2" > 1); // Output: true

// Checks if the string "02" is less than the number 1
// Reason: The string "02" is converted to the number 2. Since 2 is not less than 1, the result is false
// console.log("02" < 1); // Output: false

// Checks if null is greater than 0
// Reason: In JavaScript, null is treated as 0 when using relational operators like > or <. Since 0 is not greater than 0, the result is false
console.log(null > 0); // Output: false

// Checks if null is equal to 0
// Reason: null is not considered equal to 0 in a loose equality comparison. They represent different concepts
console.log(null == 0); // Output: false

// Checks if null is greater than or equal to 0
// Reason: In this context, null is treated as 0. Since 0 is equal to 0, the result is true
console.log(null >= 0); // Output: true

// Checks if undefined is equal to 0
// Reason: undefined is not considered equal to any value, including 0, in a loose equality comparison
console.log(undefined == 0); // Output: false

// Checks if undefined is greater than 0
// Reason: undefined cannot be compared with numbers directly. The result of such comparisons is always false
console.log(undefined > 0); // Output: false

// Checks if undefined is less than 0
// Reason: Similar to above, undefined cannot be compared with numbers directly. The result is always false
console.log(undefined < 0); // Output: false

//* == and ===

// Checks if 2 is equal to 2 with type conversion if necessary
// Reason: Both values are the same, so the result is true
// console.log(2 == 2); // Output: true

// Checks if 2 is strictly equal to 2 (both value and type must be the same)
// Reason: Both the value and type are the same (number 2), so the result is true
// console.log(2 === 2); // Output: true

// Checks if the number 2 is equal to the string "2" with type conversion
// Reason: The string "2" is converted to the number 2 for comparison. Since both are now numbers and equal, the result is true
// console.log(2 == "2"); // Output: true

// Checks if the number 2 is strictly equal to the string "2" (value and type must be the same)
// Reason: The value is the same, but the type is different (number vs. string), so the result is false
// console.log(2 === "2"); // Output: false
