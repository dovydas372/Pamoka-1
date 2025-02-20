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
