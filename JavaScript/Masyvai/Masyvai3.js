// skaiciai yra masyvas

// .find randa tik pirma atitikusi salyga ir uzbaigia loopa
//let teigiami = skaiciai.find ((skaicius) => skaicius > 0;);
// .filter grazina visus atitikusius sąlyga
// let teigiami = skaiciai.filter ((skaicius) => skaicius > 0;);
//
// .every jei salyga atitinka visi elementai išsiunčia true ir false jei bent vienas neatitinka.
// let teigiami = skaiciai.every ((skaicius) => skaicius > 0;);
//
// .some jei bent vienas atitiko salyga tai išspausdina TRUE
// let teigiami = skaiciai.some ((skaicius) => skaicius > 0;);
//
// .map pakeicia visus kintamuosius masyve
// let teigiami = skaiciai.map ((skaicius) => skaicius * 3 ;);   padaugina visas vertes is 3 ir pakeicia jas
//
//.reduce  sukuria kintaji su pradine reiksme ir keicia reiksmėMasyve kintamaji pagal masyva.
// let teigiami = skaiciai.reduce((sumosKintamasis, reiksmėMasyve) => sumosKintamasis + reiksmėMasyve, 0 - pradinė sumosKintamasis reiksmė);
//
//
//
//
//
//
//
//
//
//1. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių (naudojant find
// metodą), kuris yra lyginis. Pvz, jeigu masyvas bus [3, 7, 2, 9, 6, 4], tai
// atsakymas turi gautis 2, nes 3 ir 7 buvo nelyginiai.
//
//
//
//
//
//
//
// let masyvas = [3, 7, 2, 9, 6, 4];

// let teigiami = masyvas.find((skaicius) => skaicius % 2 === 0);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 2. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių.
// Suraskite jame pirmą skaičių, kuris yra teigiamas (daugiau nei 0). Pvz, jeigu
// masyvas bus [-3, 0, 5, -8, 2, 7], atsakymas turi gautis 5.
//
//
//
//
//
//
// let masyvas = [-3, 0, 5, -8, 2, 7];

// let teigiami = masyvas.find((skaicius) => skaicius > 0);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 3. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių.
// Suraskite jame pirmą skaičių kuris yra neigiamas ir išveskite jo indeksą, o
// jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu masyvas bus [8, -2, 3, 4],
// tai atsakymas yra 1, nes skaičius -2 yra indekse 1. O jeigu masyvas bus [7,
// 5, 3], tai atsakymas bus -1, nes masyve nėra neigiamo skaičiaus.
//
//
//
//
//
//
// let masyvas = [8, -2, 3, 4];

// let teigiami = masyvas.findIndex((skaicius) => skaicius < 0);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 4. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra lygus
// arba didesnis 10 ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra
// išveskite -1. Pvz, jeigu turite masyvą [8, 12, 5, 3, 15, 9], atsakymas bus 1.
//
//
//
//
//
//
// let masyvas = [8, 8, 5, 3, 7, 9];

// let teigiami = masyvas.findIndex((skaicius) => skaicius >= 10);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 5. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris dalintųsi iš
// 3 ir būtų didesnis nei 10, ir jį išveskite. Pvz, jeigu masyvas yra [5, 9, 12, 7,
// 18, 4], atsakymas bus 12.
//
//
//
//
//
//
// let masyvas = [5, 9, 12, 7, 18, 4];

// let teigiami = masyvas.find((skaicius) => skaicius % 2 == 0 && skaicius > 10);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 6. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra
// neigiamas ir yra lyginis. Pvz, jeigu masyvas [5, 8, -3, -6, 4, 7], tai atsakymas
// yra -6.
//
//
//
//
//
//
//
//
// let masyvas = [5, 8, -3, -6, 4, 7];

// let teigiami = masyvas.find((skaicius) => skaicius % 2 == 0 && skaicius < 0);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 7. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra
// teigiami (didesni nei 0). Pvz, jeigu masyvas [7, 5, 9, 8], tai atsakymas true, o
// jeigu masyvas [8, 9, -3, 2], tai atsakymas false.
//
//
//
//
//
//
//
//
// let masyvas = [7, 5, 9, 8];

