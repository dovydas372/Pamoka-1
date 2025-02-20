// skaiciai.pop salinimas is galo
//sjaucuau.shift salinimas is priekio
// skaiciai.splice(2,3)  saliname is vidurio trys elementus nuo 2 elemento ne indekso
//pirmas.concat(antras)    sujungia du masyvus.
//skaiciai.slice (1,4) iskerpa nuo 1 iki 4 (indekso);
//skaiciai.slice (1,-3) iskerpa pirma ir 3 paskutinius (indekso);
// skaiciai.slice() kopija masyvo
//let sujungtiskaiciai = [...skaiciai,...skaiciai2, 150, 55]; sujungia i masyva per ... (tris taskus ) masyva;

// jei masyve keiciame verte ir prilyginame ji kitam masyvui tada reiksmė pasikeis abiems, bet jei viena isvalome tada vienas bus pilnas kitas tuscias

// skaiciai.join ("-") atspauzdina masyvo vertes kiekvienoj įterpęs - zenklą.

// pavesti kintamajį į masyva  let tekstas = "asdas llabas koks tu esi normalu gal"
// let zodziai = tekstas.split(" ")   imetame tarpą ir pagal trapa esanti tarp zodziu juos suskirto i kintamuosius .
//
//
//
//sort ((a, b) => b - a)  isrikiuoti mazejancia tvarka
//
//
//
//
//
//
// 1 uzduotis
//
//
//
//
//
//
//
// let valgiai = ["ledai", "vanduo", "suris", "mesa"];

// valgiai.splice(2, 1);

// console.log(valgiai);
//
//
//
//
//
//
// 2 uzduotis
//
//
//
//
//
//
// //
// let skaiciai = [1, 2, 3, 4, 5, 6, 8, 91, 81];

// console.log(skaiciai.includes(3));
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
//
// let valgiai = ["ledai", "vanduo", "suris", "mesa"];

// console.log(valgiai.join(" - "));
//
//
//
//
//
//
// 4 uzduotis
//Susikurkite kintamąjį kuriame būtų saugomas sakinys iš kelių žodžių
// (string tipo kintamasis). Išskaidykite šį tekstą į masyvą naudojant split
// metodą. Raskite kiek žodžių buvo sakinyje.
//
//
//
//
//
// let sakinys = "as esu busimas programuotojas";
// console.log(sakinys.split(" "));
//
//
//
//
//
//
// 5 uzduotis
//Susikurkite pažymių masyvą. Surikiuokite pažymius nuo didžiausio iki
// mažiausio. Išveskite tris didžiausius pažymius.
//
//
//
//
//
// let pazymiai = [8, 7, 1, 2, 4, 10];

// console.log(pazymiai.sort((a, b) => b - a));
// let pazymiai2 = pazymiai.sort((a, b) => b - a);
// for (let i = 0; i <= 2; i++) {
//   console.log(pazymiai2[i]);
// }
//
//
//
//
//
//
// 6 uzduotis
//Susikurkite du masyvus, pirmąjame būtų saugomi biologijos pamokos
// studentų vardai, o antrąjame būtų saugojami matematikos pamokos
// studentų vardai. Apjunkite šiuos masyvų informaciją į vieną masyvą.
// Bonus: ar jums pavyktų išskirti tik unikalius vardus? (galima ieškoti kaip
// panaudoti set).
//
//
//
//

// let valgiai = ["ledai", "vanduo", "suris", "mesa"];
// let valgiai2 = ["ledai2", "vanduo2", "suris2", "mesa2"];

// let bendriValgiai = [...valgiai, valgiai2[0]];
// console.log(bendriValgiai);

// const unikaliusVardai = new set(bendriValgiai);

// unikaliusVardai.add("Saulė");
// unikaliusVardai.add("Saulė");

//
//
//
//
//
//
// 7 uzduotis
// Susikurkite du masyvus. Pirmame masyve bus išvardinta pirmo semestro
// paskaitų temos, o antrame masyve - antro semestro paskaitų temos.
// Sujunkite šiuos masyvus naudojant spread operator, taip, kad pirmiausia
// būtų pateikta pirmo semestro informacija ir tada antro.
//
//
//
//
//
// let valgiai = ["ledai", "vanduo", "suris", "mesa"];
// let valgiai2 = ["ledai2", "vanduo2", "suris2", "mesa2"];

// let sujungia = [...valgiai2, ...valgiai];

// console.log(sujungia);
//
//
//
//
//
//
// 8 uzduotis
// Susikurkite masyvą, kuriame būtų išvardintos kelios spalvos. Padarykite
// šio masyvo kopiją ir duomenis iš originalaus masyvo pašalinkite. Išveskite
// abu masyvus, atkreipkite dėmesį į tai kad pašalinus duomenis iš pirmojo
// masyvo, turėjo pasinaikinti tik iš jo, o antrame viskas likti tvarkingai, o
// jeigu išsitrynė abiejų duomenys - pamėginkite surasti priežastį ir
// sutvarkyti.
//
//
//
//
//
// let valgiai = ["ledai", "vanduo", "suris", "mesa"];

// let copy = valgiai.slice();
// valgiai = [];
// console.log(valgiai, copy);

//
//
//
//
//
// 9 uzduotis
//Susikurkite masyvą, kuriame būtų saugomi miestų pavadinimai. Atlikite
// paiešką masyve su indexOf surasdami kurioje pozicijoje yra pasirinktas
// miestas.
//
//
//
//
//
// let valgiai = ["ledai", "vanduo", "suris", "mesa"];

