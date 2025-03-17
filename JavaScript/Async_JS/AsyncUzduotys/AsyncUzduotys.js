//1. Sukurkite JS funkciją, kurios parametras yra callback funkcija. Jūsų funkcija
// turėtų vykdyti callback funkciją po 2s.

//
//
//CALL BACK FUNKCIJA YRA KAI ISKVIECIAME SUKURTA FUNKCIJA IR I JOS KINTAMJI PADUODAM FUNKCIJA

//// function funkcija1(a) {
//   setTimeout(a, 5000);
// }

// funkcija1(() => {
//   console.log("praejo 5 sec");     <--- CALL BACK FUNKCIJA
// });
//
//
//
//
//
//
// SU FETCH I ELEMENTA REIKE KREIPTIS DU KARTUS SU .THEN
// PIRMAS SU THEN.JSON (PAVERCIA IS BINARY KODO I MUMS SUPRANTAMA TEKSTA)
// IR ANTRA KART TIESIOG .THEN()
//
//
//
//

// function funkcija1(a) {
//   setTimeout(a, 5000);
// }

// funkcija1(() => {
//   console.log("praejo 5 sec");
// });

// funkcija1(() => {
//   console.log("praejo 5 sec");
// });

// funkcija1(() => {
//   console.log("praejo 5 sec");
// });

// 2. Sukurkite JS funkciją, kuri daro HTTP Request užklausą ir grąžina pažadą su
// duomenimis.

// function funkcija2(url) {
//   fetch(url)
//     .then((a) => a.json())
//     .catch((b) => {
//       throw "error";
//     });
// }

// function gautiDuomenys() {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("kazkokia klaida");
//       }
//     });
//     request.open("GET", "AsyncUzduotys.json");
//     request.send();
//   });
// }

// gautiDuomenys().then((a) => {
//   console.log(a);
// });
// 3. Sukurti funkciją(1), kuri kaip parametrus priimtų skaičių masyvą ir callback
// funkciją(2). Funkcija(1) turėtų iteruoti per masyvą ir siųsti kiekvieną jos narį
// callback funkcijai(2). Callback funkcijos esmė - patikrinti ar gautas skaičius yra
// lyginis ar nelyginis ir atitinkamą informaciją išvesti į konsolę.
// Funkcija turėtų būti iškviečiama taip (pavadinimai gali būti kitokie):
// pirmojiFunkcija(masyvas, callbackFunkcija)

// let masyvas = [1, 2, 3, 4, 5];

// function funkcija1(masyvas, callback) {
//   for (let skaiciai of masyvas) {
//     callback(skaiciai);
//   }
// }

// function funkcijaCallback(a) {
//   if (a % 2 === 0) {
//     console.log(a, "yra lyginis");
//   } else {
//     console.log(a, "yra nelyginis");
//   }
// }

// funkcija1(masyvas, funkcijaCallback);

// 4. Sukurkite funkciją, kuri priima masyvą (kuris užpildytas "string" tipo
//     reikšmėmis(žodžiais)) ir callback funkciją. Funkcija turėtų iteruoti per masyvą ir
//     nusiųsti kiekvieną stringą esantį masyve callback funckijai. Callback funkcija turi
//     grąžinti atsiųsto "string" ilgį.
//     - susikurti funkciją patikrinkZodzioIlgi(masyvas, callbackFunkcija)
//     - funkcijos patikrinkZodzioIlgi esmė - panaudoti foreach ir kiekvienam masyvo
//     nariui iškviest funkciją koksIlgis(string)

// let masyvas = ["obuolys", "bananas", "vyšnia"];

// function funkcija1(masyvasSTR, funkcija) {
//   for (let zodis of masyvasSTR) {
//     funkcija(zodis);
//   }
// }

// function patikrintiIlgį(a) {
//   console.log(a, "zodzio Ilgis", a.length);
// }

// funkcija1(masyvas, patikrintiIlgį);

