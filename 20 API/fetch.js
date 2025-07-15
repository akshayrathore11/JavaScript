// (async function getUser() {
//   try {
//     const response = await fetch(
//       "https://api.github.com/users/akshayrathore11"
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// (async () => {
//   try {
//     const res = await fetch("https://api.github.com/users/akshayrathore11");
//     const user = await res.json();
//     console.log(user);
    
//   } catch (err) {
//     console("Something went wrong,", err);
//   }
// })();


fetch("https://api.github.com/users/akshayrathore11")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => console.log(e));




