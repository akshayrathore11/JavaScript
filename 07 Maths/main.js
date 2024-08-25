

// Returns the absolute value of -47, which is 47.
console.log(Math.abs(-47)); 

// Rounds 4.6 to the nearest integer, which is 5.
console.log(Math.round(4.6));

// Rounds 4.2 up to the nearest integer, which is 5.
console.log(Math.ceil(4.2));

// Rounds 4.2 down to the nearest integer, which is 4.
console.log(Math.floor(4.2));

// Returns the smallest number among the arguments, which is 4.
console.log(Math.min(4, 6, 834, 7));

// Returns the largest number among the arguments, which is 834.
console.log(Math.max(4, 6, 834, 7));

// Generates a random decimal number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random()); 

// Generates a random decimal number between 0 (inclusive) and 10 (exclusive).
console.log(Math.random() * 10); 

// Generates a random decimal number between 1 (inclusive) and 11 (exclusive).
console.log(Math.random() * 10 + 1); 

// Generates another random decimal number between 1 (inclusive) and 11 (exclusive).
console.log(Math.random() * 10 + 1);

// Generates a random integer between 1 and 10 (both inclusive).
console.log(Math.floor(Math.random() * 10) + 1); 

// Define minimum and maximum values for the range.
const min = 10;
const max = 20;

// Generates a random integer between 10 and 20 (both inclusive).
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