// 5. Sukurkite funkciją, kuri kaip argumentus priima masyvą, sudarytą iš objektų ir
// callback funkciją. Funkcija turėtų iteruoti per masyvą ir nusiųsti kiekvieną ten
// esantį objektą (tarkim tai automobilis, turintis šias properties: rida, markė,
// modelis, gamybos metai ir kaina (bet galite susikurti ir savo nuožiūra)) callback
// funkcijai. Callback funkcija turėtų grąžinti naują objektą, kuriame būtų tik
// atrinktos objekto properties, tarkim tik markė ir modelis)

// const zmones = [
//   {
//     vardas: "Jonas",
//     amzius: 25,
//     miestas: "Vilnius",
//     profesija: "Programuotojas",
//   },
//   { vardas: "Eglė", amzius: 30, miestas: "Kaunas", profesija: "Dizainerė" },
//   {
//     vardas: "Marius",
//     amzius: 28,
//     miestas: "Klaipėda",
//     profesija: "Inžinierius",
//   },
// ];

// function funkcija(masyvas, funkcija) {
//   const zmones2
//   for (let objektas of masyvas) {
//     funkcija(objektas);
//   }
// }

// function funkcija2(a) {
//   let b = { vardas: a.vardas, amzius: a.amzius };
//   console.log(b);
//   return b;
// }

// funkcija(zmones, funkcija2);

// 6. Sukurkite funkciją, kuri priims parametrą isUserLogedIn (reikšmė gali būti true
//     arba false). Jūsų funkcijos viduje, naudojantis Promise konstruktoriumi, sukursite
//     naują promise objektą, kuris tikrins ar isUserLogedIn yra true ar false, jeigu
//     paduotas parametras ar false, jūsų sukurtas promise turėtų reject’inti užklausą,
//     kitu atveju - resolvinam ir grąžinam pasirinktą pranešimą. Iškvieskite tą funkciją
//     naudojantis then ir catch, o gautą rezultatą atvaizduokite konsolėje.

// const getData = async (url) => {
//   const response = await fetch(url);
//   const duomenys = await response.json();

//   if (duomenys === true) {
//     return duomenys;
//   } else {
//     throw new Error("aaaa");
//   }
// };

// getData("AsyncUzduotys.json")
//   .then((b) => {
//     console.log(b);
//   })
//   .catch((a) => {
//     console.log(a);
//   });

// function gautiDuomenys() {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     const data = JSON.parse(request.responseText);
//     request.addEventListener("readystatechange", () => {
//       if (true) {
//         resolve(data);
//       } else {
//         reject("vartotojas neprisijunges");
//       }
//     });
//     request.open("GET", "AsyncUzduotys.json");
//     request.send();
//   });
// }

// gautiDuomenys().then((a) => {
//   console.log(a);
// });
//   7. Sukurkite async funkciją, kuri priimtų parametrą "age". Funkcijos viduje
// padarykite patikrinimą ar "age" yra paduotas ir ar jis yra skaičius - priešingu
// atveju iškvieskite klaidą (throw). Toliau tikrinkite ar amžius yra daugiau nei 18,
// jeigu taip, grąžinkite, kad “vartotojas gali laikyti vairuotojo egzaminą", priešingu
// atveju iškvieskite klaidą (throw) ir parašykite, kad "jūsų amžius turi būti daugiau
// nei 18". Iškvieskite šią funkciją naudojantis then ir catch.

async function kazkokiaFunkcija(age) {
  if (age && typeof age === "number") {
    if (age > 18) {
      return "Vartotojas gali laikyti vairuotojo egzamina";
    } else {
      throw new Error("Jusu amzius turi buti daugiau nei 18");
    }
  } else {
    throw new Error("amzius nera skaicius");
  }
}

kazkokiaFunkcija("18")
  .then((rezultatas) => {
    console.log("rodau kita langa kur gali pasirinkt egzamino langa");
  })
  .catch((a) => {
    console.log(a);
  });

// THROW ATSTOJA REJECT

// RETURN SEKMES ATVIJU

//7 UZDUOTIES FUNKCIJA NAUDOJAMA ASYNCRONINIAM FUNKCIJOMS (JEI NEREIKIA LAUKTI DUOMENU)