// let teigiami = masyvas.every((skaicius) => skaicius > 0);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 8. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra
// lyginiai. Pvz, jeigu masyvas yra [2, 4, 8, 6], tai atsakymas true, o jeigu
// masyvas [7, 3, 6, 8, 10], tai atsakymas false.
//
//
//
//
//
//
//
//
// let masyvas = [2, 4, 8, 6];

// let teigiami = masyvas.every((skaicius) => skaicius % 2 == 0);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 9. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve yra bent vienas
// skaičius, kuris yra mažesnis nei 5. Pvz, jeigu masyvas [8, 20, 5, 97, 44], tai
// atsakymas false, bet jeigu masyvas [20, 3, 7, 9], tai atsakymas true.
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
// let masyvas = [2, 4, 8, 6];

// let teigiami = masyvas.some((skaicius) => skaicius < 5);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 10. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių.
// Patikrinkite ar šiame masyve yra bent vienas teigiamas skaičius (didesnis
// nei 0). Pvz, jeigu masyvas [7, 2, -3, -6], tai atsakymas yra true, o jeigu
// masyvas yra [-8, -6, -4], tai atsakymas yra false.
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

// let masyvas = [7, 2, -3, -6];

// let teigiami = masyvas.some((skaicius) => skaicius > 0);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 11. Susikurkite žodžių masyvą. Patikrinkite ar visi šiame masyve esantys
// žodžiai yra sudaryti iš 3 ar daugiau raidžių. Pvz, jeigu masyvas yra [‘antis’,
// ‘ožka’, ‘arklys’], tai atsakymas true, o jeigu masyvas [‘abc’, ‘de’, ‘fgia’], tai
// atsakymas false.
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
// let masyvas = ["abc", "de", "fgi"];

// let teigiami = masyvas.every((zodis) => zodis.length >= 3);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 12. Susikurkite žodžių masyvą. Patikrinkite ar šiame masyve yra bent vienas
// žodis prasidedantis raide a (turi surasti nepriklausomai tai didžioji ar
// mažoji raidė). Pvz, jeigu masyvas [‘bananas’, ‘agurkas’, ‘pomidoras’], tai
// atsakymas true, o jeigu masyvas [‘kaunas’, ‘vilnius’, ‘klaipėda’], tai
// atsakymas false.
//
//
//
//
//
//
//
//
//

// let masyvas = ["kaunas", "vilnius", "klaipėda"];

// let teigiami = masyvas.some((zodis) => zodis.toLowerCase().startsWith("a"));

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 13. Susikurkite skaičių masyvą. Patikrinkite ar visi šiame masyve esantys
// skaičiai yra teigiami ir ar yra bent vienas skaičius, kuris būtų lyginis. Pvz,
// masyvas [3, 7, 2, 9, 6, 4], grąžina true, o masyvas [4, -2, 3, 7] grąžina false.
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
// let masyvas = [4, -2, 3, 7];

// let teigiami = masyvas.every((skaicius) => skaicius > 0);
// let arYraTeigiamu = masyvas.some((skaicius) => skaicius % 2 == 0);

// console.log(teigiami && arYraTeigiamu);
//
//
//
//
//
//
//
//
//
// 14. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių.
// Išfiltruokite skaičius, kurie yra teigiami. Pvz, jeigu masyvas yra [4, -3, -2, 8,
// 9, 5], tai išfiltruotas variantas yra [4, 8, 9, 5].
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
// let masyvas = [4, -3, -2, 8, 9, 5];

// let teigiami = masyvas.filter((skaicius) => skaicius > 0);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 15. Susikurkite skaičių masyvą, kuriame būtų saugomi prekės reitingai
// (skaičiai nuo 1 iki 5). Išfiltruokite tuos įrašus, kur balų yra 1 arba 2. Pvz,
// jeigu masyvas [5, 1, 4, 5, 1, 3, 4, 5, 2], tai išfiltravus gausis [1, 1, 2].
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
// let masyvas = [5, 1, 4, 5, 1, 3, 4, 5, 2];

// let teigiami = masyvas.filter((skaicius) => skaicius == 1 || skaicius == 2);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 16. Susikurkite skaičių masyvą, kuriame būtų ir teigiamų ir neigiamų skaičių.
// Išfiltruokite tik tuos skaičius, kurie yra teigiami ir yra lyginiai. Pvz, jeigu
// turite masyvą [5, -3, 2, 7, 8, -4, 1] tai turi gautis [2, 8].
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
// let masyvas = [5, -3, 2, 7, 8, -4, 1];

