/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
//
//
//
//
//
//
// let i = 1;
// while (i <= 10) {
//   i++;
//   console.log("labas");
// }
//
//
//
//
//
//
//
/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
//
//
//
//
// let i = 0;
// while (i <= 9) {
//   console.log(i++);
// }
//
//
//
//
//
/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
// let i = 10;
// while (i <= 50) {
//   if (i % 2 == 0) {
//     console.log(i++);
//   }
//   i++;
// }
/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
//
//
//
//
//
// let i = 10;
// while (i <= 50) {
//   if (i % 2 == 0) {
//     console.log(i++);
//   }
//   i++;
// }

//
//
//
//
//
//
/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/

// let i = 0;
// let porainiųSk = 0;
// while (i <= 20) {
//   if (i % 2 == 0) {
//     console.log(i++);
//     porainiųSk++;
//   }
//   i++;
// }
// console.log("poriniu skaicius: ", porainiųSk);
/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/
//
//
//
//
//
//

// let skaicius = 0;
// for (let i = 0; i <= 300; i++) {
//   skaicius = Math.round(Math.random() * 300);
//   if (skaicius > 150) {
//     if (skaicius > 275) {
//       console.log(`[${skaicius}]`);
//     } else {
//       console.log(skaicius);
//     }
//   }
// }

//
//
//
//
//
//
//
/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/
// let masyvas = [];
// let skaicius = 0;
// for (let i = 1; i <= 3000; i++) {
//   skaicius = Math.round(Math.random() * 3000);
//   if (i % 70 == 0) {
//     masyvas.push(i);
//   }
// }
// console.log(masyvas);
/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/

// for (let i = 0; i < 10; i++) {
//   console.log(`* * * * * * * * * * *`);
// }
