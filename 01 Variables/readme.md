In JavaScript, `let`, `var`, and `const` are used to declare variables, but they have different scopes and behaviors. Here’s a breakdown of each:

### `var`
- **Scope:** Function-scoped. If declared inside a function, it is accessible throughout that function, including inside nested blocks.
- **Hoisting:** Variables declared with `var` are hoisted to the top of their scope. This means the variable can be used before its declaration, though its value will be `undefined` until the declaration is reached.
- **Re-declaration:** Variables declared with `var` can be re-declared within the same scope without causing an error.

  ```javascript
  function example() {
    console.log(a); // undefined due to hoisting
    var a = 1;
    var a = 2; // no error
    console.log(a); // 2
  }
  ```

### `let`
- **Scope:** Block-scoped. Variables declared with `let` are only accessible within the block they are defined in (e.g., within `{}`).
- **Hoisting:** Variables declared with `let` are hoisted but not initialized. They are in a "temporal dead zone" from the start of the block until the declaration is encountered.
- **Re-declaration:** Variables declared with `let` cannot be re-declared in the same block scope, which helps avoid accidental variable overwrites.

  ```javascript
  function example() {
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = 1;
    // let a = 2; // SyntaxError: Identifier 'a' has already been declared
    console.log(a); // 1
  }
  ```

### `const`
- **Scope:** Block-scoped, like `let`.
- **Hoisting:** Variables declared with `const` are hoisted but not initialized. They also have a "temporal dead zone."
- **Re-declaration:** Variables declared with `const` cannot be re-declared in the same block scope.
- **Mutability:** While the reference to the variable cannot be changed (you can’t reassign it), the contents of objects or arrays declared with `const` can still be modified.

  ```javascript
  function example() {
    const a = 1;
    // a = 2; // TypeError: Assignment to constant variable
    console.log(a); // 1

    const obj = { key: 1 };
    obj.key = 2; // Allowed, modifying the content of the object
    console.log(obj.key); // 2
  }
  ```

### Summary
- **`var`:** Function-scoped, hoisted, can be re-declared and updated.
- **`let`:** Block-scoped, hoisted but not initialized, cannot be re-declared in the same block.
- **`const`:** Block-scoped, hoisted but not initialized, cannot be re-declared or reassigned; the contents of objects or arrays can be modified.

Choosing between `let` and `const` is generally preferred over `var` in modern JavaScript due to their block scope and reduced risk of accidental errors. Use `let` when you need a variable whose value will change, and `const` when the reference to the variable should remain constant.