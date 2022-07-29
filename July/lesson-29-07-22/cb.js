const products = [
  {
    title: "Prod1",
    body: "This is prod1",
  },
  {
    title: "Prod2",
    body: "This is prod2",
  },
];

// function createProd(product, callback) {
//   setTimeout(() => {
//     products.push(product);
//     callback();
//   }, 2000);
// }

// function getProds() {
//   setTimeout(() => {
//     let output = "";

//     products.forEach((product) => {
//       output += `<li>${product.title}</li>`;

//       document.querySelector("#products").innerHTML = output;
//     });
//   }, 1000);
// }

// createProd({ title: "Prod3", body: "This is prod3" }, getProds);

// function createProd(product) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       products.push(product);

//       const err = false;

//       if (!err) {
//         resolve();
//       } else {
//         reject("Error: Something is wrong");
//       }
//     }, 2000);
//   });
// }

// function getProds() {
//   setTimeout(() => {
//     let output = "";

//     products.forEach((product) => {
//       output += `<li>${product.title}</li>`;

//       document.querySelector("#products").innerHTML = output;
//     });
//   }, 1000);
// }

// createProd({ title: "Prod3", body: "This is prod3" })
//   .then(getProds)
//   .catch((err) => {
//     document.write(err);
//   });
