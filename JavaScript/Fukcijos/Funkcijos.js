// void funkcija nieko negrazina
//
// function pavadinimas (argumentas1, argumentas2, ...) {
//       funkcijos kodas
//      return grazinamas_ats;
//}

// iskvietimas:   funkcijos_pavadinimas();
// galima iskviesti pries funkcijos aprasyma.

//
//
//
//
//
//
//
//
// 1. Sukurkite funkciją, kuri išvestų jūsų vardą ir kodėl pasirinkote
// programavimą. Iškvieskite šią funkciją tris kartus.
//
//
//
//
//
//
//
//
// function vardas() {
//   console.log("vardas: Dovydas Programuoja: nes įdomu");
// }

// for (let i = 0; i < 3; i++) {
//   vardas();
// }
//
//
//
//
//
//
//
//
// 2. Sukurkite funkciją, kuri išvestų 5 eilučių eilėraštį. Iškvieskite šią funkciją 5
// kartus.
//
//
//
//
//
//
//
//
// function eilerastis() {
//   console.log(
//     `laaasdasdadsdsad
//     asdasdasdasdasd
//     sdasdsadasdasd
//     sadasdsadas
//     asdassadas
//      `
//   );
// }
// for (let i = 0; i < 5; i++) {
//   eilerastis();
// }
//
//
//
//
//
//
//
//
// 3. Sukurkite tris funkcijas, kur kiekviena išvestų skirtingus tekstus. Iškvieskite

// visas tris funkcijas po vieną kartą.
//
//
//
//
//
//
//
//
// function funkcija() {
//   console.log(
//     `laaasdasdadsdsa
//        `
//   );
// }
// function funkcija2() {
//   console.log(
//     `laaasda4554sdadsdsa
//        `
//   );
// }
// function funkcija3() {
//   console.log(
//     `laaasdasdadas5sdsa
//        `
//   );
// }

// funkcija();
// funkcija2();
// funkcija3();
//
//
//
//
//
//
//
//
// 4. Sukurkite dvi funkcijas, kur vienoje būtų viena teksto eilutė, kitoje - kita.
// Sukurkite trečią funkciją, kuri iškviestų pirmas dvi funkcijas. Iškvieskite šią
// trečiąją funkciją už visų funkcijų ribų.
//
//
//
//
//
//
//
//
// function funkcija() {
//   console.log(
//     `laaasdasdadsdsa
//        `
//   );
// }
// function funkcija2() {
//   console.log(
//     `laaasda4554sdadsdsa
//        `
//   );
// }
// function funkcija3() {
//   funkcija();
//   funkcija2();
// }

// funkcija3();
//
//
//
//
//
//
//
//
// 5. Sukurkite funkciją, kurios viduje sugeneruotumėte du atsitiktinius skaičius.
// Funkcijoje suskaičiuokite ir išveskite šių dviejų skaičių sumą, kartu išvedant
// ir patį atliekamą veiksmą (pvz 7 + 2 = 9). Iškvieskite šią funkciją keletą
// kartų.
//
//
//
//
//
//
//
//
// function funkcija() {
//   let a = Math.round(Math.random() * 10);
//   let b = Math.round(Math.random() * 10);
//   let suma = a + b;
//   return suma;
// }

// console.log(funkcija());
//
//
//
//
//
//
//
//
// 6. Sukurkite ir iškvieskite funkciją, kurioje kintamuosiuose būtų saugoma
// informacija apie policininką (vardas, pavardė, amžius, alga, etatas,
// specializacija). Išveskite šią informaciją suformatuotai (pavyzdžiui įterpkite
// į sakinį, ar išveskite sąrašu ar pan.).
//
//
//
//
//
//
//
//
// function funkcija() {
//   let a = "tomas ";
//   let b = "tomanis ";
//   let c = "32 metai ";
//   let d = "2000 eur ";
//   let e = "pilnas etatas ";

//   return a + b + c + d + e;
// }

// console.log(`pareiguno duomenys:
//   ${funkcija()}`);
//
//
//
//
//
//
//
//
// 7. Sukurkite funkciją, kuri išvestų 10 atsitiktinių skaičių vienoje eilutėje,
// skaičius atskiriant tarpu. Šią funkciją iškvieskite 5 kartus.
//
//
//
//
//
//
//
// function funkcija() {
//   let a = Math.round(Math.random() * 10);
//   let b = Math.round(Math.random() * 10);
//   let c = Math.round(Math.random() * 10);
//   let d = Math.round(Math.random() * 10);
//   let e = Math.round(Math.random() * 10);

