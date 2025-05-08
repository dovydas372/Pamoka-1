import { useState } from "react";

const PapildomiPriedai = () => {
  const [priedai, setPriedai] = useState([]);

  const pasirinkti = (pasirinkimas) => {
    let naujaReiksme = priedai;

    if (priedai.includes(pasirinkimas)) {
      naujaReiksme = priedai.filter((priedas) => pasirinkimas !== priedas);
    } else {
      setPriedai([...priedai, pasirinkimas]);
    }
    console.log(naujaReiksme);
    setPriedai(naujaReiksme);
  };

  const paketai = [
    { pavadinimas: "paketas 1", kaina: 200 },
    { pavadinimas: "paketas 2", kaina: 500 },
    { pavadinimas: "paketas 3", kaina: 600 },
  ];

  return (
    <div className="card">
      <h3>Papildomi priedai</h3>
      <div className="options ">
        {paketai.map((paketass, index) => (
          <div
            key={index}
            className={`option ${priedai.includes(index) ? "selected" : ""}`}
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

export default PapildomiPriedai;
