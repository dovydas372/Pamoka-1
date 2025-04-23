import React from "react";
import Modulis from "./Modulis";

const Mokymai = () => {
  const moduliai = [
    { pavadinimas: "HTML", trukme: 10 },
    { pavadinimas: "CSS", trukme: 12 },
    { pavadinimas: "JavaScript", trukme: 20 },
    { pavadinimas: "React", trukme: 18 },
    { pavadinimas: "Node.js", trukme: 15 },
  ];

  return (
    <div>
      <h1>Mokymai</h1>
      {moduliai.map((mod, i) => (
        <Modulis key={i} modulis={mod}></Modulis>
      ))}
    </div>
  );
};

export default Mokymai;