//   console.log(a, b, c, d, e);
// }

// for (let i = 0; i < 10; i++) {
//   funkcija();
// }
//
//
//
//
//
//
//
//
// 8. Sukurkite funkciją, kuri išvestų atsitiktinį skaičių. Už funkcijos ribų

// sukurkite ciklą, kurį būtų vykdomas 10 kartų. Iškvieskite sukurtą funkciją
// cikle. Turėtumėte pamatyti 10 atsitiktinių skaičių.
//
//
//
//
//
//
//
// function funkcija() {
//   let a = Math.round(Math.random() * 10);
//   return a;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(funkcija());
// }
//
//
//
//
//
//
//
//
// 9. Sukurkite funkciją pasisveikinimui, šiai funkcijai per argumentus
// perduokite vardą, funkcijoje išveskite tekstą labas ir gautą vardą. Sukurkite
// kitą funkciją, kuri irgi per argumentus gautų vardą, tačiau pasakytų 'viso
// gero' ir patį vardą. Ne funkcijose susikurkite kintamąjį vardui saugoti ir
// įrašykite vardą. Iškvieskite abi funkcijas, perduodant kintamąjį joms.
//
//
//
//
//
//
//

// function funkcija(a) {
//   console.log(`labas ${a}`);
// }
// function funkcija1(a) {
//   console.log(`viso gero ${a}`);
// }

// let v = "Dovydas";
// funkcija(v);
// funkcija1(v);
//
//
//
//
//
//
//
//
// 10.Sukurkite funkciją, kuriai perduotumėte du skaičius. Ši funkcija turi rasti
// kuris skaičius yra didesnis ir išvesti gautą atsakymą, o jei skaičiai lygūs -
// tuomet išvesti, kad skaičiai lygūs. Iškvieskite šią funkciją keletą kartų,
// duodant skirtingus skaičius.
//
//
//
//
//
//
//
// function funkcija(a, b) {
//   if (a > b) {
//     console.log(`Skaičius ${a} didesnis`);
//   } else if (a === b) {
//     console.log(`Skaičius ${a} ir ${b} lygus`);
//   } else {
//     console.log(`Skaičius ${b} didesnis`);
//   }
// }

// funkcija(60, 60);
//
//
//
//
//
//
//
//
// 11.Sukurkite funkciją, kuri per argumentus gautų automobilių duomenis (markė,
//   modelis, gamybos metai, darbinis tūris). Ši funkcija turėtų šiuos duomenis išvesti
//   kaip nors gražiai formatuotai. Iškvieskite šią funkciją du kartus, perduodant
//   skirtingus duomenis jai.
//
//
//
//
//
//
//

// function funkcija(marke, modelis, gamybosMetai, darbinisTuris) {
//   console.log(`
//     MASINA:
//   Masinos marke: ${marke}
//   masinos modelis: ${modelis}
//   gamybos metai: ${gamybosMetai}
//   Darbinis turis: ${darbinisTuris}`);
// }

// funkcija("asfasas", "asdasdas", "2020", "200");
// funkcija("asfasas6", "asda5sdas", "2010", "230");
//
//
//
//
//
//
//
//
// 12.Sukurkite funkciją sumai skaičiuoti, ši funkcija per argumentus turėtų gauti du

// skaičius, bei išvesti patį veiksmą kartu su atsakymu (pvz 7 + 5 = 12). Sukurkite tokias
// pačias funkcijas skirtumui, sandaugai ir dalmeniui rasti. Sukurkite dar vieną
// funkciją, kuri sugeneruotų du atsitiktinius skaičius, bei iškviestų kitas 4 funkcijas,
// perduodant joms sugeneruotus skaičius. Šią bendrąją funkciją iškvieskite keletą
// kartų.
//
//
//
//
//
//
//
// function suma(a, b) {
//   console.log(a + b);
// }
// function atimtis(a, b) {
//   console.log(a - b);
// }
// function dalyba(a, b) {
//   console.log(a / b);
// }
// function sandauga(a, b) {
//   console.log(a * b);
// }

// function random() {
//   let a = Math.round(Math.random() * 10);
//   let b = Math.round(Math.random() * 10);
//   suma(a, b);
//   dalyba(a, b);
//   atimtis(a, b);
//   sandauga(a, b);
// }

