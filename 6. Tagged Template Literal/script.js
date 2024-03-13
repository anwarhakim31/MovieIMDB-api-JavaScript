const nama = "anwar hakim";
const umur = 23;

function trys(string, ...values) {
  //   result = "";

  //   string.forEach((str, i) => {
  //     result += `${str}${values[i] || ""}`;
  //   });
  //   return result;

  return string.reduce(
    (result, str, i) => `${result}${str} ${values[i] || ""}`,
    ""
  );
}

const str = trys`halo nama saya ${nama},saya ${umur} tahun`;

document.body.innerHTML = str;
