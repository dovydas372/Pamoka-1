import React from "react";

const Studentas = ({ studentas }) => {
  return (
    <div>
      <h2>Studentas</h2>
      <p>{studentas.vardas}</p>
      <p>{studentas.pavarde}</p>
    </div>
  );
};

export default Studentas;
