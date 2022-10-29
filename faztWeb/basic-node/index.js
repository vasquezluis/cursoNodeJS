let username = "Luis";
let age = 23;
let hasHobbies = false;
let pints = [10, 20, 30];
let user = {
  name: "Ryan",
  lastname: "Ray",
};
const PI = 3.1415926;

// console.log(username);
// console.log(age);
// console.log(user);

if (age >= 18) {
  console.log("Eres un adulto");
} else {
  console.log("Eres un ni;o");
}

const names = ["joe", "jhon", "marco"];

names.forEach((name) => console.log(name));

function showUserInfo(username, userage) {
  return `The username is ${username}, the user is ${userage} years old`;
}

console.log(showUserInfo("Joe", 30));

const showUsersInfo = (userName, userAge) => {
  `The username is ${userName}, the user is ${userAge} years old`;
};

console.log(showUserInfo("Luis", 23));
