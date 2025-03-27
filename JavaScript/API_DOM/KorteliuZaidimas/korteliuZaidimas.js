korteles.sort(() => 0.5 - Math.random());

const APIKEY = "C7z0uZm0kry5t8Gk0GsNx1IwCZI1NQy7c7CV2zgjkt2hIhxCUDNTpaPR";

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
};

const korteliuMasyvas = document.querySelectorAll(".korteliuLaukas > div");

korteliuMasyvas.forEach((kortele, indeksas) => {
  console.log("object");
  kortele.addEventListener("click", () => {
    console.log(indeksas);
  });
});
