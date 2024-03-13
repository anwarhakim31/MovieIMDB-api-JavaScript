///////HTML Fragment/////////

// const mhs = {
//   nama: "anwarhakim",
//   npm: 202043501579,
// };

// const c = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <h3>${mhs.npm}</h3>
// </div>`;

// document.body.innerHTML = c;

//////looping///////////////

// const mhs = [
//   {
//     nama: "anwar hakim",
//     umur: 18,
//   },
//   {
//     nama: "Ulfah Sisi",
//     umur: 20,
//   },
// ];

// const e = `<div class="mhs">
//     ${mhs
//       .map(
//         (m) =>
//           `<ul>
//         <li>${m.nama}</li>
//         <li>${m.umur}</li>
//       </ul>`
//       )
//       .join("")}
// </div>`;

//////////////////conditional////////////////////

// const lagu = [
//   {
//     penyanyi: "isayana",
//     judul: "tetap dalam jiwa",
//     feat: "anwar",
//   },
//   {
//     penyanyi: "isayana",
//     judul: "tetap dalam jiwa",
//   },
//   {
//     penyanyi: "isayana",
//     judul: "tetap dalam jiwa",
//   },
// ];

// const e = `<div class="lagu">
// ${lagu
//   .map(
//     (l) =>
//       `<ul>
//   <li>
//     ${l.penyanyi}
//   </li>
//   <li>
//     ///////////////////ternary///////////////////////
//     ${l.judul} ${l.feat ? `${l.feat}` : ""}
//   </li>
//   </ul>`
//   )
//   .join("")}

// </div>`;

//////////////////nested/////////////////////////

const mhs = {
  nama: "anwar hakim",
  semester: 8,
  matakuliah: ["Rekayasa Web", "Pemrograman Berorientasi object", "Analisis"],
};

function cetakmatakuliah(matakuliah) {
  return `
  <ol>
      ${matakuliah.map((mk) => `<li>${mk}</li>`).join("")}
  </ol>
  `;
}

const e = `<div class="mhs">
  <h1>${mhs.nama}</h1>
  <p>semester : ${mhs.semester}</p>
  <p>mata kuliah : </p>
  ${cetakmatakuliah(mhs.matakuliah)}
  </div>`;

document.body.innerHTML = e;
