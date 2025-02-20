let a = 1;
let b = 0;
let c = 1;

if (a > b) {
  console.log("pirmas skaičius didesnis už antrą");
} else if (b > c) {
  console.log("antras skaičius didesnis už trečią");
} else if (c > a) {
  console.log("trečias skaičius didesnis už pirmą");
} else if (b == a) {
  console.log("pirmi du skaičiai yra lygūs");
} else if (c == b) {
  console.log("paskutiniai du skaičiai yra lygūs");
} else if (a == 0) {
  console.log("pirmas skaičius yra lygus 0");
} else if (b < 0) {
  console.log("antras skaičius neigiamas");
} else if (c > 0) {
  console.log("trečias skaičius teigiamas");
}

let pazymys = 11;

if (pazymys == 10) {
  console.log("puikus");
} else if (pazymys > 10) {
  console.log("tokio pazymio nera");
} else if (pazymys >= 9) {
  console.log("labai gerai");
} else if (pazymys >= 7) {
  console.log("gerai");
} else if (pazymys >= 5) {
  console.log("patenkinamai");
} else if (pazymys < 5) {
  console.log("egzaminas neislaikytas");
}

// zenklai salygoms jei norime daugiau salygu tame paciame if

// AND - &&

// OR - ||

if (a % 2 == 0) {
  console.log("skaicius lyginis");
} else {
  console.log("skaicius nelyginis");
}

if (b % 7 == 0) {
  console.log("tekstas 1");
} else {
  console.log("tekstas 2");
}

let failas = true;
if (failas) {
  console.log("failas yra js");
} else {
  console.log("failas ne js");
}

///
///

let z = 2;
c = 3;
let v = 4;

if (z % 2 == 0) {
  console.log("skaičius lyginis");
} else if (z % 5 == 0) {
  console.log("skaičius dalinasi is 5");
} else if (z === 3) {
  console.log("skaičius lygus 3");
} else {
  alert("klaida");
}

if (z == c) {
  console.log("pirmi lygus");
} else if (z == v) {
  console.log("pirmas ir trečias skaičiai lygūs");
} else if (v > z) {
  console.log("trečias skaičius didesnis už pirmą");
} else if (v == z * 2) {
  console.log("antras skaičius lygus dvigubai trečio skaičiaus reikšmei");
} else if (a % 3 == 0) {
  console.log("pirmas skaičius dalinasi iš 3");
} else {
  console.log("nieko neradau");
}

const figura = document.querySelector("#figura");

const figurosPlotis = figura.clientWidth;
const figurosAukstis = figura.clientHeight;

if (figurosPlotis == figurosAukstis && figura.style.borderRadius !== "50%") {
  if (figurosPlotis >= 100) {
    console.log("didelis kvadratas");
    figura.style.backgroundColor = "red";
  } else {
    console.log("mazas kvadratas");
    figura.style.backgroundColor = "blue";
  }
} else if (figurosPlotis !== figurosAukstis) {
  console.log("tai nekvadratas ir neapskritimas");
} else {
  console.log("tai apskritimas");
  figura.style.backgroundColor = "purple";
}
