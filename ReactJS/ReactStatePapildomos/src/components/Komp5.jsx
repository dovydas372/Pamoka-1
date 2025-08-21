import { useState } from "react";

const Komp5 = () => {
  const [klaida, setKlaida] = useState("-----");

  const tikrinti = (e) => {
    let ivestasTekstas = e.target.value;
    if (ivestasTekstas.includes("@")) {
      setKlaida("El. paštas atrodo gerai");
    } else {
      setKlaida("El. paštas ivestas neteisingai");
    }
  };

  return (
    <div>
      <h1>Komp5</h1>
      <h2>El pasto tikrinimas</h2>
      <input onMouseLeave={tikrinti} type="email" />
      <p>{klaida}</p>
    </div>
  );
};

export default Komp5;
