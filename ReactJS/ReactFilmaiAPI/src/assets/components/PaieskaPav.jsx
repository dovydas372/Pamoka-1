import { useState, useEffect } from "react";
import axios from "axios";
import Filmai from "./Filmai";
const PaieskaPav = () => {
  const [ivestis, setIvestis] = useState("");
  const [puslapisFilmu, setPuslapisFilmu] = useState("");

  const InputChange = (event) => {
    let array = event.target.value;
    if (array.length > 2) {
      setIvestis(event.target.value);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?query=${ivestis}&api_key=f3224de920dc986e671d6fd0ec82fb41`
      )
      .then((response) => {
        setPuslapisFilmu(response.data.results);
      })
      .catch((error) => {
        console.error("Klaida gaunant duomenis:", error);
      });
  }, [ivestis]);

  return (
    <>
      <div>
        <label htmlFor="paieska">Paieška: </label>
        <input
          name="paieska"
          type="text"
          placeholder="Įveskite filmo pavadinimą"
          onInput={InputChange}
        />
      </div>
      <div className="FilmaiRezultatai">
        {ivestis && <Filmai filmai={puslapisFilmu}></Filmai>}
      </div>
    </>
  );
};

export default PaieskaPav;
