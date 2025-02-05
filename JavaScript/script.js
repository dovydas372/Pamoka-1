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
