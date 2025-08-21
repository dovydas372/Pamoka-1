import React from "react";

const Darbuotojas = ({ darbuotojas }) => {
  const { vardas, pavarde, kaledinisBonusas } = darbuotojas;

  const funkcija = (a) => {
    if (a >= 600) {
      if (a > 1000) {
        return `jau kazkas geriau`;
      } else {
        return `bent ant kebabo`;
      }
    } else {
      return `mazai`;
    }
  };

  return (
    <div>
      <h2>Darbuotojas</h2>
      <p>{vardas}</p>
      <p>{pavarde}</p>
      <p>{kaledinisBonusas}</p>
      <p>{funkcija(kaledinisBonusas)}</p>
    </div>
  );
};

export default Darbuotojas;
