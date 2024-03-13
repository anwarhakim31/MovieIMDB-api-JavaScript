////////destruction return value

// function perjumlahanperkalian(a, b) {
//   return [a + b, a * b];
// }

// const [jumlah, kali] = perjumlahanperkalian(3, 5);

// console.log(jumlah);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// //bebabas meletekan nama variabel ////////////
// const { bagi, tambah, kurang, kali } = kalkulasi(2, 4);

// console.log(kali);

///////////////destruction paramater//////////////

const mhs = {
  nama: "anwar hakim",
  kelas: "R8T",
  nilai: {
    tugas: 80,
    uas: 90,
    uts: 100,
  },
};

function cetakmhs({ nama, kelas, nilai: { tugas, uas, uts } }) {
  return `halo ${nama}, kelas ${kelas} dan tugasnya ${tugas}`;
}

const mhs1 = cetakmhs(mhs);

console.log(mhs1);
