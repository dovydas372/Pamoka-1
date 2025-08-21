import React from "react";

const Preke = (props) => {
  return (
    <div>
      <h2>preke</h2>
      <h3>{props.pavadinimas}</h3>
      <p>
        prekyboje turime: <strong>{props.kiekis}</strong>
      </p>
      <p>
        Kaina <strong>{props.kaina} Eur</strong>
      </p>
    </div>
  );
};

export default Preke;
