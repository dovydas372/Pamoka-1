import React from "react";

const Pazymis = ({ pazymys, studentas }) => {
  const { vardas, pavarde, mokykla, programa } = studentas;

  return (
    <div>
      <h2>Pazymis</h2>
      <p>{vardas}</p>
      <p>{pavarde}</p>
      <p>{mokykla}</p>
      <p>{programa}</p>
      <p>{pazymys}</p>
    </div>
  );
};

export default Pazymis;
