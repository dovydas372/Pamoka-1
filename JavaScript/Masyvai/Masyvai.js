// let masyvas = [6, 8, 9, 7, 8, 2];

// console.log(
//   masyvas[0],
//   masyvas[masyvas.length - 1],
//   masyvas.length,
//   masyvas[2],
//   masyvas[3]
// );

//
//
// 2 uzduotis
//
//
//
//
// let masyvas = [6, 8, 9, 7, 8, 2];
// console.log(masyvas);
// masyvas[masyvas.length - 1] = 5;
// masyvas[masyvas.length - 2] = 5;
// masyvas[masyvas.length - 3] = 5;
// console.log(masyvas);
//
//
//
//
//
//
// 3 uzduotis
//
//
//
//
//
// let masyvas = [];
// masyvas.push(5, 6, 7, 9, 8, 8, 8, 8);
// console.log(masyvas);
//
//
//
//
//
//
// 4 uzduotis
//
//
//
//
//
// let masyvas = [];
// masyvas.push(
//   Math.round(Math.random() * 10),
//   Math.round(Math.random() * 10),
//   Math.round(Math.random() * 10),
//   Math.round(Math.random() * 10)
// );
// console.log(masyvas);
//
//
//
//
//
//
// 5 uzduotis
//
//
//
//
// //
// let masyvas1 = [];
// let masyvas2 = [];

// masyvas1.push(
//   Math.round(Math.random() * 10),
//   Math.round(Math.random() * 10),
//   Math.round(Math.random() * 10)
// );

// masyvas2.push(
//   Math.round(Math.random() * 10),
//   Math.round(Math.random() * 10),
//   Math.round(Math.random() * 10)
// );

// console.log((masyvas1[0] + masyvas1[1] + masyvas1[2]) / 3);
// console.log((masyvas2[0] + masyvas2[1] + masyvas2[2]) / 3);
//
//
//
//
//
//
// 6 uzduotis
//
//
//
//
//
// let studijuPrograma = [
//   "pavadinimas1",
//   "pavadinimas2",
//   "pavadinimas3",
//   "pavadinimas4",
// ];

// for (i = 0; i < studijuPrograma.length; i++) {
//   console.log(studijuPrograma[i]);
// }
//
//
//
//
//
//
// 7 uzduotis
//
//
//
//
//
// let studijuPrograma = [
//   "pavadinimas1",
//   "pavadinimas2",
//   "pavadinimas3",
//   "pavadinimas4",
// ];

// for (i = 0; i < studijuPrograma.length; i++) {
//   console.log("Šalis: ", studijuPrograma[i]);
// }
//
//
//
//
//
//
// 8 uzduotis
//
//
//
//
//
//
// let studijuPrograma = [
//   "pavadinimas1",
//   "pavadinimas2",
//   "pavadinimas3",
//   "pavadinimas4",
// ];

// for (i = 0; i < studijuPrograma.length; i++) {
//   console.log("Projekto nr:", i + 1, "projekto pav: ", studijuPrograma[i]);
// }
//
//
//
//
//
//
// 9 uzduotis
//
//
//
//
//
//
// let masyvas = [];

// for (i = 0; i < 9; i++) {
//   masyvas[i] = Math.round(Math.random() * 9);
// }
// console.log(masyvas);

// for (a = 0; a < masyvas.length; a++) {
//   if (masyvas[a] > 5) {
//     console.log(masyvas[a]);
//   }
// }
//
//
//
//
//
//
// 10 uzduotis
//
//
//
//
//
//
// let masyvas = [];

// for (i = 0; i < 9; i++) {
//   masyvas[i] = Math.round(Math.random() * 9);
// }
// console.log(masyvas);

// let sum = 0;

// for (a = 0; a < masyvas.length; a++) {
//   if (masyvas[a] % 4 === 0) {
//     sum += masyvas[a];
//   }
// }

// console.log("skaičiai kurie dalinasis iš 4 suma:", sum);
//
//
//
//
//
//
// 11 uzduotis
//
//
//
//
//
//
// let masyvas = [];

// for (i = 0; i < 9; i++) {
//   masyvas[i] = Math.round(Math.random() * 9) + 1;
// }
// console.log(masyvas);

// let sum = 0;

// for (a = 0; a < masyvas.length; a++) {
//   sum += masyvas[a];
// }

// console.log("pažymiu vidurkis:", sum / masyvas.length);
//
//
//
//
//
//
// 12 uzduotis
//
//
//
//
//
//
// let masyvas = [];

// for (i = 0; i < 9; i++) {
//   masyvas[i] = Math.round(Math.random() * 9) + 1;
// }
// console.log(masyvas);

// let sum = 0;

// for (a = 0; a < masyvas.length; a++) {
//   sum += masyvas[a];
// }

// for (a = 0; a < masyvas.length; a++) {
//   if (masyvas[a] > sum / masyvas.length) {
//     console.log(masyvas[a]);
//   }
// }

// console.log("pažymiu vidurkis:", sum / masyvas.length);
//
//
//
//
//
//
// 13 uzduotis
//
//
//
//
//
//
// let masyvas = [];