// let teigiami = masyvas.filter((skaicius) => skaicius > 0 && skaicius % 2 == 0);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 17. Susikurkite šalių pavadinimų masyvą. Išfiltruokite tik tas šalis, kurių
// pavadinime yra raidė b (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu turite
// masyvą [‘Belgija’, ‘Lietuva’, ‘Graikija’, ‘Bulgarija’], tai turi gautis [‘Belgija’,
// ‘Bulgarija’].
// //
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
// let masyvas = ["Belgija", "Lietuva", "Graikija", "Bulgarija"];

// let teigiami = masyvas.filter((zodis) => zodis.toLowerCase().startsWith("b"));

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 18. Susikurkite skaičių masyvą. Išfiltruokite lyginius skaičius ir juos
// padvigubinkite. Pvz, jeigu masyvas yra [3, 7, 2, 9, 6, 4], išfiltravus gausis [2,
// 6, 4], o padvigubinus galutinis variantas bus [4, 12, 8].
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
// let masyvas = [3, 7, 2, 9, 6, 4];

// let teigiami = masyvas
//   .filter((skaicius) => skaicius % 2 == 0)
//   .map((skaicius) => skaicius * 2);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 19. Susikurkite skaičių masyvą. Kiekvieną skaičių jame padidinkite per 1. Pvz,
// jeigu masyvas yra [7, 8, 9, 2, 3], tai turi gautis [8, 9, 10, 3, 4].
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
// let masyvas = [7, 8, 9, 2, 3];

// let teigiami = masyvas.map((skaicius) => skaicius + 1);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 20. Susikurkite žodžių masyvą. Kiekvieną žodį iš šio masyvo paverskite į
// variantą iš didžiųjų raidžių. Pvz, jeigu turite masyvą [‘bananas’, ‘baba’,
// ‘klėtis’], tai turi gautis [‘BANANAS’, ‘BABA’, ‘KLĖTIS’].
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
// let masyvas = ["bananas", "baba", "klėtis"];

// let teigiami = masyvas.map((skaicius) => skaicius.toUpperCase());

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 21. Susikurkite skaičių masyvą. Gaukite visų skaičių sumą. Pvz, jeigu masyvas
// yra [2, 3, 1], tai atsakymas 6.
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
// let masyvas = [2, 3, 1];

// let teigiami = masyvas.reduce((suma, skaicius) => (suma += skaicius), 0);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 22. Susikurkite skaičių masyvą. Atrinkite tik tuos skaičius, kurie yra lyginiai ir
// gaukite jų sumą. Pvz, jeigu masyvas yra [1, 2, 3, 4, 5], atrinkus gausis [2, 4],
// o šių skaičių suma ir galutinis atsakymas yra 6.
//
//
//
//
//
//
//
//
//
// let masyvas = [1, 2, 3, 4, 5];

// let teigiami = masyvas
//   .filter((lyginis) => lyginis % 2 == 0)
//   .reduce((suma, skaicius) => (suma += skaicius), 0);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 23. Susikurkite žodžių masyvą. Pasiimkite kiekvieno žodžio pirmą raidę, ją
// padarykite iš didžiosios raidės. Pvz, jeigu turite masyvą [‘šuo’, ‘katė’,
// ‘gyvatė’], tai turi gautis [‘Š’, ‘K’, ‘G’].
//
//
//
//
//
//
//
//
// let masyvas = ["šuo", "katė", "gyvatė"];

// let teigiami = masyvas.map((raide) => raide[0].toUpperCase());

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 24. Susikurkite žodžių masyvą. Raskite kiek šiame masyve yra žodžių, kurie
// susideda iš 5 ar daugiau raidžių. Pvz, jeigu masyvas yra [‘bananas’,
// ‘persikas’, ‘abc’, ‘de’], tai atrinkus žodžius gausis [‘bananas’, ‘persikas’], o
// tokių žodžių yra ir galutinis atsakymas skaitosi 2.
//
//
//
//
//
//
//
//
// let masyvas = ["bananas", "persikas", "abc", "de"];

// let teigiami = masyvas.filter((raide) => raide.length >= 5);

