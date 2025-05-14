import { useState } from "react";
import "./Spalva.css";
const Spalva = (props) => {
  const [Spalva, setSpalva] = useState(null);

  const pasirinkti = (pasirinkimas) => {
    props.pasirinkimasFn(spalvos[pasirinkimas].kaina);
    setSpalva(pasirinkimas);
  };

  const spalvos = [
    { pavadinimas: "Spalva 1", kaina: 200 },
    { pavadinimas: "Spalva 2", kaina: 500 },
    { pavadinimas: "Spalva 3", kaina: 600 },
    { pavadinimas: "Spalva 4", kaina: 200 },
    { pavadinimas: "Spalva 5", kaina: 500 },
    { pavadinimas: "Spalva 6", kaina: 600 },
  ];

  return (
    <div className="card">
      <h3>Spalva</h3>
      <div className="options ">
        {spalvos.map((Spalvas, index) => (
          <div
            key={index}
            className={`option ${Spalva === index ? "selected" : ""}`}
            onClick={() => pasirinkti(index)}
          >
            <div className="title">{Spalvas.pavadinimas}</div>
            <div className="price">{Spalvas.kaina}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spalva;
