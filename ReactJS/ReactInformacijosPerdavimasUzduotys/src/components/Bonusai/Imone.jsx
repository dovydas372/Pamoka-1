import React from "react";
import Darbuotojas from "./Darbuotojas";

const Imone = () => {
  let darbuotojai = [
    { vardas: "jonas", pavarde: "jooonani", kaledinisBonusas: 500 },
    { vardas: "jonas2", pavarde: "jooonani2", kaledinisBonusas: 5000 },
    { vardas: "jonas3", pavarde: "jooonani3", kaledinisBonusas: 700 },
    { vardas: "jonas4", pavarde: "jooonani4", kaledinisBonusas: 900 },
  ];

  return (
    <div>
      <h1>Imone</h1>
      {darbuotojai.map((darb, i) => (
        <Darbuotojas key={i} darbuotojas={darb}></Darbuotojas>
      ))}
    </div>
  );
};

export default Imone;
