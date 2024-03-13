//   const ipa = ["anwar hakim", "ulfah sisi"];
//   const ips = ["iqbal yasianto", "sriyatin"];

//   const join = [...ipa, "cipuy", ...ips];

//   console.log(join);

/////mencopy array
// const ipa = ["anwar hakim", "ulfah sisi"];

// const copy = [...ipa];
// copy[0] = "gigi";

// console.log(copy);

//////////////////////////////mengambil isi pada Li di html //////////////////////////

// const Mhsli = document.querySelectorAll("li");

/////////cara 1//////////////
// const mhs = [];

// for (let i = 0; i < Mhsli.length; i++) {
//   mhs.push(Mhsli[i].textContent);
// }

// console.log(mhs.join(" "));

////////cara 2//////////////
// const arraybaru = [...Mhsli].map((m) => m.textContent);

// console.log(arraybaru);

// const nama = document.querySelector(".nama");
// const huruf = [...nama.textContent];

// const arraybaru = huruf.map((m) => `<span>${m}</span>`);

// console.log(arraybaru);

// nama.innerHTML = arraybaru.join(" ");
