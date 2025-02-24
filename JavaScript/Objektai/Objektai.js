//
// object.values(objektas); Reiksmes
// object.keys(objektas); pavadinimai
// object.entries(objektas) ; pavadinimas ir reiksme masyvuose bet nebendrame [pavadinimas, reiksme], [pavadinimas2, reiksme2]....
//
//
//
// let objektas = {
//   paztmaiai: [5, 6, 3, 1],
//   vardas: "asdasdadas",
//   paztmaiai2: [1, 1, 1, 1],
// };
//
//
//
//
//
// 1. Sukurkite objektą studento duomenims saugoti. Į šį objektą sudėkite

// tokias savybes su reikšmėmis: vardas, pavardė, amžius, studijų programa,
// atsiskaitytų kreditų skaičius, pažymiai, amžius, ūgis, kelintame kurse
// mokosi, kurioje mokykloje mokosi. Šiuos duomenis galite grupuoti į
// vidinius objektus arba visus išrašyti atskirai. Išveskite šią informaciją per
// vieną console.log(). Taip pat, pamėginkite išvesti atskirose eilutėse tris
// skirtingas pasirinktas savybes.
//
//
//
//
// let objektas = {
//   pazymaiai: [5, 6, 3, 1],
//   vardas: "asdasdadas",
//   amzius: 10,
//   ugis: 200,
//   kursas: 3,
//   kredituSkaicius: 10,
// };

// console.log(objektas);
// console.log(objektas.amzius);
// console.log(objektas.ugis);
// console.log(objektas.vardas);
//
//
//
//
//
//2. Sukurkite objektą informacijai apie filmą saugoti. Į šį objektą sudėkite
// tokias savybes su reikšmėmis: pavadinimas, režisierius, biudžetas, kiek
// uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai, aktorių
// sąrašas (masyvas su jų vardais ir pavardėmis). Išveskite šio objekto
// informaciją. Paskaičiuokite ir išveskite šio filmo pelną (uždarbis -
// biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis). Paskaičiuokite
// kiek filmui yra metų (dabartinius metus tiesiog galite įrašyti rankomis arba
// panaudoti new Date(Date.now()).getFullYear() funkciją).
//
//
//
//
//
// let filmas = {
//   pavadinimas: "Inception",
//   rezisierius: "Christopher Nolan",
//   biudžetas: 1600,
//   uzdirbo: 829894,
//   zanras: "Mokslinė fantastika, veiksmas",
//   trukme: 148,
//   isleista: 2010,
//   aktoriai: [
//     "Leonardo DiCaprio",
//     "Joseph Gordon-Levitt",
//     "Elliot Page",
//     "Tom Hardy",
//     "Ken Watanabe",
//   ],
// };

// console.log(
//   "filmo pelnas",
//   filmas.uzdirbo - filmas.biudžetas,
//   filmas.aktoriai.length,
//   2025 - filmas.isleista
// );
//
//
//
//
//
// 3. Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename

// objekte nurodykite tokias savybes su reikšmėmis: pavadinimas, autorius,
// žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais),
// išleidimo metai, ar knygą galima rasti knygynuose.
//
//  Išveskite šių knygų
// informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių), bei
// kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos
// kainą padvigintumėte, ar ji jau būtų brangesnė už kitą knygą?
// //
//
//
//
//
// let knyga1 = {
//   pavadinimas: "Knyga 1",
//   autorius: "Autorius 1",
//   zanras: "Detektyvas",
//   kaina: 16,
//   puslapiai: 320,
//   skyriuSarasas: ["Įžanga", "Pirmas skyrius", "Antras skyrius", "Pabaiga"],
//   isleista: 2020,
//   knygynuose: true,
// };

// let knyga2 = {
//   pavadinimas: "Knyga 2",
//   autorius: "Autorius 2",
//   zanras: "Fantastika",
//   kaina: 16,
//   puslapiai: 450,
//   skyriuSarasas: ["Pradžia", "Vidurys", "Finalas"],
//   isleista: 2018,
//   knygynuose: false,
// };

// console.log(knyga1, knyga2);

// if (knyga1.puslapiai > knyga2.puslapiai) {
//   console.log("knyga2 turi maziau puslapių");
// } else {
//   console.log("knyga1 turi maziau puslapių");
// }

// if (knyga1.skyriuSarasas.length > knyga2.skyriuSarasas.length) {
//   console.log("knyga2 turi maziau skyriu");
// } else {
//   console.log("knyga1 turi maziau skyriu");
// }

