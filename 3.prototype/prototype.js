// const methodmahasiswa = {
//   saku: function (jml) {
//     this.uang += jml;
//     console.log(`halo ${this.nama}, uangmu telah bertambah`);
//   },

//   jajan: function (jmlk) {
//     this.uang -= jmlk;
//     console.log(`halo ${this.nama}, uangmu telah berkurang ${jmlk}`);
//   },
// };

// function mahasiswa(nama, uang) {
//   let mahasiswa = Object.create(methodmahasiswa);

//   mahasiswa.nama = nama;
//   mahasiswa.uang = uang;

//   return mahasiswa;
// }

// let mhs1 = Mahasiswa("ulfah", 2000);

function Mahasiswa(nama, uang) {
  this.nama = nama;
  this.uang = uang;
}

Mahasiswa.prototype.saku = function (jml) {
  this.uang += jml;
  return `halo ${this.nama} uang mu telah bertambah ${jml}`;
};

Mahasiswa.prototype.jajan = function (jmlk) {
  this.uang -= jmlk;
  return `halo ${this.nama} uang mu telah berkurang ${jmlk}`;
};

let mhs1 = new Mahasiswa("hakim", 1000);
