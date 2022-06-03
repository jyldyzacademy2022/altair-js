// let potatoes = 10;

// while (potatoes > 0) {
//   potatoes--;
//   console.log(`Potatoes left: ${potatoes}`);
// }

// let i = 0;

// while (i < 10) {
//   i++;
//   console.log(i);
// }

// let users = ["Masha", "Misha", "Akmat", "Pete"]; // 4

// let i = 0;
// while (i < users.length) {
//   console.log(`Salam ${users[i]}`);
//   i++;
// }

// 2 * 1 = 2
// 2 * 2 = 4

// let i = 1;
// while (i < 10) {
//   let j = 1;
//   while (j < 11) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// let users = ["Masha", "Misha", "Akmat", "Pete"]; // 4

// for (let i = 0; i < users.length; i++) {
//   console.log(`Salam ${users[i]}`);
// }

// for (let user in users) {
//   console.log(`Salam ${users[user]}`);
// }

// for (user of users) {
//   console.log(`Salam ${user}`);
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 3);

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) break;
//   console.log(i);

//   // console.log(i);

//   // if (i % 2 === 1) continue;
//   // console.log(i);
// }

function peelPotatoes(potatoes) {
  console.log(`Potatoes left: ${potatoes}`);
  potatoes--;
  if (potatoes > 0) {
    peelPotatoes(potatoes);
  }
}

peelPotatoes(5);
