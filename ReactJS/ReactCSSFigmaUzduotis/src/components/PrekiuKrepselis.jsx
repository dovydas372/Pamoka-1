import React from "react";
import "./PrekiuKrepselis.css";
const PrekiuKrepselis = () => {
  return (
    <>
      <div className="container">
        <div>PrekiuKrepselis</div>
        <div className="krepselis">
          <div className="pirmaEile">
            <div className="produktas">Produktas</div>
            <div className="vienetoKaina">Vieneto kaina</div>
            <div className="kiekis">Kiekis</div>
            <div className="bendraKaina">Bendra kaina</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrekiuKrepselis;
