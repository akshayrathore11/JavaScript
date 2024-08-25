In JavaScript, numbers are a fundamental data type used to represent both integer and floating-point values. JavaScript follows the IEEE 754 standard for representing numbers, meaning it uses 64-bit floating-point representation, which allows for integers, floating-point numbers, and even special values like `Infinity` and `NaN` (Not a Number).

### Types of Numbers in JavaScript
1. **Integers:** Whole numbers, positive or negative, e.g., `42`, `-7`.
2. **Floating-point numbers:** Numbers with decimal points, e.g., `3.14`, `-0.001`.
3. **Special Numeric Values:**
   - `Infinity` and `-Infinity`: Result from dividing by zero or an operation that exceeds the largest possible value.
   - `NaN` (Not a Number): Result of an invalid or undefined mathematical operation, e.g., `0 / 0` or parsing a non-numeric string with `Number()`.

### Creating Numbers
Numbers can be created in various ways:
- **Literal:** `let num = 42;`
- **Number Object:** `let num = new Number(42);`
- **Conversion Functions:** `Number("42")`, `parseInt("42")`, `parseFloat("42.58")`.

### Common Number Methods

1. **`Number.isFinite(value)`**
   - Checks if the provided value is a finite number.
   - Example:
     ```javascript
     Number.isFinite(10);   // true
     Number.isFinite(Infinity); // false
     ```

2. **`Number.isInteger(value)`**
   - Checks if the value is an integer.
   - Example:
     ```javascript
     Number.isInteger(10);  // true
     Number.isInteger(10.5); // false
     ```

3. **`Number.isNaN(value)`**
   - Determines if the value is `NaN`.
   - Example:
     ```javascript
     Number.isNaN(NaN);  // true
     Number.isNaN("Hello"); // false
     ```

4. **`Number.isSafeInteger(value)`**
   - Checks if the value is a safe integer (within the range of `-(2^53 - 1)` and `2^53 - 1`).
   - Example:
     ```javascript
     Number.isSafeInteger(9007199254740991); // true
     Number.isSafeInteger(9007199254740992); // false
     ```

5. **`Number.parseInt(string, radix)`**
   - Parses a string and returns an integer based on the specified radix (base).
   - Example:
     ```javascript
     Number.parseInt("101", 2); // 5 (binary to decimal)
     Number.parseInt("42", 10); // 42
     ```

6. **`Number.parseFloat(string)`**
   - Parses a string and returns a floating-point number.
   - Example:
     ```javascript
     Number.parseFloat("3.14"); // 3.14
     Number.parseFloat("3.14abc"); // 3.14
     ```

7. **`toFixed(digits)`**
   - Formats a number using fixed-point notation.
   - Example:
     ```javascript
     let num = 3.14159;
     num.toFixed(2); // "3.14"
     ```

8. **`toExponential(fractionDigits)`**
   - Returns a string representing the number in exponential notation.
   - Example:
     ```javascript
     let num = 123456;
     num.toExponential(2); // "1.23e+5"
     ```

9. **`toPrecision(precision)`**
   - Returns a string representing the number to a specified precision.
   - Example:
     ```javascript
     let num = 3.14159;
     num.toPrecision(3); // "3.14"
     num.toPrecision(2); // "3.1"
     ```

10. **`toString(radix)`**
    - Returns a string representing the number in a specified base (radix).
    - Example:
      ```javascript
      let num = 255;
      num.toString(16); // "ff" (hexadecimal)
      num.toString(2);  // "11111111" (binary)
      ```

11. **`valueOf()`**
    - Returns the primitive value of a Number object.
    - Example:
      ```javascript
      let num = new Number(10);
      num.valueOf(); // 10
      ```

### Example Usage
```javascript
let num = 1234.56789;

console.log(num.toFixed(2));          // "1234.57"
console.log(num.toExponential(3));    // "1.235e+3"
console.log(num.toPrecision(5));      // "1234.6"
console.log(num.toString(2));         // "10011010010.10011100101010011101"
```

These methods provide various ways to handle and manipulate numeric data in JavaScript, allowing for flexible and precise operations across different use cases.