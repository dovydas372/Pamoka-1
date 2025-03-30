// korteles.sort(() => 0.5 - Math.random());
let i = 0;
let tikrinimoMasyvas = [];
let paspaudimoMasyvas = [];
const APIKEY = "C7z0uZm0kry5t8Gk0GsNx1IwCZI1NQy7c7CV2zgjkt2hIhxCUDNTpaPR";

sumaisytiKortas();

const pakeistiPaveiksleli = async (kortelesPav) => {
  const paveikslelis = await axios.get(
    `https://api.pexels.com/v1/search?query=${kortelesPav}`,
    {
      headers: {
        Authorization: APIKEY,
      },
    }
  );
  const miestoPaveiklsoSRC = paveikslelis.data.photos[0].src.medium;
  console.log(miestoPaveiklsoSRC);
  return miestoPaveiklsoSRC;
};

const korteliuMasyvas = document.querySelectorAll(".korteliuLaukas > div");

korteliuMasyvas.forEach((kortele, indeksas) => {
  kortele.addEventListener("click", () => {
    atverstiKortele(kortele);
    console.log(kortele);
  });
});

function atverstiKortele(kortele) {
  kortele.querySelector("img").style.display = "";
  tikrinimoMasyvas.push(kortele.querySelector("img").src);
  paspaudimoMasyvas.push(kortele);
  if (tikrinimoMasyvas.length === 3) {
    tikrinimoMasyvas = [];
    tikrinimoMasyvas.push(kortele.querySelector("img").src);
    paspaudimoMasyvas = [];
    paspaudimoMasyvas.push(kortele);
  }
  if (tikrinimoMasyvas[0] === tikrinimoMasyvas[1]) {
    pridetiRezultata();
    console.log("jūs gavote tašką");
    paspaudimoMasyvas.forEach((divas) => {
      setTimeout(() => {
        divas.style.display = "none";
      }, 500);
    });
  } else {
    console.log("Neatspėjote");
  }
  console.log(tikrinimoMasyvas);
  setTimeout(() => {
    kortele.querySelector("img").style.display = "none";
  }, 2000);
}

pakeistiPaveiksleli("eifel");

function pridetiRezultata() {
  i++;
  let rezultatas = document.getElementById("rezultatas");
  rezultatas.innerHTML = i;
}

function sumaisytiKortas() {
  let imgElements = document.querySelectorAll("img");
  let srcMasyvas = Array.from(imgElements, (img) => img.src);

  srcMasyvas.sort(() => 0.5 - Math.random());
  imgElements.forEach((img, index) => {
    img.src = srcMasyvas[index];
  });
}
