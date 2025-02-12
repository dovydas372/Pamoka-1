// for (kintamasis; sąlyga; operacija) {
// KODAS
//}

//for (let i = 0; i<4; i++) {
//}

// for (let i = 0; i < 11; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 16; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i < 21; i += 3) {
//   console.log(i);
// }

// for (let i = 1; i < 21; i += 3) {
//   console.log(`[${i}]`);
// }

// for (let i = 1; i < 21; i++) {
//   if (i % 4 === 0) {
//     console.log(i, "skaičius dalinasi iš 4");
//   }
// }

// let pradžia = 5;
// let pabaiga = 10;

// for (pradžia; pradžia <= pabaiga; pradžia++) {
//   console.log(pradžia, pradžia * pradžia);
// }

// let pradžia = 1;
// let pabaiga = 10;

// if (pradžia < pabaiga) {
//   for (pradžia; pradžia <= pabaiga; pradžia++) {
//     if (pradžia % 2 === 0 || pradžia % 8 === 0) {
//       console.log(pradžia, "lyginis arba dalinasi iš 8");
//     }
//   }
// } else {
//   console.log("netinkami rėžiai");
// }

// let skaicius1 = 2;
// let skaicius2 = 5;
// let skaicius = 0;
// for (let i = 1; i <= skaicius2; i++) {
//   skaicius += skaicius1;
// }
// console.log(skaicius);

// Ciklai su sumomis

// 8 uzduotis

// let suma = 0;
// let skaicius = 100;

// for (let i = 1; i < skaicius; i++) {
//   suma += i;
// }
// console.log(suma);

// uzduotis 9

// let suma = 0;
// let skaicius = 50;

// for (let i = 20; i <= skaicius; i++) {
//   if (i % 2 === 0) {
//     suma += i;
//   }
// }
// console.log(suma);

// uzduotis 10

// let suma = 0;
// let skaicius = 60;

// for (let i = 30; i <= skaicius; i++) {
//   if (i % 2 !== 0) {
//     suma += i;
//   }
// }
// console.log(suma);

//11 uzduotis

// let suma = 0;
// let skaicius = 1000;

// for (let i = 1; i < skaicius; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     suma += i;
//   }
// }
// console.log(suma);

// 2/3
// 12 uzduotis

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0 && i % 3 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// 13 uzduotis Fibonaci

// let pirmas = 1;
// let antras = 1;
// let sum = 0;

// console.log(pirmas);
// console.log(antras);

// for (let i = 2; i < 10; i++) {
//   sum = pirmas + antras;
//   pirmas = antras;
//   antras = sum;
//   console.log(sum);
// }
//
//
//
//
//
//
//
// CIKLAS WHILE

///
///
///
///
///
///
///
///
// 1 uzduotis

// let i = 1;
// while (i < 21) {
//   console.log(i);
//   i++;
// }

// 2 uzduotis
//
//
// let i = 1;
// while (i < 51) {
//   if (i % 2 == 0) {
//     console.log(i, "yra lyginis");
//   } else {
//     console.log(i, "yra nelyginis");
//   }
//   i++;
// }
//
//
//
//
// 3 uzduotis
//
//
// let i = 25;
// while (i < 51) {
//   if (i % 3 == 0) {
//     console.log(`Skaičius: ${i} dalinasi iš 3`);
//   } else {
//     console.log(i);
//   }
//   i++;
// }
//
//
//
//
//
//
//
// 4 uzduotis
//
//
// let i = 1;
// while (true) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(`Skaičius: ${i} dalinasi iš 3 ir iš 5`);
//     break;
//   } else {
//     console.log(i);
//   }
//   i++;
// }
//
//
//
//
//5 Uzduotis
//
//
// let i = 1;
// let sum = 0;
// while (i < 101) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
//   i++;
// }
// console.log(sum);
//
//
//
//
//
//
//6 Uzduotis
//
//
//
// let skaicius = 1;

// while (skaicius < 5) {
//   console.log(skaicius, skaicius * skaicius);
//   skaicius++;
// }
//
//
//
// 7 uzduotis
//
//
//
//

// let i = Math.round(Math.random() * 50);
// let a = Math.round(Math.random() * 50);
// while (i != 0) {
//   console.log(a);
//   i--;
// }

//
//
//
//8 uzduotis
//
//
//
//

// let i = Math.round(Math.random() * 50);
// let a = 0;
// let sum = 0;
// while (i != 0) {
//   console.log((a = Math.round(Math.random() * 50)));
//   i--;
//   sum += a;
// }
// console.log("skaiciu suma:", sum);
//
//
//
