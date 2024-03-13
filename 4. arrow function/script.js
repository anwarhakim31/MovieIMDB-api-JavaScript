// const tampildata = function (nama) {
//   return `halo nama saya ${nama}`;
// };

// console.log(tampildata("hakim"));

// const tampildata = (nama) => {
//   return `halo nama saya ${nama}`;
// };

// document.body.innerHTML = tampildata("hakim");

// const tampildata = (nama, waktu) => {
//   return `nama: ${nama} , waktu:${waktu}`;
// };

// console.log(tampildata("hakim", "17:00"));

let mahasiswa = ["anwar hakim", "ulfah sisi", "iqbal yasianto"];

// let jumlahhuruf = mahasiswa.map((nama) => nama.length);

// console.log(jumlahhuruf);

let jumlahhuruf = mahasiswa.map((nama) => ({
  nama: nama,
  jmlhuruf: nama.length,
}));

console.table(jumlahhuruf);
