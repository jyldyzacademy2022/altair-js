// Array
// let users = [10, 80, 1, 90, 100, 20, 2];
// console.log(users.includes("john"));
// console.log(users.sort());
// users[3] = "Masha";
// users[5] = "Tashmat";
// users[0] = "Akmat";
// users.push("Masha");
// users.push("Tashmat");
// users.push("Akmat");
// console.log(users);
// users.pop();
// console.log(users);
// let deletedUser = users.shift();
// console.log("Good Bye! " + deletedUser);

// let myArr = Array.from("Hello");
// console.log(myArr);

// console.log(Array.isArray(myArr));

// let users = ["Akmat", "Tashmat", "Vasya", "Pete"];

// // без деструктурирования
// // let firstUser = users[0];
// // let secondUser = users[1];
// // let thirdUser = users[2];

// let [firstUser, secondUser, thirdUser] = users;

// console.log(firstUser, secondUser, thirdUser);

// let user = {
//   name: "John",
//   age: 35,
// };

// let userName = user.name;
// let userAge = user.age;

// let { name, age } = user;

// console.log(name, age);

// let parts = ["shoulders", "knees"];
// let lyrics = ["head", ...parts, "and", "toes"];
// console.log(lyrics);

// let users = ["Akmat", "Tashmat", "Vasya", "Pete", "Masha", "Sadyr"];
// let [firstUser, secondUser, thirdUser, ...others] = users;
// console.log(firstUser, secondUser, thirdUser);
// console.log(others);

let user = {
  name: "John",
  age: 35,
  isMarried: true,
  car: "Mers",
  friends: ["Masha", "Pete"],
};

let { name, age, friends, ...otherKeys } = user;

console.log(name, age, friends);
console.log(otherKeys);

let posts = [
  {
    id: 1,
    postTitle: "Hello",
    published: "May 20",
  },
  {
    id: 2,
    postTitle: "Hello 2",
    published: "May 30",
  },
];

console.log(posts);

let imgLinks = [
  "https://cdn.pixabay.com/photo/2022/05/10/20/52/calligraphy-7188024_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/05/17/17/55/zebra-7203335_960_720.jpg",
];

const img = document.querySelector(".hero .img");
img.src = imgLinks[1];
