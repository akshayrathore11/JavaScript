function one() {
  console.log(`DB connected`);
}

one();

// IIFE (Immediately Invoked Function Expression) with a named function
(function two() {
  console.log(`IIFE`);
})();

// Arrow function IIFE
(() => {
  console.log(`IIFE 2 `);
})();

// Arrow function IIFE with a parameter
((name) => {
  console.log(`IIFE 3 ${name}`);
})("Akshay");


/*remember to put semi-colon after IIFE when writing two IIFE consecutively */