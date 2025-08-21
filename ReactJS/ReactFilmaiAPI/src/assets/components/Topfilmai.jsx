import { useState, useEffect } from "react";
import Filmai from "./Filmai";
import axios from "axios";

const Topfilmai = () => {
  const [puslapisFilmu, setPuslapisFilmu] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=f3224de920dc986e671d6fd0ec82fb41`
      )
      .then((response) => {
        setPuslapisFilmu(response.data.results.slice(0, 10));
      })
      .catch((error) => {
        console.error("Klaida gaunant duomenis:", error);
      });
  }, []);

  return (
    <>
      <Filmai filmai={puslapisFilmu} atsinaujino={() => {}}></Filmai>
    </>
  );
};

export default Topfilmai;
