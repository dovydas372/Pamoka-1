import React from "react";
import Delione from "./Delione";

const HobiuParduotuve = () => {
  let deliones = [
    { pavadinimas: "Miesto panorama", kiekis: 500, plotis: 50, aukstis: 35 },
    { pavadinimas: "Gyvūnų pasaulis", kiekis: 1000, plotis: 70, aukstis: 50 },
    { pavadinimas: "Gamtos peizažas", kiekis: 750, plotis: 60, aukstis: 40 },
    { pavadinimas: "Kosmoso nuotykiai", kiekis: 1500, plotis: 80, aukstis: 60 },
  ];
  return (
    <div>
      <h1>HobiuParduotuve</h1>
      {deliones.map((delione, i) => (
        <Delione key={i} delione={delione}></Delione>
      ))}
    </div>
  );
};

export default HobiuParduotuve;
