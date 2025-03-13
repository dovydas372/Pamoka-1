//1. Sukurkite JS funkciją, kurios parametras yra callback funkcija. Jūsų funkcija
// turėtų vykdyti callback funkciją po 2s.

// const { each } = require("async");

// function fukcija1(a) {
//   setTimeout(() => {
//     a();
//   }, 2000);
// }

// 2. Sukurkite JS funkciją, kuri daro HTTP Request užklausą ir grąžina pažadą su
// duomenimis.

// function funkcija2(url) {
//   fetch(url)
//     .then((a) => a.json())
//     .then((a) => {
//       console.log(a);
//     });
// }

// 3. Sukurti funkciją(1), kuri kaip parametrus priimtų skaičių masyvą ir callback
// funkciją(2). Funkcija(1) turėtų iteruoti per masyvą ir siųsti kiekvieną jos narį
// callback funkcijai(2). Callback funkcijos esmė - patikrinti ar gautas skaičius yra
// lyginis ar nelyginis ir atitinkamą informaciją išvesti į konsolę.
// Funkcija turėtų būti iškviečiama taip (pavadinimai gali būti kitokie):
// pirmojiFunkcija(masyvas, callbackFunkcija)

// let masyvas = [1, 2, 3, 4, 5];

// function funkcija1(masyvas, callback) {
//   for (let skaiciai of masyvas) {
//     callback(skaiciai);
//   }
// }

// function funkcijaCallback(a) {
//   if (a % 2 === 0) {
//     console.log(a, "yra lyginis");
//   } else {
//     console.log(a, "yra nelyginis");
//   }
// }

// funkcija1(masyvas, funkcijaCallback);

// 4. Sukurkite funkciją, kuri priima masyvą (kuris užpildytas "string" tipo
//     reikšmėmis(žodžiais)) ir callback funkciją. Funkcija turėtų iteruoti per masyvą ir
//     nusiųsti kiekvieną stringą esantį masyve callback funckijai. Callback funkcija turi
//     grąžinti atsiųsto "string" ilgį.
//     - susikurti funkciją patikrinkZodzioIlgi(masyvas, callbackFunkcija)
//     - funkcijos patikrinkZodzioIlgi esmė - panaudoti foreach ir kiekvienam masyvo
//     nariui iškviest funkciją koksIlgis(string)

// let masyvas = ["obuolys", "bananas", "vyšnia"];

// function funkcija1(masyvasSTR, funkcija) {
//   for (let zodis of masyvasSTR) {
//     funkcija(zodis);
//   }
// }

// function patikrintiIlgį(a) {
//   console.log(a, "zodzio Ilgis", a.length);
// }

// funkcija1(masyvas, patikrintiIlgį);

// 5. Sukurkite funkciją, kuri kaip argumentus priima masyvą, sudarytą iš objektų ir
// callback funkciją. Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną ten
// esantį objektą (tarkim tai automobilis, turintis šias properties: rida, markė,
// modelis, gamybos metai ir kaina (bet galite susikurti ir savo nuožiūra)) callback
// funkcijai. Callback funkcija turėtų grąžinti naują objektą, kuriame būtų tik
// atrinktos objekto properties, tarkim tik markė ir modelis)

// const zmones = [
//   {
//     vardas: "Jonas",
//     amzius: 25,
//     miestas: "Vilnius",
//     profesija: "Programuotojas",
//   },
//   { vardas: "Eglė", amzius: 30, miestas: "Kaunas", profesija: "Dizainerė" },
//   {
//     vardas: "Marius",
//     amzius: 28,
//     miestas: "Klaipėda",
//     profesija: "Inžinierius",
//   },
// ];

// function funkcija(masyvas, funkcija) {
//   for (let objektas of masyvas) {
//     funkcija(objektas);
//   }
// }

// function funkcija2(a) {
//   let b = { vardas: a.vardas, amzius: a.amzius };
//   console.log(b);
//   return b;
// }

// funkcija(zmones, funkcija2);

// 6. Sukurkite funkciją, kuri priims parametrą isUserLogedIn (reikšmė gali būti true
//     arba false). Jūsų funkcijos viduje, naudojantis Promise konstruktoriumi, sukursite
//     naują promise objektą, kuris tikrins ar isUserLogedIn yra true ar false, jeigu
//     paduotas parametras ar false, jūsų sukurtas promise turėtų reject’inti užklausą,
//     kitu atveju - resolvinam ir grąžinam pasirinktą pranešimą. Iškvieskite tą funkciją
//     naudojantis then ir catch, o gautą rezultatą atvaizduokite konsolėje.

const getData = async (url) => {
  const response = await fetch(url);
  const duomenys = await response.json();

  if (duomenys === true) {
    console.log(duomenys);
  } else {
    throw "Iviko klaida";
  }
};

getData("AsyncUzduotys.json")
  .then((b) => {
    console.log("a");
  })
  .catch((a) => {
    console.log(a);
  });
