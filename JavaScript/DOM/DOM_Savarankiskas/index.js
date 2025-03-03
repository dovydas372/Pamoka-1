// pirmas div

document.getElementById("pirma-antraste").innerHTML =
  "Naujas pirmos antrastes tekstas";
document.getElementById("pirmas-paragrafas").innerHTML =
  "Naujas pirmo paragrafo tekstas";

//Antras div

console.log("Antras DIV");

let tekstasIsParagrafo = document.getElementById("paragrafo-tekstas").innerHTML;
console.log("paimtas su innerHTML tekstas: ", tekstasIsParagrafo);

let tekstasIsParagrafo2 =
  document.getElementById("paragrafo-tekstas").innerText;
console.log("paimtas su innerTEXT tekstas: ", tekstasIsParagrafo2);

console.log();

// Trecias div

console.log("Trecias DIV");

console.log(
  "innerHTML turinys: ",
  document.getElementById("trecias").innerHTML
);
console.log(
  "innerTEXT turinys: ",
  document.getElementById("trecias").innerText
);

console.log();

//septintas DIV

function pakeisti() {
  document.getElementById("septinto-tekstas").innerHTML = "naujas tekstas";
}

//astuntas div

function pakeisti2(a, b) {
  document.getElementById(a).innerHTML = b;
}

//devintas div

function pakeisti3(a, b) {
  document.getElementById(a).innerHTML = b;
}
function kitaSpalva(a, b) {
  document.getElementById(a).style.color = b;
}

//desimtas div ir vienuoliktas

let pirmas = 8;
let antras = 9;

let isvedimui = `<p>${pirmas} + ${antras} = ${pirmas + antras}</p>
<p>${pirmas} - ${antras} = ${pirmas - antras}</p>
<p>${pirmas} * ${antras} = ${pirmas * antras}</p>
<p>${pirmas} / ${antras} = ${pirmas / antras}</p>`;

document.getElementById("vienuolikto-turinys").innerHTML = isvedimui;

//dvyliktas

function kitaDydi(a, b) {
  document.getElementById(a).style.fontSize = b + "px";
}

// tryliktas

let divKeitimui = document.getElementById("div-keitimui");

let plocioSlider = document.getElementById("plocio-slider");
let aukscioSlider = document.getElementById("aukscio-slider");

plocioSlider.oninput = function (a) {
  divKeitimui.style.width = this.value + "px";
};
aukscioSlider.oninput = function () {
  divKeitimui.style.height = this.value + "px";
};

let spalvosPasirinkimas = document.getElementById("spalvos-pasirinkimas");

spalvosPasirinkimas.oninput = function (a) {
  divKeitimui.style.backgroundColor = this.value;
};

let tekstasDivui = document.getElementById("tekstas-divui");

tekstasDivui.oninput = function () {
  divKeitimui.innerHTML = this.value;
};

// keturioliktas div

function pridetiZodi(elementas, zodis) {
  document.getElementById(elementas).value += zodis + " ";
}

// penkiolitkas div

let penkioliktoTekstas = document.getElementById("penkiolikto-tekstas");

function zodziuKiekis() {
  let tekstas = penkioliktoTekstas.value;
  let zodziai = tekstas.trim().split(" ");
  document.getElementById(
    "penkiolikto-atsakymai"
  ).innerHTML = `<p>Zodziu kiekis: ${zodziai.length}</p>`;
}

function ilgiausiasZodis() {
  let tekstas = penkioliktoTekstas.value;
  let zodiai = tekstas.trim().split(" ");
  let ilgiausias = "";

  for (let zodis of zodiai) {
    if (zodis.length > ilgiausias.length) {
      ilgiausias = zodis;
    }
  }

  document.getElementById(
    "penkiolikto-atsakymai"
  ).innerHTML = `<p>Ilgiausias zodis: ${ilgiausias}</p>
  <p>Jo ilgis: ${ilgiausias.length} simboliu.</p>`;
}

// sesioliktas div

let primoSkirtukoTurinys = document.getElementById("pirmas-skirtukas");
let antroSkirtukoTurinys = document.getElementById("antras-skirtukas");

function pirmasSkirtukas() {
  primoSkirtukoTurinys.style.display = "block";
  antroSkirtukoTurinys.style.display = "none";
}
function antrasSkirtukas() {
  antroSkirtukoTurinys.style.display = "block";
  primoSkirtukoTurinys.style.display = "none";
}

//septynioliktas div

let perjungtiMygtukas = document.getElementById("perjungti-mygtukus");
let perjungtiTekstas = document.getElementById("perjungti-tekstas");

perjungtiMygtukas.onclick = function () {
  if (this.innerText == "Rodyti") {
    this.innerText = "Nerodyti";
    perjungtiTekstas.style.display = "block";
  } else {
    this.innerText = "Rodyti";
    perjungtiTekstas.style.display = "none";
  }
};

//astuonioliktas div

let KitasperjungtiTekstas = document.getElementById("kitas-perjungti-tekstas");

document.getElementById("kitas-perjungti-mygtukas").onclick = function () {
  if (KitasperjungtiTekstas.style.display == "block") {
    this.innerText = "Rodyti";
    KitasperjungtiTekstas.style.display = "none";
  } else {
    this.innerText = "Rodyti";
    KitasperjungtiTekstas.style.display = "block";
  }
};
