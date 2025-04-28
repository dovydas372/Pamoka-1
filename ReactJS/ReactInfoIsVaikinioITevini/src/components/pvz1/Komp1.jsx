import React from "react";
import Komp2 from "./Komp2";
import { useState } from "react";

const Komp1 = () => {
  const [Pasirinkta, setPasirinkta] = useState("");

  const pagaunamReiksme = (argumentas) => {
    setPasirinkta(argumentas);
  };
  let miestai = ["Vilnius", "Kaunas", "Klaipeda"];
  return (
    <div style={{ border: "1px solid red" }}>
      <h1>Pasirinkimas</h1>
      {miestai.map((miestas, index) => (
        <div key={index} style={{ border: "1px solid green" }}>
          <Komp2 miestas={miestas} griztaReiksme={pagaunamReiksme}></Komp2>
        </div>
      ))}

      <p>Pasirinktas miestas: {Pasirinkta}</p>
    </div>
  );
};

export default Komp1;
