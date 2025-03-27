const getStoreProducts = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products/");
    console.log(res.data);
    const moviesConteiner = document.createElement("div");
    moviesConteiner.className = "prekiuKonteineris";
    for (let item of res.data) {
      const title = item.title;
      const description = item.description;
      const kaina = item.price;
      const imgLink = item.image;

      const movieDiv = document.createElement("div");
      movieDiv.className = "preke";
      movieDiv.innerHTML = `
        <img src="${imgLink}" alt="${title}">
        <h3>${title} (${kaina})</h3>
        <p>${description}</p>`;

      moviesConteiner.appendChild(movieDiv);
    }
    document.body.appendChild(moviesConteiner);
  } catch (error) {
    console.log(error);
  }
};

getStoreProducts();