// if (knyga1.kaina > knyga2.kaina) {
//   if (knyga1.kaina > knyga2.kaina * 2) {
//     console.log(
//       "knyga2 yra pigesnė, bet nekainuotu daugiau jei padvigubintumėm kainą"
//     );
//   } else {
//     console.log(
//       "knyga2 yra pigesnė, bet kainuotu daugiau jei padvigubintumėm kainą"
//     );
//   }
// } else {
//   if (knyga1.kaina > knyga2.kaina * 2) {
//     console.log(
//       "knyga1 yra pigesnė, bet nekainuotu daugiau jei padvigubintumėm kainą"
//     );
//   } else {
//     console.log(
//       "knyga1 yra pigesnė, bet kainuotu daugiau jei padvigubintumėm kainą"
//     );
//   }
// }
//
//
//
//
//
// 4. Sukurkite tris objektus prekių duomenims saugoti. Kiekviename objekte

// sudėkite šias savybes su reikšmėmis: pavadinimas, kaina, savikaina, kodas,
// turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). Išveskite
// visų trijų prekių informaciją.
//
// Išveskite visų prekių kainas vienoje eilutėje
// (pirma prekė kainuoja - ..., antra prekė kainuoja - ..., ir t.t.). Raskite ir
// išveskite kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą
// rastos prekės informaciją). Raskite ir išveskite atskirose eilutėse kiekvienos
// prekės dėžės tūrį. Raskite ir išveskite atskirose eilutėse kiekvienos prekės
// pelningumą ((kaina - savikaina) * kiekis sandėlyje).
//
//
//
//
//
//
//
// let preke1 = {
//   pavadinimas: "Prekė 1",
//   kaina: 29.99,
//   savikaina: 15.5,
//   kodas: "A12345",
//   turimasKiekis: 100,
//   dezesMatmenys: { x: 30, y: 20, z: 10 },
// };

// let preke2 = {
//   pavadinimas: "Prekė 2",
//   kaina: 49.99,
//   savikaina: 25.0,
//   kodas: "B67890",
//   turimasKiekis: 50,
//   dezesMatmenys: { x: 40, y: 30, z: 20 },
// };

// let preke3 = {
//   pavadinimas: "Prekė 3",
//   kaina: 19.99,
//   savikaina: 8.75,
//   kodas: "C54321",
//   turimasKiekis: 200,
//   dezesMatmenys: { x: 25, y: 15, z: 8 },
// };

// console.log(preke1, preke2, preke3);

// console.log(
//   "pirma preke kainuoja - ",
//   preke1.kaina,
//   "antra preke kainuoja - ",
//   preke2.kaina,
//   "trecia preke kainuoja - ",
//   preke3.kaina
// );

// let didziausiaKaina = Math.max(preke1.kaina, preke2.kaina, preke3.kaina);

// if (didziausiaKaina === preke1.kaina) {
//   console.log(preke1.pavadinimas);
// } else if (didziausiaKaina === preke2.kaina) {
//   console.log(preke2.pavadinimas);
// } else {
//   console.log(preke3.pavadinimas);
// }

// let tūris1 = [
//   preke1.dezesMatmenys.x,
//   preke1.dezesMatmenys.y,
//   preke1.dezesMatmenys.z,
// ];
// let tūris2 = [
//   preke2.dezesMatmenys.x,
//   preke2.dezesMatmenys.y,
//   preke2.dezesMatmenys.z,
// ];
// let tūris3 = [
//   preke3.dezesMatmenys.x,
//   preke3.dezesMatmenys.y,
//   preke3.dezesMatmenys.z,
// ];

// console.log(tūris1.reduce((x, y) => x * y));
// console.log(tūris2.reduce((x, y) => x * y));
// console.log(tūris3.reduce((x, y) => x * y));

// console.log((preke1.kaina - preke1.savikaina) * preke1.turimasKiekis);
// console.log((preke2.kaina - preke2.savikaina) * preke2.turimasKiekis);
// console.log((preke3.kaina - preke3.savikaina) * preke3.turimasKiekis);
// //
//
//
//
//
// 5. Sukurkite objektą automobilio duomenims saugoti. Į šį objektą savybes su
// reikšmėmis sukelkite, po to kai sukursite tuščią objektą (10-as pavyzdys).
// Sudėkite šias savybes su reikšmėmis: markė, modelis, rida, gamybos metai,
// spalva, darbinis tūris, ar daužta, ar parduodama. Išveskite visą automobilio
// informaciją. Paskaičiuokite ir išveskite kiek automobiliui yra metų (rankomis
// įrašykite dabartinius metus arba panaudokite new
// Date(Date.now()).getFullYear() funkciją). Paskaičiuokite ir išveskite kiek
// vidutiniškai per metus yra nuvažiavęs automobilis (jeigu viso nuvažiavo 300
// kilometrų, o automobiliui yra 2 metai, tai per metus vidutiniškai gaunasi 150 km.).
//
//
//
//
//
//
//
//
//
//
//
//
// let automobilis = {};

