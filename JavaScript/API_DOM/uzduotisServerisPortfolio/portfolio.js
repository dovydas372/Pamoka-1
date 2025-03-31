// Užduotis: padaryti portfolio puslapį, kur galima būtų pamatyti:
// Kokie įgyvendinti projektai
// Kokia darbo patirtis
// Koks išsilavinimas
// Kokie pabaigti kursai
// Kitaip sakant, online CV.

const projektaiUrl = "http://localhost:7788/projects";
const issilavinimasUrl = "http://localhost:7788/education";

const projektai = async (url) => {
  const projektai = await axios.get(url);
  let projektuData = projektai.data;
  return projektuData;
};

function sukurtiDivMasyvaSuInfo() {
  projektai(projektaiUrl).then((e) => {
    let divMasyvas = [];
    e.forEach((element) => {
      const div = document.createElement("div");
      div.innerHTML = `<h2>${element.name}</h2>
      <p>Aprašymas: ${element.description}</p>
      <p>Naudotos programavimo kalbos: ${element.technologies.join(",")}</p>
      <p>${element.description}</p>
      `;
      document.body.appendChild(div);
      divMasyvas.push(div);
      console.log(element);
    });
    console.log(divMasyvas);
  });
}

sukurtiDivMasyvaSuInfo();
