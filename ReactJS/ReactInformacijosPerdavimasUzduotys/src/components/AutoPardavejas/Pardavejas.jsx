import React from "react";
import Automobilis from "./Automobilis";

const Pardavejas = () => {
  let automobilis = [
    { marke: "jonas", modelis: "jooonani", metai: 500 },
    { marke: "jonas2", modelis: "jooonani2", metai: 5000 },
    { marke: "jonas3", modelis: "jooonani3", metai: 700 },
    { marke: "jonas4", modelis: "jooonani4", metai: 900 },
  ];

  return (
    <div>
      <h1>Pardavejas</h1>
      {automobilis.map((aut, i) => (
        <Automobilis key={i} auto={aut}></Automobilis>
      ))}
    </div>
  );
};

export default Pardavejas;