// automobilis.marke = "Toyota";
// automobilis.modelis = "Corolla";
// automobilis.rida = 120000;
// automobilis.gamybosMetai = 2018;
// automobilis.spalva = "Sidabrinė";
// automobilis.darbinisTūris = 1.8;
// automobilis.dauzta = false;
// automobilis.parduodama = true;

// console.log(automobilis);
// console.log(2025 - automobilis.gamybosMetai);
// console.log(automobilis.rida / (2025 - automobilis.gamybosMetai));
//
//
//
//
//
//
//
//
// 6. Sukurkite savo norimą objektą(-us). Kiekviename sudėkite bent 5 savybes

// su reikšmėmis (reikšmes galite įdėti ir atskirai). Išveskite informaciją.
// Pagalvokite ką dar galite su šiuo objektu atlikti (paskaičiuoti ir pan.) ir tai
// padarykite.
//
//
//
//
//  isveskite objekto kuris yra objekte reiksmes
//  suraskite visu suma tik tu reiksmiu kurie yra pirmame objiekte
//
//
//
//
//
//
// let objektas = {
//   mano: 100,
//   mano2: 500,
//   mano3: 150,
//   mano4: { labai: true, nelabai: 500 },
// };

// console.log(objektas.mano4.labai);
// console.log(objektas.mano4.nelabai);

// console.log(objektas.mano + objektas.mano2 + objektas.mano3);

//
//
//
//
//
//
//
//
//
// 7. Susikurkite objektą informacijai apie knygyną saugoti. Į šį objektą sudėkite
// tokias savybes su reikšmėmis: pavadinimas, adresas, plotas (kv. m.), kiek
// turi knygų, darbo valandos, ar atidarytas. Išveskite šio knygyno objekto
// raktus su reikšmėmis. Tuomet išveskite visas knygyno savybes, kurių
// reikšmės yra ne string tipo (plotas, kiek turi knygų ir pan.).
//
//
//
//
//
//
//
//
//
//
// let knygynas = {
//     pavadinimas: "Knygų pasaulis",
//     adresas: "Vilniaus g. 23, Vilnius",
//     plotas: 150,
//     KnyguKiekis: 2000,
//     darboValandos: {
//         pirmadienis: "9:00 - 18:00",
//         antradienis: "9:00 - 18:00",
//         treciadienis: "9:00 - 18:00",
//         ketvirtadienis: "9:00 - 18:00",
//         penktadienis: "9:00 - 18:00",
//         sestadienis: "10:00 - 16:00",
//         sekmadienis: "Uždaryta"
//     },
//     atidarytas: true
// };

// // for (let reiksmes in knygynas) {
// //     console.log (reiksmes, knygynas[reiksmes])
// // }

// for (let reiksmes in knygynas) {
//     if (typeof knygynas[reiksmes] != "string")
// {
//     console. log (reiksmes, knygynas[reiksmes])
// }

// }

//
//
//
//
//
//
//
//
//
// 8. Susikurkite du objektus, dviejų studentų informacijai saugoti. Abiejuose

// objektuose sudėkite šias savybes su reikšmėmis: vardas ir pavardė, studijų
// programos pavadinimas, pažymiai. Raskite abiejų studentų pažymių
// vidurkius. Išveskite abiejų studentų informaciją, bei pažymių vidurkius.
// Raskite ir išveskite, kurio studento pažymių vidurkis yra didesnis ir
// išveskite jo vardą su pavarde.
//
//
//
//
//
//
//
//
//
//

// let studentas1 = {
//   vardas: "Jonas",
//   pavarde: "Pakalnis",
//   studijuPrograma: "Informatika",
//   pazymiai: [8, 9, 10, 7],
// };

// let studentas2 = {
//   vardas: "Eglė",
//   pavarde: "Kazlauskaitė",
//   studijuPrograma: "Verslo administravimas",
//   pazymiai: [9, 8, 10, 9],
// };

// let vidurkis1 =
//   studentas1.pazymiai.reduce((x, y) => x + y, 0) / studentas1.pazymiai.length;
// let vidurkis2 =
//   studentas2.pazymiai.reduce((x, y) => x + y, 0) / studentas2.pazymiai.length;

