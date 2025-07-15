const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ name: "Akshay", password: "*************" });
    } else {
      reject("Hello There you have a error");
    }
  }, 1000);
});

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive();

(async () => {
  try {
    const res = await promiseFive;
    console.log(res);
  } catch (error) {
    console.log("Got Error,",error);
  }
})();
