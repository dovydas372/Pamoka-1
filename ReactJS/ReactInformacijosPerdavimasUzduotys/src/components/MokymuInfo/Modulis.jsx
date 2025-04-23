import React from "react";

const Modulis = ({ modulis }) => {
  const { pavadinimas, trukme } = modulis;

  return (
    <div>
      <h2>Modulis</h2>
      <p>{pavadinimas}</p>
      <p>{trukme}</p>
    </div>
  );
};

export default Modulis;
