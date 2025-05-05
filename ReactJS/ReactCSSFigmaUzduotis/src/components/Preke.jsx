import { useEffect, useState } from "react";
import "./Preke.css";

const Preke = ({ gautiPreke }) => {
  const [kiekis, setKiekis] = useState([]);

  // Kai gautiPreke pasikeičia, atnaujink kiekis
  useEffect(() => {
    if (gautiPreke && gautiPreke.length > 0) {
      setKiekis(gautiPreke.map((prek) => prek.kiekis || 0));
    }
  }, [gautiPreke]);

  const plus = (index) => {
    const newKiekiai = [...kiekis];
    newKiekiai[index]++;
    setKiekis(newKiekiai);
  };

  const minus = (index) => {
    const newKiekiai = [...kiekis];
    if (newKiekiai[index] > 0) newKiekiai[index]--;
    setKiekis(newKiekiai);
  };

  return (
    <>
      {gautiPreke.map((preke, index) => (
        <div key={index}>
          <div className="row">
            <div className="produktas">
              <div
                className="prekesPav"
                style={{ backgroundImage: `url(${preke.url})` }}
              ></div>
              <div>{preke.pavadinimas}</div>
            </div>
            <div className="vienetoKaina">
              <strong>{Number(preke.kaina).toFixed(2)} Eur</strong>
            </div>
            <div className="kiekis">
              <div className="counter">
                <button onClick={() => minus(index)} className="btn minus">
                  −
                </button>
                <span className="number">{kiekis[index] ?? 0}</span>
                <button onClick={() => plus(index)} className="btn plus">
                  +
                </button>
              </div>
            </div>
            <div className="bendraKaina">
              <strong>
                {(Number(preke.kaina) * Number(kiekis[index] ?? 0)).toFixed(2)}{" "}
                Eur
              </strong>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Preke;
