//ambil semua elemen video
//mengubah menjadi array
const video = Array.from(document.querySelectorAll("[data-duration]"));

//pilih hanya 'JAVASCRIPT LANJUTAN'

let jslanjut = video
  .filter((v) => v.textContent.includes("JAVASCRIPT LANJUTAN"))

  //ambil durasi masing2 vidio

  .map((item) => item.dataset.duration)

  //ubah durasi menjadi float, ubah menit menjadi detik

  .map((waktu) => {
    //10:30-> [10,30] split
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  //
  .reduce((total, detik) => total + detik, 0);

//ubah formatnya menjadi jam menit detik

const jam = Math.floor(jslanjut / 3600);

jslanjut = jslanjut - jam * 3600;

const menit = Math.floor(jslanjut / 60);

const detik = jslanjut - menit * 60;

//simpan dom

const pdurasi = document.querySelector(".total-durasi");

pdurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

const jmlvideo = video.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;
const pjmlvideo = document.querySelector(".jumlah-video");

pjmlvideo.textContent = jmlvideo;
