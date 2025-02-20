let pirmasDiv = document.getElementById("pirmas");
let antasDiv = document.getElementById("antras");
let trečiasDiv = document.getElementById("trecias");
let body = document.getElementById("body");

pirmasDiv.addEventListener("click", () => {
  pirmasDiv.textContent = "kazkas parasyta";
  pirmasDiv.style.backgroundColor = "red";
  pirmasDiv.style.alignContent = "center";
  pirmasDiv.style.textAlign = "center";
  antasDiv.textContent = "";
  antasDiv.style.backgroundColor = "bisque";
  trečiasDiv.textContent = "";
  trečiasDiv.style.backgroundColor = "bisque";
});
antasDiv.addEventListener("click", () => {
  antasDiv.textContent = "kazkassasdas parasyta";
  antasDiv.style.backgroundColor = "red";
  antasDiv.style.alignContent = "center";
  antasDiv.style.textAlign = "center";
  pirmasDiv.textContent = "";
  pirmasDiv.style.backgroundColor = "bisque";
  trečiasDiv.textContent = "";
  trečiasDiv.style.backgroundColor = "bisque";
});
trečiasDiv.addEventListener("click", () => {
  trečiasDiv.textContent = "kazkas parasyta";
  trečiasDiv.style.backgroundColor = "red";
  trečiasDiv.style.alignContent = "center";
  trečiasDiv.style.textAlign = "center";
  pirmasDiv.textContent = "";
  pirmasDiv.style.backgroundColor = "bisque";
  antasDiv.textContent = "";
  antasDiv.style.backgroundColor = "bisque";
});
