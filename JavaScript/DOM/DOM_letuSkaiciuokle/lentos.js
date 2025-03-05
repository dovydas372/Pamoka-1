let lentosIlgisSliderValue = document.getElementById("customRange1");
let lentosIlgisSliderValueIšspausdinti = document.getElementById("lentosIlgis");
let ilgis = 0;
let plotis = 0;
let gylis = 0;
let kiekis = 0;
let kainaM = 10;
let skaic = 0;
lentosIlgisSliderValue.oninput = function () {
  lentosIlgisSliderValueIšspausdinti.innerText = `${this.value} m`;
  ilgis = this.value;
};

document.getElementById("plotis").oninput = function () {
  document.getElementById("lentosPlotis").innerText = `${this.value} cm`;
  plotis = this.value;
};

document.getElementById("gylis").oninput = function () {
  document.getElementById("lentosGylis").innerText = `${this.value} cm`;
  gylis = this.value;
};

document.getElementById("kiekis").oninput = function () {
  document.getElementById("lentosKiekis").innerText = `${this.value} Vnt.`;
  kiekis = this.value;
};

document.getElementById("mygtukas").onclick = function () {
  (skaic = ilgis * (plotis / 100) * (gylis / 100) * kiekis),
    (document.getElementById("kubatura").innerText = ` ${skaic.toFixed(2)} m3`),
    (document.getElementById("kaina").innerText = ` ${(skaic * kainaM).toFixed(
      2
    )}  Eur`);
};
