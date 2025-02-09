//Suskaičiuoti kiek duonos kepalų kepykla sugebės iškepti per dieną, ar spės
//įgyvendinti visus dienos užsakymus ir suskaičiuoti kiek iš jų uždirbs pelno.

const darboValandos = 8;

let kepalaiPerValanda = 1;
let darbuotojuSkaicius = 5;
let savikaina = 2;
let perdavimoKaina = 4;
let kepaluUzsakymaiPerDiena = 50;
let maxKepaluSkaiciusPerPara =
  darbuotojuSkaicius * (kepalaiPerValanda * darboValandos);

let Pajamos =
  maxKepaluSkaiciusPerPara * perdavimoKaina -
  maxKepaluSkaiciusPerPara * savikaina;

console.log(
  "per vieną darbo dieną spės iškepti duonos kepalų: ",
  maxKepaluSkaiciusPerPara
);

console.log("Pajamos už visus iškeptus:", Pajamos);

if (maxKepaluSkaiciusPerPara - kepaluUzsakymaiPerDiena >= 0) {
  console.log("darbuotojai spės iškepti reikiamą keikį kepalų");
} else {
  console.log(
    "darbuotojai nespės iškepti:",
    kepaluUzsakymaiPerDiena - maxKepaluSkaiciusPerPara
  );
}

if (maxKepaluSkaiciusPerPara - kepaluUzsakymaiPerDiena >= 0) {
  console.log(
    "pajamos gautos, uzsakymas įvykditas pilnai. Gautos pajamos:",
    Pajamos,
    "Eur"
  );
} else {
  console.log(
    "Pajamos negautos, užsakymas pilnai neivykditas. Liko: ",
    kepaluUzsakymaiPerDiena - maxKepaluSkaiciusPerPara,
    "Kepalų"
  );
}
