function setUsername(username) {
  this.username = username;
  console.log("Hello Jiiii");
}

function createUser(username, email, password) {
  setUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const user = new createUser("akshay", "akshay@gmail.com", "1197");
console.log(user);
