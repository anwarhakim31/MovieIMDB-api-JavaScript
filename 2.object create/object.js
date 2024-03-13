// //object literal

// let mhs1 = {

//     nama:'anwar hakim',
//     uang:1000,
//     saku : function (jml){
//         this.uang+=jml;
//         console.log(`halo ${this.nama}, uangmu telah bertambah`)
//     }

// }

// let mhs2 = {
//     nama:'sandika galih',
//     uang: 2000,
//     saku: function(jml){
//         this.uang+=jml;
//         console.log(`halo ${this.nama}, uangmu telah bertambah`);
//     }
// }

//function declaration menggunakan object create

//object

const methodmahasiswa = {
  saku: function (jml) {
    this.uang += jml;
    console.log(`halo ${this.nama}, uangmu telah bertambah`);
  },

  jajan: function (jmlk) {
    this.uang -= jmlk;
    console.log(`halo ${this.nama}, uangmu telah berkurang`);
  },
};

function Mahasiswa(nama, uang) {
  let mahasiswa = Object.create(methodmahasiswa);

  mahasiswa.nama = nama;
  mahasiswa.uang = uang;

  return mahasiswa;
}

let mhs1 = Mahasiswa("ulfah", 2000);

// //function contruction

// function mhs(nama,uang){

//     this.nama = nama;
//     this.uang = uang;

//     this.saku = function (jml){
//         this.uang+=jml;
//         console.log(`halo ${this.nama}, uangmu telah bertmbah`);
//     }

//     this.jajan = function (jmlk){
//         this.uang-=jmlk;
//         console.log(`halo ${this.nama}, uangmu telah berkurang`)
//     }
// }

// let mhs02 = new mhs('anwar',20000)