// console.log(vidurkis1);

// if (vidurkis1 > vidurkis2) {
//   console.log(studentas1.vardas, studentas1.pavarde);
// } else {
//   console.log(studentas2.vardas, studentas2.pavarde);
// }

// Object.entries(studentas1)
//   .filter((eilute) => typeof eilute[1] !== "string")
//   .forEach((eilė) => {
//     console.log(eilė[0], eilė[1]);
//   });

// objektai su funkcija
//

// let objektas = {
//   vardas: "tomas",
//   pavarde: "tomatis",
//   pazymiai: [5, 6, 8, 7, 6],
//   vidurkis: () => {
//     const suma = console.log("vidurkis didelis");
//   },
// };

// console.log(objektas.vidurkis());
//
//
//
//
//
//
//
//
//
// 9. Pagal 16-ą pavyzdį, pritaikykite skriptą prie kitos esybės, t.y. sukurkite tokį
// objektą, kuriame turėtumėte tam tikrų savybių, bei metodą/funkciją, kuri
// kažką paskaičiuotų iš objekto duomenų. Šio objekto informacijos ir
// atsakymų išvedimas irgi būtų panašus į duotą nurodytame pavyzdyje.
//
//
//
//
//
//
//
//
//
//

// let objektas = {
//   skaicius1: 50,
//   skaicius2: 100,
//   sudetis: function () {
//     let suma = this.skaicius1 + this.skaicius2;
//     return suma;
//   },
// };

// console.log(objektas.sudetis());
//
//
//
//
//
//
//
//
//
// 10.Pagal 18-ą pavyzdį, pritaikykite skriptą prie kitos esybės. Išveskite visą
// objekto informaciją per atskirą nuo objekto console.log(), taip pat, išveskite
// tam tikrą pasirinktą informaciją pasinaudojant funkcija/metodu iš objekto.
//
//
//
//
//
//
//
//
//
//
// let objektas = {
//   skaicius1: 50,
//   skaicius2: 100,
//   sudetis: function () {
//     const suma = this.skaicius1 + this.skaicius2;
//     console.log(suma);
//   },
// };

// objektas.sudetis();
// console.log (objektas.skaicius1);
//
//
//
//
//
//
//
//
//
// 11.Susikurkite knygų objektų masyvą. Apie kiekvieną knygą į atskirus knygų objektus
// sudėkite norimą informaciją (bent 3 savybes). Į masyvą įdėkite bent 3 knygas. Visas
// šias knygas išsiveskite. Tuomet parodykite pirmą knygą. Antros knygos kažkurią
// savybę.
//
//
//
//
//
//
//
//
//
//
// let knygos = [
//   {
//     pavadinimas: "Karys",
//     autorius: "Hermanas Hese",
//     metai: 1927,
//   },
//   {
//     pavadinimas: "Krikštatėvis",
//     autorius: "Mario Puzo",
//     metai: 1969,
//   },
//   {
//     pavadinimas: "1984",
//     autorius: "George Orwell",
//     metai: 1949,
//   },
//   {
//     pavadinimas: "Alchemikas",
//     autorius: "Paulo Coelho",
//     metai: 1988,
//   },
// ];

// console.log(knygos);
// console.log(knygos[0]);
// console.log(knygos[1].pavadinimas);
//
//
//
//
//
//
//
//
//
// 12.Susikurkite prekių objektų masyvą ir jį užpildykite pasirinktais duomenimis.
// Išveskite visų prekių pavadinimus su kainomis ir dar kokiais nors atributais
// atskirose eilutėse.
//
//
//
//
//
//
//
//
//
//

// let prekes = [
//   { pavadinimas: "bulve", kaina: 10 },
//   { pavadinimas: "ryziai", kaina: 1.5 },
// ];

// for (let preke of prekes) {
//   console.log(`${preke.pavadinimas}: ${preke.kaina} eur`);
// }
//
//
//
//
//
//
//
//
//
// 13.Susikurkite automobilių objektų masyvą ir užpildykite jį pasirinktais duomenimis.
// Išveskite kiekvieno automobilio pavadinimą, metus ir paskaičiuotą jo amžių
// (dabartiniai metai - gamybos metai).
//
//
//
//
//
//
//
//
//
//
// let masinos = [
//   {
//     marke: "audi",
//     kaina: 50000,
//     metai: 2001,
//     amzius: function () {
//       let amzius1 = 2025 - this.metai;
//       return amzius1;
//     },
//   },
//   {
//     marke: "opel",
//     kaina: 60000,
//     metai: 2005,
//     amzius: function () {
//       let amzius1 = 2025 - this.metai;
//       return amzius1;
//     },
//   },
//   {
//     marke: "bmw",
//     kaina: 5000,
//     metai: 2004,
//     amzius: function () {
//       let amzius1 = 2025 - this.metai;
//       return amzius1;
//     },
//   },
// ];

