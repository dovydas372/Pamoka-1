import { useState } from "react";
import "./Salonas.css";
const Salonas = (props) => {
  const [Salonas, setSalonas] = useState(null);

  const pasirinkti = (pasirinkimas) => {
    props.pasirinkimasFn(salonai[pasirinkimas].kaina);

    setSalonas(pasirinkimas);
  };

  const salonai = [
    { pavadinimas: "Medžiaga", kaina: 0 },
    { pavadinimas: "Odinis", kaina: 200 },
  ];

  return (
    <div className="card">
      <h3>Salonas</h3>
      <div className="options ">
        {salonai.map((Salonass, index) => (
          <div
            key={index}
            className={`option ${Salonas === index ? "selected" : ""}`}
            onClick={() => pasirinkti(index)}
          >
            <div className="title">{Salonass.pavadinimas}</div>
            <div className="price">{Salonass.kaina}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Salonas;
