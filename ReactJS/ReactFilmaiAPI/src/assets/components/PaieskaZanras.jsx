import { useState, useEffect } from "react";
import axios from "axios";
import Filmai from "./Filmai";

const PaieskaZanras = () => {
  const [genres, setGenres] = useState([]);
  const [selcetedGenre, setSelectedGenre] = useState();
  const [selectedGenreName, setSelectedGenreName] = useState();
  const [puslapisFilmu, setPuslapisFilmu] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=f3224de920dc986e671d6fd0ec82fb41`
      )
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.error("Klaida gaunant duomenis:", error);
      });
  }, []);

  useEffect(() => {
    if (selcetedGenre) {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?with_genres=${selcetedGenre}language=en&api_key=f3224de920dc986e671d6fd0ec82fb41`
        )
        .then((response) => {
          setPuslapisFilmu(response.data.results);
          console.log(response.data.results);
        })
        .catch((error) => {
          console.error("Klaida gaunant duomenis:", error);
        });
    }
  }, [selcetedGenre]);

  const filterByGenreFN = (id, name) => {
    setSelectedGenre(id);
    setSelectedGenreName(name);
  };

  return (
    <>
      <div className="filmuGenres">
        <div className="genresHeader">Pasirinkite filmo žanrą:</div>
        <div className="genresHeader">
          Dabar pasirinktas:{" "}
          {selectedGenreName ? `${selectedGenreName}` : "joks"}
        </div>
        <div className="genresList">
          {genres && (
            <div>
              {genres.map((genre) => (
                <button
                  onClick={() => filterByGenreFN(genre.id, genre.name)}
                  key={genre.id}
                  className="genreButton"
                >
                  {genre.name}
                </button>
              ))}{" "}
            </div>
          )}
        </div>
      </div>
      <div className="filmaiList">
        <Filmai
          filmai={puslapisFilmu}
          genres={selectedGenreName}
          atsinaujino={() => {}}
        ></Filmai>
      </div>
    </>
  );
};

export default PaieskaZanras;
