const angka = [-1, 3, -5, -2, -3, 5, 6, 7, 2];

//////////////////perulangan//////////////////

// const newangka = [];

// //mencari angka =>3

// for (let a = 0; a < angka.length; a++) {
//   if (angka[a] == 3) {
//     newangka.push(angka[a]);
//   }
// }

// console.log(newangka);

////////////////////filter////////////////////

// const newangka = angka.filter((a) => a >= 3);
// console.log(newangka);

////////////////////map//////////////////////

// const newangka = angka.map((a) => a * 2);

// console.log(newangka);

//////////////////reduce////////////////////

const newangka = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(newangka);
