// const title = document.querySelector("h1");
// const link = document.querySelector("a");

// title.innerText = "Hello";
// link.innerText = "Facebook";

// const header = document.querySelector(".header");
// header.innerHTML = "<strong>Hello World</strong>";

// console.log(title.innerHTML);

// console.log(link.getAttribute("href"));

// link.setAttribute("href", "https://fb.com");

// link.setAttribute("target", "_blank");

// const img = document.querySelector("img");
// img.setAttribute(
//   "src",
//   "https://images.unsplash.com/photo-1654868739497-ee031a3d7088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
// );

// img.setAttribute("alt", "hello");

// const link = document.querySelector("a");

// if (link.getAttribute("href") === "https://google.com") {
//   link.innerText = "Google";
// } else if (link.getAttribute("href") === "https://fb.com") {
//   link.innerText = "Facebook";
// } else {
//   link.innerText = "Link";
// }

// const classForLink = "active";
// console.log(link.className);

// link.className = `btn ${classForLink}`;

// const link = document.querySelector(".btn");

// link.style.color = "red";
// link.style.textDecoration = "none";
// link.style.textTransform = "uppercase";

// const label = document.querySelector("label");
// console.log(label.htmlFor);

// const h1 = document.querySelector("h1");
// const dataTitle = h1.dataset.title;

// h1.innerText = dataTitle;
// console.log();

// const menuToggler = document.querySelector("[data-toggle='menuBtn']");

// console.log(menuToggler.innerText);

// const items = document.querySelectorAll("li");

// const items = document.getElementsByTagName("li");

// console.log(items);

// function multiply(num) {
//   return num * num;
// }

// function divide(num) {
//   return num / 2;
// }

// function takeArrAndDoSmth(arr, instructions) {
//   const output = [];

//   for (let i = 0; i < arr.length; i++) {
//     output.push(instructions(arr[i]));
//   }

//   return output;
// }

// const myArr = [10, 20, 30, 40, 50];

// const result = takeArrAndDoSmth(myArr, multiply);
// const result2 = takeArrAndDoSmth(myArr, divide);

// console.log(result);
// console.log(result2);

const items = document.getElementsByTagName("li");

// items.forEach(function (item) {
//   item.style.color = "red";
// });

for (let element of items) {
  element.style.color = "blue";
}

console.log(items);