// console.log(teigiami, teigiami.length);
//
//
//
//
//
//
//
//
//
// 25. Susikurkite žodžių masyvą. Raskite kiekvieno žodžio simbolių kiekį. Pvz,
// jeigu masyvas yra [‘obelis’, ‘liepa’, ‘eglė’, ‘uosis’], tai turi gautis [6, 5, 4, 5].
//
//
//
//
//
//
//
//
// let masyvas = ["bananas", "persikas", "abc", "de"];

// let teigiami = masyvas.map((raide) => raide.length);

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 26. Susikurkite masyvą, kur string pavidalu kiekviename elemente būtų sudėti
// vardai ir amžiai. Ištraukite iš tokio masyvo tik vardus. Pvz, jeigu masyvas
// yra [‘Tomas 34’, ‘Jonas 20’, ‘Gintarė 40’, ‘Inga 24’], tai turi gautis [‘Tomas’,
// ‘Jonas’, ‘Gintarė’, ‘Inga’].
//
//
//
//
//
//
//
// let masyvas = ["Tomas 34", "Jonas 20", "Gintarė 40", "Inga 24"];

// let teigiami = masyvas.map((raide) => raide.slice(0, raide.length - 3));

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 27. Susikurkite masyvą, kur string pavidalu kiekviename elemente būtų sudėti
// vardai ir amžiai. Ištraukite iš tokio masyvo tik amžius, juos paverskite į
// skaičius ir raskite bendrą sumą. Pvz, jeigu masyvas yra [‘Tomas 34’, ‘Jonas
// 20’, ‘Gintarė 40’, ‘Inga 24’], tai išrinkus info gausis [34, 20, 40, 24] ir suradus
// sumą turėsime 118.
//
//
//
//
//
//
//
// let masyvas = ["Tomas 34", "Jonas 20", "Gintarė 40", "Inga 24"];

// let teigiami = masyvas
//   .map((raide) => parseInt(raide.slice(raide.length - 2, raide.length)))
//   .reduce((suma, skaiciai) => (suma += skaiciai));

// console.log(teigiami);
//
//
//
//
//
//
//
//
//
// 28. Susikurkite masyvą prekių likučiams saugoti (tik likučių skaičiai). Išrinkite
// visus likučius, kurių liko mažai (mažiau nei 5 vnt.), ties kiekvienu likučiu
// paskaičiuokite kiek trūksta iki ribos. Pvz, jeigu turite masyvą [74, 2, 54, 3,
// 1, 87], išfiltravus liks [2, 3, 1], o paskaičiavus kiek kiekvieno trūksta iki 5,
// gausis [3, 2, 4].
//
//
//
//
//
//
//
//
// let masyvas = [74, 2, 54, 3, 1, 87];

// let teigiami = masyvas.filter((skaicius) => skaicius < 5);

// console.log(
//   teigiami,
//   teigiami.map((x) => 5 - x)
// );
//
//
//
//
//
//
//
//
//
// 29. Susikurkite masyvą studento pažymiams saugoti. Suraskite kiek studentas
// turi gerų pažymių (8 ar daugiau). Pvz, jeigu masyvas yra [7, 8, 10, 6, 5, 9],
// išfiltravus gausis [8, 10, 9], o tokių pažymių jis turi 3.
//
//
//
//
//
//
//
// let masyvas = [7, 8, 10, 6, 5, 9];

// let teigiami = masyvas.filter((skaicius) => skaicius >= 8);

// console.log(teigiami.length);
//
//
//
//
//
//
//
//
//
// 30. Susikurkite žodžių masyvą. Suraskite kiek iš viso šiame masyve per visus
// žodžius yra raidžių a (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu masyvas
// yra [‘bananas’, ‘obelis’, ‘automobilis’], gausis kad yra 4 raidės.
//
//
//
//
//
//
//
// let masyvas = ["bananas", "obelis", "automobilis"];

// let aRaides = 0;

// for (let perejimas of masyvas) {
//   for (let raide of perejimas) {
//     if (raide == "a" || raide == "A") {
//       aRaides++;
//     }
//   }
// }

// console.log(aRaides);

// let raides = masyvas
//   .map((a) => a.toLocaleLowerCase())
//   .map((a) => a.split("").filter((a) => a == "a"))
//   .reduce((a, b) => a + b.length, 0);

// console.log(raides);
