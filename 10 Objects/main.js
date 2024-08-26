// Create a symbol to be used as a key
const mySym = Symbol("myKey");

// Object literal syntax to create an object
let person = {
  name: "John",                                 // Regular string key (processed as "name")
  "full name": "John Cena",                     // String with space as key, needs quotes
  age: 30, // Number value
  [mySym]: "use [] in key to make it symbol",   // Symbol key, unique property
  occupation: "Developer",                      // Another regular string key
  address: {
                                                // Nested object for more structured data
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
  hobbies: ["reading", "hiking", "coding"],      // Array value to list hobbies
};

// Accessing properties of the object
console.log(person.name);           // Accessing property using dot notation(Output:"John")
console.log(person["full name"]);   // Accessing property with a space in key using square bracket notation (Output: "John Cena")
console.log(person[mySym]);         // Accessing property using the symbol key (Output: "use [] in key to make it symbol")

// Modifying properties of the object
// Object.freeze(person); // Uncommenting this would prevent any modifications to the 'person' object

person.name = "Akshay";             // Changing the value of the 'name' property
console.log(person);                // Output: Object with 'name' updated to "Akshay"

// Adding methods to the object
person.greeting = function () {
  console.log("Hello There");       // Adds a method 'greeting' to the object
};

person.greetingtwo = function () {
  console.log(`Hello ${this["full name"]}`); // Uses 'this' keyword to refer to the current object and access properties
};

// Calling the methods
console.log(person.greeting); // Prints the function definition (reference to the function)
console.log(person.greeting()); // Executes the 'greeting' method and prints "Hello There"

console.log(person.greetingtwo()); // Executes the 'greetingtwo' method and prints "Hello John Cena"
