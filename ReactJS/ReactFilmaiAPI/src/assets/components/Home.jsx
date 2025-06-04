import { NavLink, Outlet } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [puslapisFilmu, setPuslapisFilmu] = useState([]);
  const [puslapis, setPuslapis] = useState(1);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f3224de920dc986e671d6fd0ec82fb41&page=${puslapis}`
      )
      .then((response) => {
        setPuslapisFilmu(response.data.results);
      })
      .catch((error) => {
        console.error("Klaida gaunant duomenis:", error);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=f3224de920dc986e671d6fd0ec82fb41`
      )
      .then((response) => {
        setGenres(response.data.genres);
        console.log(response.data.genres, "genres");
      })
      .catch((error) => {
        console.error("Klaida gaunant duomenis:", error);
      });
  }, []);

  return (
    <>
      <div>
        <strong>Filmai puslapis: </strong> {puslapis}
      </div>
      <div className="filmai">
        {puslapisFilmu.map((filmas, index) => (
          <div key={index} className="filmasCard">
            <div className="pavadinimas">
              <strong>Pavadinimas</strong> {filmas.title}{" "}
            </div>
            <div className="filmoPav">
              <img
                src={`https://image.tmdb.org/t/p/original${filmas.poster_path}`}
                alt=""
              />
            </div>

            <div className="overview">{filmas.overview}</div>
            <div className="genre"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
