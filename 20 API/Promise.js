// promise take a function

// creation of promise
// here we store promise into a variable
const promiseOne = new Promise(function (resolve, reject) {
  // do an async task
  // db calls,network
  setTimeout(() => {
    console.log("Async task is complete");
    // to connect it with then call resolve ()
    resolve();
  }, 1000);
});
// consumption of promise
promiseOne.then(function () {
  //then is directly connected to resolve
  console.log("Promise is resolved");
});

// without storing into variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is complete new");
  }, 1000);
}).then(function () {
  console.log("Promise is resolved new");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "akshay", email: "akrt1947@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ name: "akshay", password: "123" });
    } else {
      reject("Error");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("Finally Done"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ name: "rathore", password: "456" });
    } else {
      reject("Error");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getUser() {
//   try {
//     const response = await fetch(
//       "https://api.github.com/users/akshayrathore1197"
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUser();

fetch("https://api.github.com/users/akshayrathore1197")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => console.log(e));
