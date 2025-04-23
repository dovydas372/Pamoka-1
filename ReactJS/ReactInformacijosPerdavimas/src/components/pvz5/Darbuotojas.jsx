import React from "react";

const Darbuotojas = ({ darbuotojas }) => {
  return (
    <div>
      <h2>Darbuotojas</h2>
      <p>Yra {darbuotojas.vardas}</p>
      <p>{darbuotojas.pavarde}</p>
      <p> {darbuotojas.amzius}</p>
    </div>
  );
};

export default Darbuotojas;
