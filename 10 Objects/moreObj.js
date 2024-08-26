// Singleton Object using Object() constructor
// const tinderUser = new Object()

// Non-Singleton Object using object literal syntax
const tinderUser = {};

tinderUser.id = "124abc";
tinderUser.name = "Abhi";
tinderUser.age = 25;

// console.log(tinderUser);

const regUser = {
  email: "akt1947@gmail.com",
  fullname: {
      // Nested object
    userFullName: {
      // Nested within the 'fullname' object
      firstName: "Abhishek", // Property inside 'userFullName'
      lastName: "Kumar", // Another property inside 'userFullName'
    },
  },
};

// console.log(regUser); 
// console.log(regUser.fullname); 
// console.log(regUser.fullname.userFullName); 
// console.log(regUser.fullname.userFullName.firstName); 


const obj1 = {
  name: "Abhi",
  age: 23,
};
const obj2 = {
  0: "raj",
  5: 20,
};

// Merging objects without creating a new object
// const obj3 = {obj1,obj2} // This creates an object with two properties 'obj1' and 'obj2'
// console.log(obj3);

// Merging objects with Object.assign()
// const obj4 = Object.assign(obj1, obj2); // Merges obj2 into obj1, modifies obj1
// const obj4 = Object.assign({}, obj1, obj2); // Creates a new object and merges obj1 and obj2 into it
// console.log(obj4);

// Merging objects with the spread operator (preferred)
// const obj5 = { ...obj1, ...obj2 }; // Creates a new object with properties from both obj1 and obj2
// console.log(obj5);

// Array of objects example
const user = [
  {
    id: 1,
    name: "Abhi",
  },
  {
    id: 2,
    name: "Raj",
  },
  {
    id: 3,
    name: "Rahul",
  },
];

// Accessing properties of objects in an array
// console.log(user[0].name); // Output: "Abhi" (name of the first object in the array)
// console.log(user[0].id); // Output: 1 (id of the first object in the array)

// Working with Object methods
console.log(Object.keys(tinderUser)); // Output: Array of keys in the 'tinderUser' object
console.log(Object.values(tinderUser)); // Output: Array of values in the 'tinderUser' object
console.log(Object.entries(tinderUser)); // Output: Array of key-value pairs in the 'tinderUser' object

// Checking for property existence using hasOwnProperty
console.log(tinderUser.hasOwnProperty("name")); // Output: true (the 'name' property exists)
console.log(tinderUser.hasOwnProperty("money")); // Output: false (the 'money' property does not exist)
