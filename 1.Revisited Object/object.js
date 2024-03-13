//object literal

let mhs1 = {
  nama: "anwar hakim",
  uang: 1000,
  saku: function (jml) {
    this.uang += jml;
    console.log(`halo ${this.nama}, uangmu telah bertambah`);
  },
};

let mhs2 = {
  nama: "sandika galih",
  uang: 2000,
  saku: function (jml) {
    this.uang += jml;
    console.log(`halo ${this.nama}, uangmu telah bertambah`);
  },
};

//function declaration

function Mahasiswa(nama, uang) {
  let mahasiswa = {};

  mahasiswa.nama = nama;
  mahasiswa.uang = uang;

  mahasiswa.saku = function (jml) {
    this.uang += jml;
    console.log(`halo ${this.nama}, uangmu telah bertambah`);
  };
  return mahasiswa;
}

let mhs01 = Mahasiswa("Ulfah", 20000);

//function contruction

function mhs(nama, uang) {
  this.nama = nama;
  this.uang = uang;

  this.saku = function (jml) {
    this.uang += jml;
    console.log(`halo ${this.nama}, uangmu telah bertmbah`);
  };

  this.jajan = function (jmlk) {
    this.uang -= jmlk;
    console.log(`halo ${this.nama}, uangmu telah berkurang`);
  };
}

let mhs02 = new mhs("anwar", 20000);
