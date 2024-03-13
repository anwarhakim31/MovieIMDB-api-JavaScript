///////////////////////destruction array///////////////////////////////

////skip item

// const data = ["hakim", 20, "R7T", "202043501579"];

// const [, umur, kelas, npm] = data;

// console.log(nama);

/////swap item
// let awal = "anwar";
// let akhir = "hakim";

// console.log(awal);
// console.log(akhir);
// [awal, akhir] = [akhir, awal];
// console.log(awal);
// console.log(akhir);

////return value pada function

// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();

// console.log(b);

////rest parameter
// const [x, y, ...values] = [1, 2, 3, 4, 5, 6];

// console.log(x);
// console.log(values);

////////////////////////destruction object/////////////////////////////

// const mhs = {
//   nama: "anwar hakim",
//   kelas: "R7T",
//   npm: "2020243501579",
// };

//=harus sama dengan

// const { nama, kelas, npm } = mhs;

// console.log(nama);
// console.log(kelas);
// console.log(npm);

////member nilai default + assign ke variabel baru

// const mhs = {
//   nama: "anwar hakim",
//   kelas: "R7T",
//   NPM: "202043501579",
// };

// const { nama: n, umur: u, NPM: p = "202043501213" } = mhs;

// console.log(p);

////rest paramater

// const mhs = {
//   nama: "anwar hakim",
//   kelas: "R7T",
//   NPM: "20204350",
// };

// const { nama, ...values } = mhs;

// console.log(values);

const mhs = {
  id: 3223,
  nama: "anwar hakim",
  kelas: "R7T",
  NPM: "202043501579",
};

function GetID({ id }) {
  return id;
}

const mhs1 = GetID(mhs);

console.log(mhs1);
