import { useState } from "react";
import "./PrekiuKrepselis.css";
import PrekeIvedimas from "./PrekeIvedimas";
import Preke from "./Preke";
const PrekiuKrepselis = () => {
  const [prekes, setPrekes] = useState([]);
  const ivestasProduktas = (ivestaInfo) => {
    setPrekes([ivestaInfo, ...prekes]);
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
          {prekes.length > 0 ? <Preke gautiPreke={prekes}></Preke> : ""}
        </div>
      </div>

      <div>
        <PrekeIvedimas data={ivestasProduktas}></PrekeIvedimas>
      </div>
    </>
  );
};

export default PrekiuKrepselis;
