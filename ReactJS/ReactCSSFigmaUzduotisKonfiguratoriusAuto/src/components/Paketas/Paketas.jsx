import { useState } from "react";
import "./Paketas.css";
const Paketas = () => {
  const [paketas, setPaketas] = useState(null);
  const pasirinkti = (pasirinkimas) => {
    setPaketas(pasirinkimas);
  };

  const paketai = [
    { pavadinimas: "paketas 1", kaina: 200 },
    { pavadinimas: "paketas 2", kaina: 500 },
    { pavadinimas: "paketas 3", kaina: 600 },
  ];

  return (
    <div className="card">
      <h3>Pagrindinis paketas</h3>
      <div className="options ">
        {paketai.map((paketass, index) => (
          <div
            key={index}
            className={`option ${paketas === index ? "selected" : ""}`}
            onClick={() => pasirinkti(index)}
          >
            <div className="title">{paketass.pavadinimas}</div>
            <div className="price">{paketass.kaina}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paketas;
