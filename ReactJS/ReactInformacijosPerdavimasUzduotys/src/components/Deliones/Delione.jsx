import React from "react";

const Delione = ({ delione }) => {
  const { pavadinimas, kiekis, plotis, aukstis } = delione;

  const funkcija = (a) => {
    if (a >= 500) {
      if (a > 1000) {
        return `Sunki`;
      } else {
        return `Vidutine`;
      }
    } else {
      return `Lengva`;
    }
  };

  return (
    <div>
      <h2>Delione</h2>
      <p>
        {pavadinimas}: {kiekis} - {funkcija(kiekis)}
      </p>
    </div>
  );
};

export default Delione;
