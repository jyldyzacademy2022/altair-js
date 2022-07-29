document.querySelector("#get-text").addEventListener("click", getText);

function getText() {
  fetch("test.txt")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      document.querySelector(".output").innerHTML = data;
    })
    .catch(() => {
      console.log(err);
    });
}

document.querySelector("#get-json").addEventListener("click", getJson);

function getJson() {
  fetch("users.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let output = "";

      data.forEach((user) => {
        output += `<h3>${user.name}</h3>`;
      });
      document.querySelector(".output").innerHTML = output;
    })
    .catch(() => console.log(err));
}

document.querySelector("#get-api").addEventListener("click", getApi);

function getApi() {
  fetch("https://api.github.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let output = "";

      data.forEach((user) => {
        output += `
          <li>
            <h4>${user.login}</h4>
            <img src=${user.avatar_url}>
          </li>`;
      });
      document.querySelector("#users").innerHTML = output;
    });
  // .catch(() => console.log(err));
}

/*
  REST -> representational state transfer

  HTTP

  GET -> get data
  POST -> submit data
  PUT -> update data
  DELETE -> delete data
  PATCH -> partial updata data
  HEADER -> get headers

  API endpoints
  GET -> https://hello.com/api/products
  POST -> https://hello.com/api/products

  GET -> https://hello.com/api/products/3
  PUT -> https://hello.com/api/products/3
  DELETe -> https://hello.com/api/products/3


*/
