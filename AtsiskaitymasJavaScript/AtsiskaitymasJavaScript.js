// 1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
// Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
// Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
// doleriais.

// let Eur =Math.floor(Math.random() * 1000 + 1);

// function euraiIdolerius(eurai) {
//   return eurai * 1.08;
// }

// console.log(euraiIdolerius(Eur).toFixed(2), "$");

// 2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
// Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
// Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
// eurais.

// let doleriai = Math.floor(Math.random() * 1000 + 1);

// function euraiIdolerius(doleriai) {
//   return doleriai * 0.93;
// }

// console.log(euraiIdolerius(doleriai).toFixed(2), "Eur");

// 3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
//  mass index), kai yra žinomas žmogaus ūgis ir svoris.

// let ivestiDuomenysMasyvas = document.querySelector("#bmi");
// ivestiDuomenysMasyvas.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let duomenys = document.querySelector("#bmi");
//   let ugis = duomenys.elements[0].value / 100;
//   let svoris = duomenys.elements[1].value;

//   let bmi = svoris / (ugis * ugis);
//   return console.log(`jūsų bmi yra: ${bmi.toFixed(2)}`);
// });

// 4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
// pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
// dienomis.

// let ivestimetai = document.querySelector("#metai");

// ivestimetai.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let metai = ivestimetai.elements[0].value;
//   return console.log(`
//     jūsų metai sekundėmis: ${metai * 31536000}
//     jūsų metai minutėmis: ${metai * 525600}
//     jūsų metai valandomis: ${metai * 8760}
//     jūsų metai dienomis: ${metai * 365}`);
// });

// 5. Parašykite programą, kuri konvertuos termometro
// duomenis iš Farenheito į Celsijų, ir atvirkščiai.

// function farenheitoPavertimasC(F) {
//   let celsijus = ((F - 32) * 5) / 9;
//   return console.log(celsijus.toFixed(2), "celsijaus");
// }

// farenheitoPavertimasC(200);

// 6. Sukurkite kodą, kuris išspausdins į konsolę
// 1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
// dešimties neturėtų būti brūkšniuko.

// let tekstas = "";

// for (let i = 1; i < 10; i++) {
//   tekstas += `${i.toString()}-`;
// }
// console.log(tekstas + "10");

// 7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.

// *

// * *

// * * *

// * * * *

// * * * * *

// let zvaigzdute = "";

// for (i = 1; i <= 5; i++) {
//   zvaigzdute += "* ";
//   console.log(zvaigzdute);
// }

// 8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.

// let menesiai = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// let sumadienu = 0;
// let dabartineData = "2025-03-27";
// let menesis = parseInt(dabartineData.split("-")[1]);
// let diena = parseInt(dabartineData.split("-")[2]);

// for (menesis; menesis <= menesiai.length; menesis++) {
//   sumadienu += menesiai[menesis - 1];
// }
// console.log(sumadienu - diena - 6, "Liko iki kaledu");

// 9.  Parašykite kodą, kuris apjungia masyvo duomenis į vieną
// tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
// Tomas,Dainius,Paulius,Jonas
// Tomas+Dainius+Paulius+Jonas

// let vardai = ["Tomas", "Dainius", "Paulius", "Jonas"];
// let sujungti = "";
// for (vardas of vardai) {
//   sujungti += vardas + "+";
// }

// console.log(sujungti);

// 10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
// slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
// mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
// simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.

// let raides = ["a", "b", "c", "d", "e", "f", "g", "h", "k"];
// let didziosisoRaides = ["A", "B", "C", "D", "E", "F", "G", "H"];
// let random = Math.round(Math.random() * 10 + 6);
// let slaptazodis = "";
// for (random; random > 0; random--) {
//   slaptazodis +=
//     raides[Math.round(Math.random() * raides.length)] +
//     (random * 9).toString() +
//     didziosisoRaides[Math.round(Math.random() * raides.length)];
// }
// console.log(slaptazodis);
