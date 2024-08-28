// Define an object `user` with properties and a method
const user = {
  name: "Akshay",
  age: 20,
  welcome: function () {
    // `this` refers to the `user` object here
    console.log(this); // Logs: { name: 'Akshay', age: 20, welcome: [Function: welcome] }

    // Uncommenting the following line would log "Akshay, welcome"
    // console.log(`${this.name}, welcome`);
  },
};

// Call the `welcome` method of the `user` object
user.welcome(); // Logs: { name: 'Akshay', age: 20, welcome: [Function: welcome] }

// Update the `name` property of the `user` object
user.name = "Aditya";

// Call the `welcome` method again after updating `name`
user.welcome(); // Logs: { name: 'Aditya', age: 20, welcome: [Function: welcome] }
// Logs "Aditya, welcome"

// `this` in the global context
// In a browser, this logs the `window` object; in Node.js, it logs the `global` object.
// Uncommenting the following line would log the global object
// console.log(this);

// Define a global variable `store`
let store0 = "Outerside"; // Renamed global variable

// Define a function `one`
function one() {
  // Define a local variable `store` inside the function
  let store = "Hello";
  
  // `this` refers to the global object here
  // console.log(this); // Logs: window (in browsers) or global (in Node.js)
  
  // Attempt to access the global variable `store0` using `this`
  // console.log(this.store0); 
}

// Call the function `one`
one();
