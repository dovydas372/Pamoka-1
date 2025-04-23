import React from "react";
import Automobilis from "./Automobilis";

const Servisas = () => {
  let automobiliai = [
    { marke: "audi", modelis: "a6" },
    { marke: "audi2", modelis: "a61" },
    { marke: "audi3", modelis: "a62" },
    { marke: "audi4", modelis: "a63" },
    { marke: "audi5", modelis: "a64" },
  ];
  return (
    <div>
      <h1>Servisas</h1>
      {automobiliai.map((masina, i) => (
        <Automobilis key={i} auto={masina}></Automobilis>
      ))}
    </div>
  );
};

export default Servisas;
