import React from "react";

const Filmai = ({ filmai, genres }) => {
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filmai;
