// document.getElementById("box");   elemento emimas su id
//document.querySelector(".box"); Vieno elemento paėmimas pagal selektorių (class, id ir t.t.)
//document.querySelectorAll(".box"); Visų elementų paėmimas pagal selektorių (visus paima su nurodyta klase ar id )
//
//
//
// Elemento pasiėmimas
//let container = document.querySelector(".container");
// Vėliau... kito ieškojimas jame
//container.querySelector(".box");
//
//
// Elemento pasiėmimas
//let box = document.querySelector(".box");

// Sekantis elementas
//box.nextElementSibling; (tame paciame lygyje)

// Ankstesnis elementas
//box.previousElementSibling; (tame paciame lygyje)

// Tėvinis elementas
//box.parentElement;

//HTML turinio įrašymas į elementą
//document.querySelector('.box').innerHTML = "<p>Text</p>";
//document.querySelector('.box').innerText = "<p>Text</p>"; (parasys tekstu <p>Text</p>)
//document.querySelector('.box').textContet = "<p>Text</p>"; (parasys tekstu <p>Text</p>)

//Teksto keitimas ir gavimas

// Atnaujinti elemento tekstą
//document.querySelector(".button").textContent = "New text";

// Gauti dabartinį elemento tekstą
//document.querySelector(".button").textContent; // Gausim "New text"

// Funkcijos pritaikymas ant visų elementų

// document.querySelectorAll(".box").forEach(function(box) {
// box.style.display = "none";
// })

//
// Reagavimas į veiksmus (paspaudimai ir pan.)

// document.querySelector(".button").addEventListener("click", (e) => {
// /* ... */
// });

// document.querySelector(".button").addEventListener("mouseenter", (e)
// => {
// /* ... */
// });

// document.addEventListener("keyup", (e) => { /* ... */ }); (e yra objektas kuriame yra daug informacijos su kuria galima naudotis )

//
//
//Elemento sukūrimas ir teksto keitimas
// let element = document.createElement("div");
// element.textContent = "Text";
// Pridėti sukurtą elementą į .container
// document.querySelector(".container").appendChild(element);

//Elementų stiliavimas
// let box = document.querySelector(".box");
// box.style.color = "#000";
// box.style.backgroundColor = "red";

//JavaScript vykdymas tik viskam užsikrovus (1)
// window.addEventListener("load", function(){
// Daryti dalykus,  }

//
//// Pridėti klasę elementui
// box.classList.add("focus");

// // Pašalinti klasę nuo elemento
// box.classList.remove("focus");

// // Perjunginėti šio elemento klasę
// box.classList.toggle("focus");

// element.classList.add("error");  (prideda klase prie elemento ir taip galima aprasyti css faile ta kalsę ir nedėlioti stilių atskirai)