// random();
//
//
//
//
//
//
//
//
// 13.Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje
// išveskite visus žodžius iš masyvo atskirose eilutėse, nurodant žodžio ilgį
// (simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį
// duomenimis. Iškvieskite sukurtą funkciją perduodant turimą masyvą.
//
//
//
//
//
//
//
// function masyvas(a, b) {
//   console.log(a);
//   for (let elementas of b) {
//     console.log(`- ${elementas} ilgis: ${elementas.length}`);
//   }
//   console.log();
// }

// let mas = ["asdasd", "adsdad", "asdasdsa"];

// masyvas("pavadinimas", mas);
//
//
//
//
//
//
//
//
// 14.Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija
// turėtų atspausdinti visus skaičius, šalia jų išvedant to skaičiaus kvadratą ir jį
// padalintą iš dviejų. Už funkcijos ribų susikurkite du skaičių masyvus ir
// užpildykite jį duomenimis. Iškvieskite funkciją du kartus, kiekvieną kartą
// perduodant skirtingą turimą masyvą.
//
//
//
//
//
//
//
// function masyvas(a, b) {
//   console.log(a);
//   for (let elementas of b) {
//     console.log(
//       `Skaicius ${elementas} Kvadratas ir padalintas is 2 : ${
//         (elementas * elementas) / 2
//       }`
//     );
//   }
//   console.log();
// }

// let a = [1, 5, 6, 3, 7];
// let b = [4, 6, 7, 1, 8];
// let c = "pavadinimas";

// masyvas(c, a);
// masyvas(c, b);
//
//
//
//
//
//
//
//
// 15.Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą, bei
// studento vardą su pavarde. Funkcija turėtų išvesti studento vardą ir
// pavardę, jo pažymius. Taip pat, suskaičiuoti vidurkį, bei jį išvesti. Už
// funkcijos ribų susikurkite reikiamus kintamuosius ir masyvus, arba
// objektus studentų pažymiams saugoti ir užpildykite juos duomenimis.
// Iškvieskite šią funkciją perduodant visus reikalingus duomenis.
//
//
//
//
//
//
// function masyvas(a, b) {
//   console.log(a);
//   for (let elementas of b) {
//     vidurkis = +elementas;
//   }
//   vidurkis = vidurkis / b.length;
//   console.log(
//     `studento vardas: ${a} studento pazymiai: ${b} studento pazymiu vidurkis: ${vidurkis}`
//   );
//   console.log();
// }
// let vidurkis = 0;
// let a = [1, 5, 6, 3, 7];
// let b = [4, 6, 7, 1, 8];
// let c = "pavadinimas";

// masyvas(c, a);
// masyvas(c, b);
//
//
//
//
//
//
//
//
// 16.Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija
// turėtų rasti didžiausią skaičių iš masyvo bei išvesti gautą atsakymus. Taip pat,
// susikurkite funkciją, kuri per argumentus priimtų masyvą ir į jį sugeneruotų
// pasirinktą kiekį atsitiktinių skaičių. Susikurkite tris tuščius masyvus.
// Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus, kiekvieną kartą
// perduodant funkcijai vis kitą masyvą. Kai duomenys bus užpildyti,
// masyvuose esančią informaciją išsiveskite norimu būdu (per console.log arba
// per dar atskirą funkciją). Tuomet kvieskite didžiausio skaičiaus paieškos
// funkciją tris kartus, kiekvieną kartą perduodant skirtingą masyvą į ją.
//
//
//
//
//
//
// function masyvas(b) {
//   let max = b[0];
//   for (let elementas of b) {
//     if (elementas > max) {
//       max = elementas;
//     }
//   }
//   console.log(`masyvo didziausias skaicius ${max}`);
//   console.log();
// }

// function masyvoKurimas(ilgis, maxSkaicius, masyvas) {
//   for (let i = 0; i < ilgis; i++) {
//     masyvas.push(Math.round(Math.random() * maxSkaicius));
//   }
// }

