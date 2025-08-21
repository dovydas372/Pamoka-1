import React from "react";

const Role = ({ pavadinimas, kiekis }) => {
  const funkcija = (a) => {
    if (a >= 20) {
      return `kiekis yra labai didelis`;
    } else {
      return `kiekis nera didelis`;
    }
  };
  return (
    <div>
      <h2>Role</h2>
      <p>{pavadinimas}</p>
      <p>Kiekis: {kiekis}</p>
      <p>{funkcija(kiekis)}</p>
    </div>
  );
};

export default Role;
