Certainly! Here's a comprehensive explanation combining the concept of scope with the issues associated with `var`, `let`, and `const`, along with examples for each:

---

### Understanding Scope with `var`, `let`, and `const`

**Scope** in JavaScript determines where variables and functions are accessible within your code. JavaScript provides three keywords for variable declaration: `var`, `let`, and `const`, each handling scope differently.

### 1. Global Scope

Variables declared outside any function or block are in the global scope and can be accessed from anywhere in your code.

**Example:**

```javascript
let globalVariable = "I am global";

function printGlobal() {
  console.log(globalVariable); // Accessible here
}

printGlobal(); // Output: "I am global"
console.log(globalVariable); // Output: "I am global"
```

### 2. Function Scope (using `var`)

- **Function Scope**: `var` is function-scoped, meaning it is accessible throughout the function where it is declared. If declared outside of a function, it becomes globally scoped.
- **Issues with `var`**:
  1. **Function Scope vs. Block Scope**: Variables declared with `var` are not limited to blocks like `if` or `for`.
  2. **Hoisting**: `var` declarations are hoisted to the top of their function or global scope and initialized with `undefined`.
  3. **Variable Shadowing**: Inner `var` declarations can shadow outer variables, leading to potential bugs.
  4. **Accidental Globals**: Omitting `var`, `let`, or `const` creates global variables unintentionally.

**Examples:**

```javascript
// Function Scope with var
function functionScopeExample() {
  if (true) {
    var functionScoped = "I am function scoped";
  }
  
  console.log(functionScoped); // Output: "I am function scoped" - Accessible here
}

functionScopeExample();
// console.log(functionScoped); // Error: functionScoped is not defined

// Hoisting with var
function varHoisting() {
  console.log(hoistedVar); // Output: undefined - Hoisted but not yet assigned
  var hoistedVar = "I am hoisted";
  console.log(hoistedVar); // Output: "I am hoisted"
}

varHoisting();

// Variable Shadowing with var
var globalVar = "I am global";

function shadowingIssue() {
  var globalVar = "I am function scoped"; // Shadows globalVar
  console.log(globalVar); // Output: "I am function scoped"
}

shadowingIssue();
console.log(globalVar); // Output: "I am global" - The globalVar is not affected by the function scope

// Accidental Globals with var
function accidentalGlobal() {
  globalAccidental = "I am a global variable"; // No var, let, or const used
}

accidentalGlobal();
console.log(globalAccidental); // Output: "I am a global variable"
```

### 3. Block Scope (using `let` and `const`)

- **Block Scope**: Both `let` and `const` are block-scoped, meaning they are only accessible within the block in which they are declared. They are not hoisted and remain in a "temporal dead zone" until their declaration is encountered.
- **`let` and `const` Differences**: 
  - `let` allows reassignment.
  - `const` does not allow reassignment and must be initialized at declaration.

**Examples with `let` and `const`**:

```javascript
// Block Scope with let
function blockScopeLet() {
  if (true) {
    let blockScopedLet = "I am block scoped with let";
    console.log(blockScopedLet); // Output: "I am block scoped with let"
  }
  
  // console.log(blockScopedLet); // Error: blockScopedLet is not defined outside the block
}

blockScopeLet();

// Block Scope with const
function blockScopeConst() {
  if (true) {
    const blockScopedConst = "I am block scoped with const";
    console.log(blockScopedConst); // Output: "I am block scoped with const"
  }
  
  // console.log(blockScopedConst); // Error: blockScopedConst is not defined outside the block
}

blockScopeConst();

// Example Combining var, let, and const
function scopeDemo() {
  if (true) {
    var varVariable = "I am var"; // Function-scoped
    let letVariable = "I am let"; // Block-scoped
    const constVariable = "I am const"; // Block-scoped
    
    console.log(varVariable); // Output: "I am var"
    console.log(letVariable); // Output: "I am let"
    console.log(constVariable); // Output: "I am const"
  }
  
  console.log(varVariable); // Output: "I am var" - Accessible here
  // console.log(letVariable); // Error: letVariable is not defined
  // console.log(constVariable); // Error: constVariable is not defined
}

scopeDemo();
```

### Summary

- **Global Scope**: Variables declared outside functions or blocks are globally scoped.
- **Function Scope**: `var` is function-scoped and can be hoisted, leading to potential issues with shadowing and accidental global variables.
- **Block Scope**: `let` and `const` provide block-level scoping and avoid issues like hoisting, shadowing, and accidental global variables. 

Using `let` and `const` is generally preferred for better control over variable scope and to avoid the pitfalls associated with `var`.