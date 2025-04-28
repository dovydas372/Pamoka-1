import { useState } from "react";
import ZodziuIvedimas from "./ZodziuIvedimas";

const ZodziuBendras = () => {
  const [ilgiausias, setIlgiausias] = useState("");
  const [zodziai, setZodziai] = useState([]);
  const gautiZodi = (zodis) => {
    setZodziai([zodis, ...zodziai]);
    let zodzioIlgis = 0;
    let reikiamasZodis = "";
    zodziai.forEach((zodis) => {
      if (zodis.length > zodzioIlgis) {
        zodzioIlgis = zodis.length;
        reikiamasZodis = zodis;
      }
    });

    setIlgiausias(reikiamasZodis);
  };

  const ilgiausiasZodis = () => {};

  return (
    <div>
      <h1>ZodziuBendras</h1>

      {zodziai.length > 0 ? (
        <ul>
          {zodziai.map((zodis, index) => (
            <li key={index}>{zodis}</li>
          ))}
        </ul>
      ) : (
        <p>Deja, nera informacijos</p>
      )}

      {zodziai.length > 0 && <p>ilgiausias zodis: {ilgiausias}</p>}
      <ZodziuIvedimas data={gautiZodi}></ZodziuIvedimas>
    </div>
  );
};

export default ZodziuBendras;
