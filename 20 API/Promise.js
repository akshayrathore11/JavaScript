// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Async task is complete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise is resolved");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task is complete new");
//   }, 1000);
// }).then(function () {
//   console.log("Promise is resolved new");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "akshay", email: "akshayrathore1197@gmail.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ name: "akshay", password: "123" });
//     } else {
//       reject("Error");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     console.log(user.name);
//     return user.name;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => console.log("Finally Done"));



