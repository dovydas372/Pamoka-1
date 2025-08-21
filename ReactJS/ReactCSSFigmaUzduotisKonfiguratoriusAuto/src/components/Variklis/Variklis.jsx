import { useState } from "react";

const Variklis = (props) => {
  const [variklis, setVariklis] = useState(null);

  const pasirinkti = (pasirinkimas) => {
    props.pasirinkimasFn(varikliai[pasirinkimas].kaina);
    setVariklis(pasirinkimas);
  };

  const varikliai = [
    { pavadinimas: "variklis 1", kaina: 200 },
    { pavadinimas: "variklis 2", kaina: 500 },
    { pavadinimas: "variklis 3", kaina: 600 },
  ];

  return (
    <div className="card">
      <h3>Variklis</h3>
      <div className="options ">
        {varikliai.map((varikliss, index) => (
          <div
            key={index}
            className={`option ${variklis === index ? "selected" : ""}`}
            onClick={() => pasirinkti(index)}
          >
            <div className="title">{varikliss.pavadinimas}</div>
            <div className="price">{varikliss.kaina}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Variklis;
