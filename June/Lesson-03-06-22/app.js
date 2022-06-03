// let time = 50;

// switch (time) {
//   case 5:
//     console.log("Good Morning");
//     break;
//   case 12:
//     console.log("Good Day");
//     break;
//   case 18:
//     console.log("Good Evening");
//     break;
//   default:
//     console.log("Good Night");
// }

// let hello = "hello";

// try {
//   // console.log("Начало блока try");
//   console.log(hello0);
// } catch (e) {
//   console.log(e);
// }

// console.log("Потом код продолжит выполнение...");

let user = { age: 30 };

// console.log(Object.keys(user));

try {
  if (!Object.keys(user).includes("name")) {
    throw new ReferenceError(
      "Что-то пошло не так, попробуйте обновить браузер!"
    );
  }

  document.write(user.name);
} catch (e) {
  document.write(e.message);
  // console.log(e);
}