// for (let i = 0; i < 9; i++) {
//   masyvas[i] = Math.round(Math.random() * 9) + 1;
// }
// console.log(masyvas);

// let sum = 0;

// for (i = 0; i < masyvas.length; i++) {
//   if (masyvas[i] % 2 === 0) {
//     console.log(masyvas[i], masyvas[i] * masyvas[i]);
//   } else {
//     console.log(masyvas[i]);
//   }
// }
//
//
//
//
//
//
// 14 uzduotis
//
//
//
//
//
//
// let masyvas = [];

// for (let i = 0; i < 9; i++) {
//   masyvas[i] = Math.round(Math.random() * 9) + 1;
// }
// console.log(masyvas);

// let sum = 0;

// for (i = 0; i < masyvas.length; i++) {
//   if (masyvas[i] > 4) {
//     console.log(masyvas[i], "teigiamas");
//   } else {
//     console.log(masyvas[i], "neigiamas, pritrūko", 5 - masyvas[i], "balų");
//   }
// }
//
//
//
//
//
//
// 15 uzduotis
//
//
//
//
//
//
// let masyvas = ["zodis1", "zodis2", "zodis3", "zodis4"];
// let sum = 0;

// for (i = 0; i < masyvas.length; i++) {
//   console.log(masyvas[i], masyvas[i].length);
//   sum += masyvas[i].length;
// }

// console.log("raidžių suma:", sum);
// //
//
//
//
//
//
// 16 uzduotis
//
//
//
//
//
//
// let masyvas = [];

// for (let i = 0; i < 9; i++) {
//   masyvas[i] = Math.round(Math.random() * 9) + 1;
// }
// console.log(masyvas);

// let sum = 0;

// for (i = 0; i < masyvas.length; i++) {
//   if (masyvas[i] % 3 == 0) {
//     sum += masyvas[i];
//   }
// }
// console.log(sum, sum / masyvas.length);
//
//
//
//
//
// 17 uzduotis
//
//
//
//
//
//
// let masyvas = ["zodis1", "zodis2", "zodis3", "zodis4"];
// let i = 0;

// for (let zodziai of masyvas) {
//   i++;
//   console.log(i - 1, masyvas[i - 1]);
// }
//
//
//
//
//
// 18 uzduotis
//
//
//
//
//
//
// let masyvas = ["zodis1", "zodis2", "zodis3", "zodis4"];
// let i = 0;

// console.log(masyvas.length);

// for (let zodziai of masyvas) {
//   console.log("-", zodziai);
// }
//
//
//
//
//
// 19 uzduotis
//
//
//
//
//
//
// let masyvas = [];

// for (let i = 0; i < 9; i++) {
//   masyvas[i] = Math.round(Math.random() * 9) + 1;
// }

// let sum = 0;

// for (let pazymiai of masyvas) {
//   console.log(pazymiai);
//   sum += pazymiai;
// }

// console.log("vidurkis: ", sum / masyvas.length);
//
//
//
//
//
// 20 uzduotis
//
//
//
//
//
//
// let masyvas = [];

// for (let i = 0; i < 9; i++) {
//   masyvas[i] = Math.round(Math.random() * 500) + 50;
// }

// console.log(masyvas);

// for (let didesni of masyvas) {
//   if (didesni > 150) {
//     console.log(didesni);
//   }
// }
//
//
//
//
//
// 21 uzduotis
//
//
//
//
//
//
// let masyvas = ["zodis1.txt", "zodis2.json", "zodis3.txt", "zodis4"];
// let i = 0;

// console.log(masyvas.length);

// for (let zodziai in masyvas) {
//   if (
//     masyvas[zodziai][masyvas[zodziai].length - 1] == "t" &&
//     masyvas[zodziai][masyvas[zodziai].length - 2] == "x" &&
//     masyvas[zodziai][masyvas[zodziai].length - 3] == "t"
//   ) {
//     console.log(masyvas[zodziai]);
//   } else if (
//     masyvas[zodziai][masyvas[zodziai].length - 1] == "n" &&
//     masyvas[zodziai][masyvas[zodziai].length - 2] == "o" &&
//     masyvas[zodziai][masyvas[zodziai].length - 3] == "s" &&
//     masyvas[zodziai][masyvas[zodziai].length - 4] == "j"
//   ) {
//     console.log(masyvas[zodziai]);
//   }
// }
//
//
//
//
//
// 22 uzduotis
//
//
//
//
//
//
// let masyvas = ["zodis1", "zodis2", "zodis3", "zodis4"];
//

// for (let zodziai in masyvas) {
//   console.log(
//     "markė:",
//     masyvas[zodziai],
//     "raidžių skaičius: ",
//     masyvas[zodziai].length
//   );
// }
//
//
//
//
//
// 23 uzduotis
//
//
//
//
//
//
// let masyvas = ["u1", "zodis2", "zodis3", "zodis4"];

// for (let zodziai in masyvas) {
//   if (masyvas[zodziai] == "u1") {
//     console.log(masyvas[zodziai], "klaida kuri neleidzia atidaryti failo");
//   }
// }
//
//
//
//
//
// 24 uzduotis
//
//
//
//
//
//