// for (let masina of masinos) {
//   console.log(
//     `${masina.marke}, kaina: ${masina.kaina} metai: ${
//       masina.metai
//     } amzius: ${masina.amzius()}  `
//   );
// }

// console.log(object);
//
//
//
//
//
//
//
//
//
// 14.Susikurkite objektų masyvą įmonių duomenims saugoti ir jį užpildykite
// duomenimis. Išveskite kiekvienos įmonės informaciją atskirose eilutėse,
// gražiai suformatuotai (sakinio pavidalu ar pan.). Taip pat, ką nors
// paskaičiuokite iš turimų skaitinių duomenų (pvz.: vidutinis įmonės amžius,
// darbuotojų kiekis per visas įmones, bendras pelnas, ar pan.).
//
//
//
//
//
//
//
//
//
//
// let imones = [
//   {
//     pavadinimas: "UAB traidenis",
//     metai: 2021,
//     pelnas: 500000,
//     drbuotojai: 200,
//   },
//   {
//     pavadinimas: "UAB trai",
//     metai: 2001,
//     pelnas: 400000,
//     drbuotojai: 230,
//   },
//   {
//     pavadinimas: "UAB denis",
//     metai: 2011,
//     pelnas: 50000,
//     drbuotojai: 240,
//   },
// ];

// let darbuotojai = imones.reduce((x, y) => x + y.drbuotojai, 0);
// console.log(darbuotojai);

// for (const element of imones) {
//   console.log(`${element.pavadinimas} metai:${2025 - element.metai} `);
// }
//
//
//
//
//
//
//
//
//
// 15.Susikurkite objektų masyvą ligoninių duomenims saugoti ir užpildykite jį

// pasirinktais duomenimis. Išveskite ligoninių pavadinimus su adresais
// skirtingose eilutėse. Suskaičiuokite ką nors iš skaitinių jų duomenų, pvz.:
// bendrą lankytojų kiekį, bendrą ar vidutinį darbuotojų kiekį, ar pan.
//
//
//
//
//
//
//
//
//
//
// let ligonines = [
//   {
//     pavadinimas: "traidenis",
//     metai: 2021,
//     pacientai: 200,
//     drbuotojai: 200,
//   },
//   {
//     pavadinimas: "trai",
//     metai: 2001,
//     pacientai: 200,
//     drbuotojai: 230,
//   },
//   {
//     pavadinimas: "denis",
//     metai: 2011,
//     pacientai: 200,
//     drbuotojai: 240,
//   },
// ];
// let suma = 0;
// for (const element of ligonines) {
//   suma += element.pacientai;
// }
// console.log(`pacientu visuose ligoninese: ${suma}`);
//
//
//
//
//
//
//
//
//
// 16.Susikurkite studentų objektų masyvą, kur apie kiekvieną studentą būtų

// žinoma ši informacija: vardas ir pavardė, amžius, pažymiai, studijų
// programa, kursas. Kiekvieną studentą išveskite taip: pirmoje eilutėje visi
// studento duomenys išskyrus jo pažymius, antroje eilutėje jo pažymiai,
// trečioje jo pažymių vidurkis su prierašu 'pažymių vidurkis'. Išvedus visus
// studentus dėkite brūkšnį (pvz.: -----) ir išveskite bendrą visų studentų
// pažymių vidurkį.
//
//
//
//
//
//
//
//
//
//
let studentai = [
  {
    vardas: "Jonas",
    pavarde: "Pakalnis",
    amzius: 20,
    pazymiai: [9, 8, 7, 10],
    studijuPrograma: "Informatika",
    kursas: 2,
  },
  {
    vardas: "Eglė",
    pavarde: "Kazlauskaitė",
    amzius: 22,
    pazymiai: [8, 9, 10, 9],
    studijuPrograma: "Verslo administravimas",
    kursas: 3,
  },
  {
    vardas: "Tomas",
    pavarde: "Stankevicius",
    amzius: 21,
    pazymiai: [6, 7, 8, 9],
    studijuPrograma: "Matematika",
    kursas: 1,
  },
];
