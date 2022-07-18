const slider = document.getElementById("slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let texts = ["text 1", "text 2", "text 3"];

let counter = 0;
slider.innerHTML = `<h3>${texts[counter]}</h3>`;

next.addEventListener("click", function () {
  counter++;
  if (counter === texts.length) {
    counter = 0;
  }
  slider.innerHTML = `<h3>${texts[counter]}</h3>`;
});

prev.addEventListener("click", function () {
  counter--;
  if (counter == -1) {
    counter = texts[texts.length - 1];
  }
  slider.innerHTML = `<h3>${texts[counter]}</h3>`;
});

// setInterval(function () {
//   slider.innerHTML = `<img src="${texts[counter]}">`;
//   counter++;

//   if (counter === texts.length) {
//     counter = 0;
//   }
// }, 3000);
