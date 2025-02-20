let pirmas = 4;
let antras = 16;
let trecias = 24;

if (pirmas == antras) {
  console.log("pimras lygu antram");
} else {
  console.log("pimras nelygu antram");
}

if (antras == trecias) {
  console.log("antras lygus treciam");
} else {
  console.log("antras nelygus treciam");
}

if (pirmas > antras) {
  console.log("pimras daugiau uz antra");
} else {
  console.log("pimras maziau antra");
}

if (antras > trecias * 2) {
  console.log(
    "antras skaičius yra didesnis už dvigubą trečiojo skaičiaus reikšmę"
  );
} else {
  console.log(
    "antras skaičius yra nedidesnis už dvigubą trečiojo skaičiaus reikšmę"
  );
}

if (pirmas / 2 == Math.floor(pirmas / 2)) {
  console.log("pirmas skaičius yra lyginis");
} else {
  console.log("pirmas skaičius yra nelyginis");
}

if (antras / 2 !== Math.floor(antras / 2)) {
  console.log("antras skaičius yra nelyginis");
} else {
  console.log("antras skaičius yra lyginis");
}

if (trecias > 0) {
  console.log("trečias skaičius yra teigiamas");
} else {
  console.log("trečias skaičius yra neigiamas");
}

if (pirmas < 0) {
  console.log("pirmas skaičius yra neigiamas");
} else {
  console.log("pirmas skaičius yra teigiamas");
}

if (antras / 4 == Math.floor(antras / 4)) {
  console.log("antras skaičius dalinasi iš 4");
} else {
  console.log("antras skaičius nesidalinasi iš 4");
}

if (trecias / 8 == Math.floor(trecias / 8)) {
  console.log("trečias skaičius dalinasi iš 8");
} else {
  console.log("trečias skaičius nesidalinasi iš 8");
}

let amzius = 18;

if (amzius >= 18) {
  console.log("jūs galite balsuoti");
} else {
  console.log("jūs negalite balsuoti");
}

let pazymis1 = 1;
let pazymis2 = 6;

let vidurkis = (pazymis1 + pazymis2) / 2;

if (vidurkis >= 5) {
  console.log("jųsų vidurkis teigiamas");
} else {
  console.log("jųsų vidurkis neigiamas");
}

let skaičiaus = 6;
let x = 1;
if (skaičiaus % 5 == 0) {
  console.log(skaičiaus * x++);
  console.log(skaičiaus * x++);
  console.log(skaičiaus * x++);
  console.log(skaičiaus * x++);
  console.log(skaičiaus * x++);
  console.log(skaičiaus * x++);
  console.log(skaičiaus * x++);
  console.log(skaičiaus * x++);
  console.log(skaičiaus * x++);
  console.log(skaičiaus * x++);
} else {
  console.log("skaičius nesidalina iš 5");
}

if (skaičiaus % 2 == 0) {
  console.log(skaičiaus);
  console.log(skaičiaus ** 2);
  console.log(skaičiaus / 2);
} else {
  console.log("skaičius nelyginis");
}

if (skaičiaus % 7 !== 0) {
  let skaičiaus2 = 6;
  console.log("\n", skaičiaus + skaičiaus2);
  console.log(skaičiaus - skaičiaus2);
  console.log(skaičiaus * skaičiaus2);
  console.log(skaičiaus % skaičiaus2);
} else {
  console.log("skaičius dalinasi iš 7");
}
