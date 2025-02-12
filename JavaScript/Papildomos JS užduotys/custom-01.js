/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

// let vardas = "Dovydas";
// let pavardė = "Gailiunas";
// let metai = 1996;
// let dabartiniaiMetai = 2025;

// console.log(
//   `Aš esu ${vardas} ${pavardė}. Man yra ${dabartiniaiMetai - metai} metai`
// );

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

// let random1 = Math.round((Math.random() * 4 + Number.EPSILON) * 100) / 100;
// let random2 = Math.round((Math.random() * 4 + Number.EPSILON) * 100) / 100;

// console.log(random1, random2);

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

// let a = Math.round(Math.random() * 25);
// let b = Math.round(Math.random() * 25);
// let c = Math.round(Math.random() * 25);
// let vidurinisSkaicius;
// if ((a < b && a > c) || (a < c && a > b)) {
//   console.log("vidurinis skaicius: ", a);
// } else if ((b < a && b > c) || (b < c && b > a)) {
//   console.log("vidurinis skaicius: ", b);
// } else if ((c < a && c > b) || (c < b && c > a)) {
//   console.log("vidurinis skaicius: ", c);
// } else {
//   console.log("nėra vidurinio skaičio");
// }
// console.log(a, b, c);

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
//
//
//
// let kr1 = Math.round(Math.random() * 10);
// let kr2 = Math.round(Math.random() * 10);
// let kr3 = Math.round(Math.random() * 10);

// if (kr1 + kr2 > kr3 && kr1 + kr3 > kr2 && kr2 + kr3 > kr1) {
//   console.log("Galima sudaryti trikampį.");
// } else {
//   console.log("Negalima sudaryti trikampio.");
// }
//
//
//
//

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

// let k1 = Math.round(Math.random() * 2);
// let k2 = Math.round(Math.random() * 2);
// let k3 = Math.round(Math.random() * 2);
// let k4 = Math.round(Math.random() * 2);

// let nuliai = 0;
// let vienetai = 0;
// let dvejatai = 0;

// if (k1 == 0) {
//   ++nuliai;
// } else if (k1 == 1) {
//   ++vienetai;
// } else if (k1 == 2) {
//   ++dvejatai;
// }

// if (k2 == 0) {
//   ++nuliai;
// } else if (k2 == 1) {
//   ++vienetai;
// } else if (k2 == 2) {
//   ++dvejatai;
// }

// if (k3 == 0) {
//   ++nuliai;
// } else if (k3 == 1) {
//   ++vienetai;
// } else if (k3 == 2) {
//   ++dvejatai;
// }

// if (k4 == 0) {
//   ++nuliai;
// } else if (k4 == 1) {
//   ++vienetai;
// } else if (k4 == 2) {
//   ++dvejatai;
// }

// console.log(nuliai, vienetai, dvejatai);
//

//
//
//
//
//

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
//
//
//
// let k1 = Math.round(Math.random() * 20) - 10;
// let k2 = Math.round(Math.random() * 20) - 10;
// let k3 = Math.round(Math.random() * 20) - 10;

// console.log(k1, k2, k3);
// if (k1 > 0) {
//   console.log(`{${k1}}`);
// } else if (k1 < 0) {
//   console.log(`[${k1}]`);
// } else {
//   console.log(`(${k1})`);
// }
// if (k2 > 0) {
//   console.log(`{${k2}}`);
// } else if (k2 < 0) {
//   console.log(`[${k2}]`);
// } else {
//   console.log(`(${k2})`);
// }
// if (k3 > 0) {
//   console.log(`{${k3}}`);
// } else if (k3 < 0) {
//   console.log(`[${k3}]`);
// } else {
//   console.log(`(${k3})`);
// }

//
//
//
//
//
/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/
//
//
// let k1 = Math.round(Math.random() * 2994) + 5;

// if (k1 > 1000 && k1 <= 2000) {
//   console.log(k1, "žvakių kaina su 3% nualaida: ", k1 - k1 * 0.03);
// } else if (k1 > 2000) {
//   console.log(k1, "žvakių kaina su 4% nualaida: ", k1 - k1 * 0.04);
// } else {
//   console.log(k1, "žvakių kaina su be nualaidos: ", k1);
// }

//
//
//
//
/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
//
//
//
//
// let k1 = Math.round(Math.random() * 100);
// let k2 = Math.round(Math.random() * 100);
// let k3 = Math.round(Math.random() * 100);

// console.log(k1, k2, k3);

// console.log(Math.round((k1 + k2 + k3) / 3));

// let sum = k1 + k2 + k3;
// let kiekis = 3;

// if (k1 < 10 || k1 > 90) {
//   sum - k1;
//   --kiekis;
// }
// if (k2 < 10 || k2 > 90) {
//   sum - k2;
//   --kiekis;
// }
// if (k3 < 10 || k3 > 90) {
//   sum - k3;
//   --kiekis;
// }
// console.log(Math.round(sum / kiekis));
//
//
//
//
//
/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/
//
//
//
//
//
//
//
// let valandos = Math.round(Math.random() * 24);
// let minutes = Math.round(Math.random() * 60);
// let sekundes = Math.round(Math.random() * 60);
// let po = Math.round(Math.random() * 300);

// let sekundesVertimas = 0;
// let minutesVertimas = 0;
// let valandosVertimas = 0;
// let visosSekundės = 0;

// console.log(`
//   Laikrodis
//   ${valandos} :  ${minutes} :  ${sekundes}
//   `);

// visosSekundės = valandos * 3600 + minutes * 60 + sekundes + po;

// valandosVertimas = Math.floor(visosSekundės / 3600);
// visosSekundės = visosSekundės - valandosVertimas * 3600;
// minutesVertimas = Math.floor(visosSekundės / 60);
// visosSekundės = visosSekundės - minutesVertimas * 60;
// sekundes = visosSekundės;

// if (valandosVertimas > 24) {
//   valandos = valandosVertimas - 24;
// }
// valandos = valandosVertimas;
// minutes = minutesVertimas;

// console.log(`
//   Laikrodis po ${po} sekundžių
//   ${valandos} :  ${minutes} :  ${sekundes}
//   `);

//
//
//
//
//
//
/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

let kint1 = Math.round(Math.random() * 8999) + 1000;
let kint2 = Math.round(Math.random() * 8999) + 1000;
let kint3 = Math.round(Math.random() * 8999) + 1000;
let kint4 = Math.round(Math.random() * 8999) + 1000;
let kint5 = Math.round(Math.random() * 8999) + 1000;
let kint6 = Math.round(Math.random() * 8999) + 1000;

let n1 = Math.min(kint1, kint2, kint3, kint4, kint5, kint6);
let n2 = Math.max(kint1, kint2, kint3, kint4, kint5, kint6);
