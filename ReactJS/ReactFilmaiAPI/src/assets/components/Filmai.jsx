import { useState, useEffect } from "react";

const Filmai = ({ filmai, genres, atsinaujino }) => {
  // const [issaugotasID, setIssaugotasID] = useState(() => {
  //   const saugoti = localStorage.getItem("moviesID");
  //   return saugoti ? JSON.parse(saugoti) : [];
  // });

  const saveToLocalStorage = (filmas) => {
    if (!filmai.map((filmoID) => filmoID.id).includes(filmas.id)) {
      atsinaujino([filmas, ...filmai]);
      localStorage.setItem("moviesID", JSON.stringify([filmas, ...filmai]));
    } else {
      let filtruotiID = filmai.filter((filmoID) => filmoID.id != filmas.id);
      atsinaujino([...filtruotiID]);
      localStorage.setItem("moviesID", JSON.stringify([...filtruotiID]));
    }
  };

  // useEffect(() => {
  //   // localStorage.setItem("moviesID", JSON.stringify(issaugotasID));
  // }, [issaugotasID]);

  return (
    <div className="filmai">
      {filmai.map((filmas, index) => (
        <div key={index} className="filmasCard">
          <div></div>
          <div className="pavadinimas">
            <strong> Nr: {index + 1} Pavadinimas: </strong> {filmas.title}{" "}
          </div>

          <div className="poPav">
            <div className="filmoPav">
              <img
                src={`https://image.tmdb.org/t/p/original${filmas.poster_path}`}
                alt=""
              />
            </div>

            <div className="overview">
              {filmas.overview}
              {genres && <div className="genre">{genres}</div>}
              {!filmai.includes(filmas.id) ? (
                <button
                  className="prideti"
                  onClick={() => saveToLocalStorage(filmas)}
                >
                  Pridėti
                </button>
              ) : (
                <button
                  className="prideti"
                  onClick={() => saveToLocalStorage(filmas)}
                >
                  Išimti
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filmai;
