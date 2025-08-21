import React from "react";

const Paslauga = ({ pavadinimas, kategorija }) => {
  return (
    <div>
      <h2>Paslauga:</h2>
      <h2>{pavadinimas}</h2>
      <p>{kategorija}</p>
    </div>
  );
};

export default Paslauga;
