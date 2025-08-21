import { NavLink, Outlet } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Filmai from "./Filmai";
const Home = () => {
  const [puslapisFilmu, setPuslapisFilmu] = useState([]);
  const [puslapis, setPuslapis] = useState(1);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=f3224de920dc986e671d6fd0ec82fb41`
      )
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.error("Klaida gaunant duomenis:", error);
      });
  }, []);

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
  }, [puslapis]);

  const forwardFn = () => {
    setPuslapis(Number(puslapis) + 1);
  };

  const backFn = () => {
    if (puslapis > 0) {
      setPuslapis(Number(puslapis) - 1);
    }
  };

  return (
    <>
      <div className="visiFilmaiPuslapiai">
        <strong>Filmai puslapis: </strong> {puslapis}
        <button onClick={backFn}>Back</button>
        <button onClick={forwardFn}>Forward</button>
      </div>
      <div>
        <Filmai filmai={puslapisFilmu} atsinaujino={() => {}}></Filmai>
      </div>
      <div className="visiFilmaiPuslapiai">
        <strong>Filmai puslapis: </strong> {puslapis}
        <button>Back</button>
        <button onClick={forwardFn}>Forward</button>
      </div>
    </>
  );
};

export default Home;
