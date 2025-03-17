async function fetchJokes() {
  const response = await fetch(
    "https://api.tvmaze.com/search/shows?q=spiderman"
  );
  const data = await response.json();

  return data;
}

fetchJokes()
  .then((data) => {
    const moviesConteiner = document.createElement("div");
    moviesConteiner.className = "movies-container";
    for (const item of data) {
      const title = item.show.className;
      const year = item.show.premiered.slice(0, -6);
      const imgLink = item.show.image.medium;
      const genres = item.show.genres;
      const summary = item.show.summary;

      const movieDiv = document.createElement("div");
      movieDiv.className = "movie";
      movieDiv.innerHTML = `
      <img src="${imgLink}" alt="${title}">
      <h3>${title} (${year})</h3>
      <p>Genres: ${genres.join(", ")}</p>
      <p>${summary}</p>`;

      moviesConteiner.appendChild(movieDiv);
    }
    document.body.appendChild(moviesConteiner);
  })
  .catch((e) => console.log(e));
