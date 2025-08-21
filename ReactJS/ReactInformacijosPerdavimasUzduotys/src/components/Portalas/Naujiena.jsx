import React from "react";

const Naujiena = ({ naujiena }) => {
  const funkcija = (a) => {
    if (a >= 1000) {
      return `|HOT|`;
    }
  };

  return (
    <div>
      <h2>Naujiena</h2>
      <p>
        {naujiena.pavadinimas} {funkcija(naujiena.perziuros)}
      </p>
      <p>{naujiena.perziuros}</p>
      <p>{naujiena.tekstas}</p>
    </div>
  );
};

export default Naujiena;
