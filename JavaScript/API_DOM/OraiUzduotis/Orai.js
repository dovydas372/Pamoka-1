const oruPaieskosLaukas = document.querySelector("input");

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
  } catch (error) {
    alert("Blogai ivestas miesto pavadinimas");
  }
};
// oruPaieskosLaukas.addEventListener("submit", (e) => {
//   e.preventDefault();
//   renderPosts2(searchForm.term.value.trim());
// });

gautiIrSuvestiOraiData();