// let a = [];
// let b = [];
// let c = [];
// masyvoKurimas(10, 50, a);
// masyvoKurimas(5, 50, b);
// masyvoKurimas(3, 50, c);
// console.log(a);
// console.log(b);
// console.log(c);
// masyvas(a);
// masyvas(b);
// masyvas(c);
//
//
//
//
//
//
//
//
// 17.Susikurkite funkciją, kuri grąžintų bet kokį jūsų norimą sakinį. Iškvieskite
// šią funkciją ir išspausdinkite gautus rezultatus.
//
//
//
//
//
//
// function tekstas() {
//   return "sfasasfsafasfasfasfas";
// }

// console.log(tekstas());
//
//
//
//
//
//
//
//
// 18.Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą skaičių.
// Iškvieskite šią funkciją kelis kartus ir gautus atsakymus išveskite kokiu
// norite būdu.
//
//
//
//
//
//
// function tekstas() {
//   return Math.round(Math.random() * 10);
// }
// console.log(tekstas());
//
//
//
//
//
//
//
//
// 19.Susikurkite funkciją, kuri per argumentus priimtų studento vardą ir vidurkį.
// Ši funkcija turėtų sugeneruoti iš to sakinį (pvz Studentas Tomas turi vidurkį
// 8.7) ir tai grąžinti kaip atsakymą. Iškvieskite šią funkciją bent porą kartų,
// perduodant vis skirtingus duomenis. Gautus atsakymus išveskite.
//
//
//
//
//
//
// function tekstas(vardas, vidurkis) {
//   return `Studentas ${vardas}, vidurkis: ${vidurkis} `;
// }
// console.log(tekstas("tomas", 9.5));
//
//
//
//
//
//
//
//
// 20.Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų surasti
// duoto skaičiaus mažiausią daliklį (skaičių iš kurio dalinasi be liekanos). Už
// funkcijos ribų sukite ciklą nuo 10 iki 30 ir kiekvienoje ciklo iteracijoje
// iškvieskite šią funkciją, perduodant ciklo kintamąjį.
//
//
//
//
//
//
// function tekstas(skaicius) {
//   for (let i = 2; i <= skaicius; i++) {
//     if (skaicius % i == 0) {
//       return i;
//     }
//   }
// }

// for (let i = 10; i <= 30; i++) {
//   console.log("skaicius", i);
//   console.log(tekstas(i));
// }
//
//
//
//
//
//
//
//
// 21.Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų patikrinti
// ar šis skaičius yra pirminis (grąžina true jei pirminis, ir false jei ne pirminis).
// Už funkcijos ribų sukite ciklą nuo 2 iki 15, kiekvienoje ciklo iteracijoje
// išveskite tikrinamą skaičių ir šalia jo iškviestos funkcijos atsakymą (pvz 10
// false, 11 true, ...).
//
//
//
//
//
//
// function tekstas(skaicius) {
//   for (let i = 2; i < skaicius; i++) {
//     if (skaicius % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// for (let i = 2; i <= 15; i++) {
//   console.log("skaicius", i, tekstas(i));
//   console.log();
// }
//
//
//
//
//
//
//
//
// 22.Susikurkite bent 3 matematines funkcijas, priimančias reikiamus
// argumentus (pvz suma iš dviejų skaičių, suma iš trijų skaičių, skirtumas,
// sandauga, dalyba) ir grąžinančias atitinkamus atsakymus. Taip pat,
// susikurkite funkciją, kurioje būtų sugeneruojamas reikiamas kiekis
// atsitiktinių skaičių ir išvedami visų skaičiavimų atsakymai su veiksmais
// (iškviečiant atitinkamas kitas funkcijas ir perduodant reikiamus
// kintamuosius) (pagal 23 pavyzdį). Iškvieskite šią pagrindinę funkciją bent
// kartą.
//
//
//
//
//
//

// let skaicius = [];
// function suma2(a, b) {
//   return a + b;
// }
// function suma3(a, b, c) {
//   return a + b + c;
// }

// function sumos2Isvedimas(a, b) {
//   console.log(`${a} + ${b} = ${suma2(a, b)}`);
// }
// function sumos3Isvedimas(a, b, c) {
//   console.log(`${a} + ${b} + ${c} = ${suma3(a, b, c)}`);
// }

// function reikiamasKiekisSkaiciu(kiekSkaiciu) {
//   for (i = 0; i <= kiekSkaiciu; i++) {
//     skaicius.push(Math.round(Math.random() * 20));
//   }
// }

// reikiamasKiekisSkaiciu(3);

// a = skaicius[0];
// b = skaicius[1];
// c = skaicius[2];

// sumos3Isvedimas(a, b, c);
