import { useState } from "react";
import "./PrekiuKrepselis.css";
import PrekeIvedimas from "./PrekeIvedimas";
import Preke from "./Preke";
const PrekiuKrepselis = () => {
  const [prekes, setPrekes] = useState([]);
  const ivestasProduktas = (ivestaInfo) => {
    setPrekes([...prekes, ivestaInfo]);
  };

  const trintiPreke = (indeksas) => {
    const newPrekes = prekes.filter((preke, i) => i !== indeksas);
    setPrekes([...newPrekes]);
  };

  return (
    <>
      <div className="container">
        <h2>PrekiuKrepselis</h2>
        <div className="krepselis">
          <div className="row">
            <div className="produktas">Produktas</div>
            <div className="vienetoKaina">Vieneto kaina</div>
            <div className="kiekis">Kiekis</div>
            <div className="bendraKaina">Bendra kaina</div>
          </div>
          <hr />
          {prekes.length > 0
            ? prekes.map((prekesInfo, index) => (
                <div key={index}>
                  <Preke
                    indeksas={index}
                    gautiPreke={prekesInfo}
                    istrinti={(a) => trintiPreke(a)}
                  ></Preke>
                </div>
              ))
            : ""}
        </div>
      </div>

      <div>
        <PrekeIvedimas data={ivestasProduktas}></PrekeIvedimas>
      </div>
    </>
  );
};

export default PrekiuKrepselis;
