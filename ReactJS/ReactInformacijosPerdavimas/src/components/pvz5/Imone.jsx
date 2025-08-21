import React from "react";
import Darbuotojas from "./Darbuotojas";

const Imone = () => {
  let darbuotojas = {
    vardas: "Jonas",
    pavarde: "Jonaitis",
    amzius: 25,
    pareigos: "Programuotojas",
    atlyginimas: 2000,
  };
  let darbuotojas2 = {
    vardas: "onas",
    pavarde: "onaitis",
    amzius: 35,
    pareigos: "Programuotojas",
    atlyginimas: 2000,
  };

  return (
    <div>
      <h1>Imone</h1>
      <Darbuotojas darbuotojas={darbuotojas}></Darbuotojas>
      <Darbuotojas darbuotojas={darbuotojas2}></Darbuotojas>
    </div>
  );
};

export default Imone;
