In JavaScript, functions are blocks of reusable code that are designed to perform specific tasks. Functions allow you to encapsulate code into logical units, making your programs easier to manage, debug, and reuse. Functions in JavaScript can be categorized into several types based on how they are defined and used.

### 1. **Function Declaration**

**Example:**
```javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Akshay");  // Output: Hello, Akshay!
```

- **Hoisting**: Function declarations are hoisted, meaning you can call the function before its declaration in the code.

### 2. **Function Expression**
A function expression defines a function as part of a larger expression. It can be assigned to a variable, passed as an argument, or returned from another function.

**Example:**
```javascript
const greet = function(name) {
    console.log("Hello, " + name + "!");
};
greet("Akshay");  // Output: Hello, Akshay!
```

- **Not Hoisted**: Function expressions are not hoisted, so they must be defined before they are used.

### 3. **Arrow Function**
Arrow functions provide a more concise syntax to write functions, and they do not have their own `this` context, making them useful for certain scenarios, especially with callbacks and functional programming.

**Example:**
```javascript
const greet = (name) => {
    console.log("Hello, " + name + "!");
};
greet("Akshay");  // Output: Hello, Akshay!
```

- **Implicit Return**: If the function body contains only one expression, you can omit the curly braces and the `return` keyword.
  ```javascript
  const add = (a, b) => a + b;
  console.log(add(2, 3));  // Output: 5
  ```

### 4. **Anonymous Function**
An anonymous function is a function without a name. It is often used in situations where a function is only needed once, such as in event handlers or as arguments to other functions.

**Example:**
```javascript
setTimeout(function() {
    console.log("This runs after 1 second");
}, 1000);
```

### 5. **Immediately Invoked Function Expression (IIFE)**
An IIFE is a function that is executed immediately after it is defined. This pattern is useful for creating a new scope, isolating variables, and avoiding polluting the global namespace.

**Example:**
```javascript
(function() {
    console.log("IIFE executed");
})();
```

### 6. **Higher-Order Function**
A higher-order function is a function that either takes one or more functions as arguments or returns a function as a result. This is a key concept in functional programming.

**Example:**
```javascript
function higherOrder(fn) {
    return function(name) {
        fn(name);
    };
}

const greet = higherOrder(function(name) {
    console.log("Hello, " + name + "!");
});

greet("Akshay");  // Output: Hello, Akshay!
```

### 7. **Callback Function**
A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are commonly used in asynchronous programming.

**Example:**
```javascript
function fetchData(callback) {
    setTimeout(function() {
        callback("Data loaded");
    }, 2000);
}

fetchData(function(data) {
    console.log(data);  // Output: Data loaded
});
```

### 8. **Constructor Function**
A constructor function is used to create objects. When called with the `new` keyword, it creates an instance of an object with properties and methods defined within the function.

**Example:**
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const akshay = new Person("Akshay", 26);
console.log(akshay.name);  // Output: Akshay
```

### 9. **Generator Function**
A generator function is a special type of function that can pause its execution (`yield`) and resume later. It is defined using the `function*` syntax.

**Example:**
```javascript
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generatorFunction();
console.log(gen.next().value);  // Output: 1
console.log(gen.next().value);  // Output: 2
console.log(gen.next().value);  // Output: 3
```

### 10. **Recursive Function**
A recursive function is a function that calls itself in order to solve a problem. It is commonly used for problems that can be broken down into smaller, similar problems.

**Example:**
```javascript
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));  // Output: 120
```
### Summary
- **Function Declaration**: Traditional way to define a function, hoisted.
- **Function Expression**: Function defined within an expression, not hoisted.
- **Arrow Function**: Concise syntax, no `this` binding.
- **Anonymous Function**: Function without a name, often used as a one-time callback.
- **IIFE**: Executes immediately after definition, used for creating isolated scopes.
- **Higher-Order Function**: Takes or returns a function, essential for functional programming.
- **Callback Function**: Function passed as an argument to another function, commonly used for asynchronous tasks.
- **Constructor Function**: Used with `new` to create objects.
- **Generator Function**: Can pause and resume its execution.
- **Recursive Function**: Calls itself to solve smaller sub-problems.

These different types of functions give you flexibility in how you write and structure your code, allowing you to tackle various problems efficiently.