// console.log(valgiai.indexOf("suris"));
//
//
//
//
//
//
// 10 uzduotis
//Susikurkite bet kokį masyvą. Parašykite programą kuri išsiaiškintų ar
// masyve yra bent vienas dublikatas.
// Pvz, masyve [1, 2, 3] nėra dublikatų.
// O masyve [1, 2, 3, 4, 2] yra dublikatų (skaičius 2).
//
//
//
//
//
// let pazymiai = [8, 55, 1, 1, 4, 6];

// let seen = new Set(pazymiai);
// let seen2 = [...seen];
// console.log(seen2);
// if (seen2.length != pazymiai.length) {
//   console.log("skaiciai dubliuojasi");
// } else {
//   console.log("skaiciai nesidubliuojasi");
// }
//
//
//
//
//
//
// 11 uzduotis
// /Parašykite programą, kuri galėtų masyvą išskaidyti į pasirinkto dydžio
// gabalėlius (chunk size). Pvz turint masyvą [1, 2, 3, 4, 5, 6] ir pasirinkus
// chunk size 2, turėtų gautis toks masyvas - [[1, 2], [3, 4], [5, 6]].
// //
//
//
//
// //
// let arr = [1, 2, 3, 4, 5, 6]; // Pradinis masyvas
// let chunkSize = 3; // Norimas gabalėlio dydis
// let chunkedArray = [];

// for (let i = 0; i < arr.length; i += chunkSize) {
//   chunkedArray.push(arr.slice(i, i + chunkSize));
// }

// console.log(chunkedArray); // [[1, 2], [3, 4], [5, 6]]
//
//

//
// let masyvas = [1, 2, 3, 4, 5, 6];
// let naujasMasyvas = [];

// let chunkSize2 = 4;

// while (masyvas.length > 0) {
//   const dalisMasyvo = masyvas.slice(0, chunkSize2);
//   naujasMasyvas.push(dalisMasyvo);
//   masyvas.splice(0, chunkSize2);
// }

// console.log(naujasMasyvas);
//
//
//
//
//
//
// 12 uzduotis
// Susikurkite string tipo kintamąjį, kuriame būtų išsaugoti skaitmenys, pvz
// “01458”. Patikrinkite ar nurodytas “skaičius” yra palindromis, t.y. toks kuris
// yra vienodas tiek skaitant iš priekio, tiek iš galo (palindromio pvz: 01310).
// Hint: su string kintamuoju galima panaudoti ir dalį masyvų metodų.
//
//
//
//
//
//
//
// let skaicius = "012120";

// skaiciusArr = skaicius.split("");
// skaiciusArrRev = skaiciusArr.slice();
// skaiciusArrRev.reverse();
// console.log(skaiciusArr, skaiciusArrRev);
// for (let zenklas in skaiciusArr) {
//   if (skaiciusArr[zenklas] === skaiciusArrRev[zenklas]) {
//   } else {
//     console.log("Skaicius nera palindrominis");
//     break;
//   }
// }
//
//
//
//
//
//
// 13 uzduotis
// Susikurkite du skaičių masyvus. Susikurkite trečią, tačiau tuščią masyvą.
// Parašykite programą kuri sudėtų pirmų dviejų masyvų skaičius į trečiąjį,
// tačiau nekartojant jau trečiame egzistuojančių reikšmių (sudėtų tik
// unikalius skaičius). Pvz jeigu turime masyvus [1, 2, 3, 4] ir [2, 3, 5, 6], tai
// trečiasis turėtų gautis [1, 2, 3, 4, 5, 6].
//
//
//
//
//
//
//
// let masyvas1 = [1, 2, 3, 4];
// let masyvas2 = [1, 2, 3, 4, 5, 6];

// let masyvasBendrasNesurusiuotas = [...masyvas1, ...masyvas2];

// let masyvuBendras = new Set(masyvasBendrasNesurusiuotas);

// let masyvasBendrasSurusiuotas = [...masyvuBendras];

// console.log(masyvasBendrasSurusiuotas);
//
//
//
//
//
//
// 14 uzduotis
// Susikurkite du bet kokius masyvus. Raskite kurie elementai egzistuoja tiek
// viename tiek kitame masyve. Pvz jeigu pirmasis yra [1, 2, 3], o antrasis yra
// [2, 3, 4], tai atsakymas [2, 3].
//
//
//
//
//
//
//

// let masyvas1 = [1, 6, 3, 4];
// let masyvas2 = [1, 0, 3, 4, 5, 6];
// let masyvasBendras = [];

// for (let skaiciai in masyvas1) {
//   for (let skaiciai2 in masyvas2) {
//     if (masyvas1[skaiciai] == masyvas2[skaiciai2]) {
//       masyvasBendras.push(masyvas2[skaiciai2]);
//     }
//   }
// }
// console.log(masyvasBendras);
//
//
//
//
//
//
// 15 uzduotis
// Susikurkite skaičių masyvą, kuriame skaičiai nebūtinai eina didėjimo
// tvarka. Raskite mažiausią teigiamą skaičių kuris neegzistuoja. Pvz jeigu
// masyvas yra [7, 5, 1, 9, 3, 4], tai atsakymas yra 2.
//
//
//
//
//
//
//
