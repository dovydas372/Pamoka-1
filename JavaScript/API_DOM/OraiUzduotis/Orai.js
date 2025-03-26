const APIKEY = "C7z0uZm0kry5t8Gk0GsNx1IwCZI1NQy7c7CV2zgjkt2hIhxCUDNTpaPR";
const oruPaieskosLaukas = document.querySelector("form");
let miestoPavadinimas = oruPaieskosLaukas.elements["miestas"].value;

const gautiIrSuvestiOraiData = async (paieskosLaukoData) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${paieskosLaukoData}&units=metric&appid=0aa8679f7f4cfb9af5b36c2935c1a05d`
    );
    console.log(res);
    const visasDataMasyvas = res.data;
    console.log(visasDataMasyvas);

    const miestas = visasDataMasyvas.name;
    const temperatura = visasDataMasyvas.main.temp;
    const oras = visasDataMasyvas.weather[0].description;

    console.log(miestas, oras, temperatura);
    let miestoLaukas = document.querySelector(".miestas");
    let temperaturosLaukas = document.querySelector(".temperatura");
    let oroLaukas = document.querySelector(".oras");

    miestoLaukas.innerText = miestas;
    temperaturosLaukas.innerText = `${Math.round(temperatura)}  °C`;
    oroLaukas.innerText = oras;

    pakeistiPaveiksleli(miestas);
  } catch (error) {}
};

const pakeistiPaveiksleli = async (miestas) => {
  const paveikslelis = await axios.get(
    `https://api.pexels.com/v1/search?query=${miestas}`,
    {
      headers: {
        Authorization: APIKEY,
      },
    }
  );
  const miestoPaveiklsoSRC = paveikslelis.data.photos[0].src.original;
  document.body.style.backgroundImage = `url(${miestoPaveiklsoSRC})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
};

oruPaieskosLaukas.addEventListener("submit", (e) => {
  e.preventDefault();
  let miestoPavadinimas = oruPaieskosLaukas.elements["miestas"].value;
  gautiIrSuvestiOraiData(miestoPavadinimas);
});
