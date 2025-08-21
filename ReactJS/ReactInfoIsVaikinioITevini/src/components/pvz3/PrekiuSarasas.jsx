import React from "react";

const PrekiuSarasas = (props) => {
  const data = props.data;

  const perkam = (preke) => {
    props.nupirko(preke);
  };

  return (
    <div>
      <h2>PrekiuSarasas</h2>
      {data.map((preke) => (
        <div>
          <h3>{preke.pavadinimas}</h3>
          <p>Kiekis: {preke.kiekis}</p>
          <p>Kaina: {preke.kaina} eur</p>
          <button onClick={() => perkam(preke)}>Nupirkti</button>
        </div>
      ))}
    </div>
  );
};

export default PrekiuSarasas;
