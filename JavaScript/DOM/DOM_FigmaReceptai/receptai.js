const sliderEl = document.querySelector("#range");
const sliderValue = document.querySelector(".value");
let amount = 1;
sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value;
  amount = event.target.value;
  sliderValue.textContent = tempSliderValue;

  const progress = (tempSliderValue / sliderEl.max) * 100;

  sliderEl.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;

  displayRecipe();
});

// <----slider

const receptai = [
  [
    { pavadinimas: "Vištiena", kiekis: 150, matas: "g" },
    { pavadinimas: "Brokoliai", kiekis: 100, matas: "g" },
    { pavadinimas: "Pomidorai", kiekis: 50, matas: "g" },
    { pavadinimas: "Ryžiai", kiekis: 100, matas: "g" },
  ],
  [
    { pavadinimas: "Miltai", kiekis: 250, matas: "g" },
    { pavadinimas: "Kiaušiniai", kiekis: 1, matas: "vnt" },
    { pavadinimas: "Mėlynės", kiekis: 100, matas: "g" },
    { pavadinimas: "Cukrus", kiekis: 10, matas: "g" },
  ],
  [
    { pavadinimas: "Mėsa", kiekis: 250, matas: "g" },
    { pavadinimas: "Makaronai", kiekis: 300, matas: "g" },
    { pavadinimas: "Sūris", kiekis: 200, matas: "g" },
  ],
];
let pasirinktasReceptas;
document.querySelectorAll(".card").forEach(function (receptas, index) {
  receptas.onclick = function () {
    pasirinktasReceptas = receptai[index];
    displayRecipe();
  };
});

function displayRecipe() {
  let receptoTextas = "";
  for (ingredient of pasirinktasReceptas) {
    receptoTextas += `${ingredient.pavadinimas}: <strong>${
      ingredient.kiekis * amount
    } ${ingredient.matas} </strong> <br>`;
  }

  document.getElementById("Receptas").innerHTML = receptoTextas;
}
