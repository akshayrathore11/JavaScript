// Declaring a constant `accountId` with a value of 14555.
// Constants cannot be reassigned once defined.
const accountId = 14555;

// Declaring a variable `accountEmail` using `let` with an initial value of "akrt1947@gmail.com".
// `let` is block-scoped, meaning it is only accessible within the block it's defined in.
let accountEmail = "akrt1947@gmail.com";

// Declaring a variable `accountPassword` using `var` with an initial value of "45457".
// `var` is function-scoped, meaning it is accessible within the function or globally if defined outside any function.
var accountPassword = "45457";

// Assigning a value to `accountCity` without `var`, `let`, or `const` automatically makes it a global variable.
// This is not recommended due to potential conflicts and unpredictable behavior in larger codebases.
accountCity = "Bhopal";

// Attempting to reassign `accountId` will cause an error since `accountId` was declared as a constant with `const`.
// const variables cannot be reassigned once set.
// accountId = 1234;  

// Reassigning `accountEmail` to "akshay@gmail.com".
// Since `accountEmail` was declared with `let`, it can be reassigned.
accountEmail = "akshay@gmail.com";

// Reassigning `accountCity` to "Indore".
// `accountCity` is a global variable, so it can be reassigned without issue.
accountCity = "Indore";

// Logging the value of `accountId` to the console.
// The expected output is the initial value, `14555`.
console.log(accountId);

// Using `console.table` to display all variable values in a tabular format.
// This is useful for visualizing multiple related values at once.
console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
 * JavaScript has three ways to declare variables: `var`, `let`, and `const`.
 * 
 * 1. `const`: Used to declare constants, which cannot be reassigned after being defined. They are block-scoped.
 * 2. `let`: Used to declare block-scoped variables. Unlike `var`, `let` ensures that the variable is only accessible within its block (e.g., inside a loop or function).
 * 3. `var`: Used to declare function-scoped or globally-scoped variables. It can cause issues like unintended global variables or hoisting problems, which is why `let` is preferred in modern JavaScript.
 * 
 * Scope: Think of scope as the accessibility of variables. Block scope limits the variable's accessibility to the block in which it was defined (inside `{}`). 
 * Function scope allows variables to be accessible anywhere within the function. 
 * Global scope makes the variable accessible anywhere in the code.
 */
