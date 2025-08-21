const forma = document.getElementById("forma");
const laukelisVardas = document.getElementById("vardas");
const laukelisPastas = document.getElementById("elPastas");
const laukelisZinute = document.getElementById("zinute");

forma.addEventListener("submit", (e) => {
  e.preventDefault();
  const ivestasVardas = laukelisVardas.value;
  const ivestasPastas = laukelisPastas.value;
  const ivestaZinute = laukelisZinute.value;

  fetch("http://localhost:3000/siusti-zinute", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      vardas: ivestasVardas,
      pastas: ivestasPastas,
      zinute: ivestaZinute,
    }),
  });
});
