let mygtukas = document.getElementById("button");
let tekstoLangas = document.getElementById("langas");
let tekstas;

async function fetchJokes() {
  try {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: { Accept: "application/json" },
    });
    const joke = await response.json();
    return joke;
  } catch (e) {
    throw e;
  }
}

mygtukas.onclick = () => {
  fetchJokes()
    .then((data) => {
      tekstoLangas.textContent = data.joke;
    })
    .catch((e) => console.log("Klaida: nepridėjote header."));
};
