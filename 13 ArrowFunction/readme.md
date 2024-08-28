Arrow functions in JavaScript provide a more concise syntax for writing function expressions. They were introduced in ES6 (ECMAScript 2015) and offer a few key differences compared to traditional function expressions.

### Syntax

**1. Basic Arrow Function Syntax:**

```javascript
const add = (a, b) => a + b;
```

In this example:
- `const` declares a variable `add`.
- `(a, b)` are the parameters.
- `=>` is the arrow function syntax.
- `a + b` is the expression that is returned by the function.

### Variations

**2. Single Parameter:**

If the arrow function has only one parameter, you can omit the parentheses around the parameter:

```javascript
const square = x => x * x;
```

**3. No Parameters:**

If the function does not take any parameters, you need to use empty parentheses:

```javascript
const greet = () => console.log('Hello!');
```

**4. Multiple Statements:**

If the function body has multiple statements, you need to enclose them in curly braces `{}` and use the `return` keyword explicitly:

```javascript
const multiply = (a, b) => {
    const result = a * b;
    return result;
};
```

### Key Differences

1. **`this` Binding:**

   Arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding lexical context. This makes them useful for methods that need to retain the context of the enclosing scope.

   ```javascript
   function Counter() {
       this.count = 0;
       setInterval(() => {
           this.count++;
           console.log(this.count);
       }, 1000);
   }

   new Counter(); // Logs the count incrementing every second
   ```

   In the above example, `this` inside the arrow function refers to the `Counter` instance, whereas in a regular function, `this` would refer to the global object (or `undefined` in strict mode).

2. **No `arguments` Object:**

   Arrow functions do not have their own `arguments` object. You can use the rest parameter `...args` instead if you need to work with multiple arguments.

   ```javascript
   const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
   ```

3. **No `new` Keyword:**

   Arrow functions cannot be used as constructors and will throw an error if you try to use them with `new`.

   ```javascript
   const Person = (name) => {
       this.name = name; // Error: 'this' is not defined
   };

   const person = new Person('Alice'); // Throws error
   ```

Arrow functions offer a cleaner and more concise way to write functions, especially when dealing with `this` and when you want to avoid the verbosity of traditional function expressions.