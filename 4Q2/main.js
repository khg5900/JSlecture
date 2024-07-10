const user = {};
user.name = "jhon";
user.surname = "Smith";
console.log(user.name);
user.name = "Peter";
console.log(user.name);
delete user.name;
console.log(user);
