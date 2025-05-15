import { useEffect, useState } from "react";
import "./Preke.css";

const Preke = (props) => {
  const { gautiPreke } = props;
  const { indeksas } = props;

  const index = indeksas;
  const preke = gautiPreke;

  const [kiekis, setKiekis] = useState(preke.kiekis);

  const plus = () => {
    setKiekis(Number(kiekis) + 1);
  };

  const minus = () => {
    if (kiekis > 0) {
      setKiekis(Number(kiekis) - 1);
    }
  };

  const remove = (index) => {
    props.istrinti(index);
  };

  return (
    <>
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
              <button onClick={minus} className="btn minus">
                −
              </button>
              <span className="number">{kiekis}</span>
              <button onClick={plus} className="btn plus">
                +
              </button>
            </div>
          </div>
          <div className="bendraKaina">
            <strong>
              {(Number(preke.kaina) * Number(kiekis)).toFixed(2)}
              Eur
            </strong>
            <div>
              <button onClick={() => remove(index)}>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 28C13 28.5304 13.2107 29.0391 13.5858 29.4142C13.9609 29.7893 14.4696 30 15 30H25C25.5304 30 26.0391 29.7893 26.4142 29.4142C26.7893 29.0391 27 28.5304 27 28V16H29V14H25V12C25 11.4696 24.7893 10.9609 24.4142 10.5858C24.0391 10.2107 23.5304 10 23 10H17C16.4696 10 15.9609 10.2107 15.5858 10.5858C15.2107 10.9609 15 11.4696 15 12V14H11V16H13V28ZM17 12H23V14H17V12ZM16 16H25V28H15V16H16Z"
                    fill="black"
                  />
                  <path
                    d="M17 18H19V26H17V18ZM21 18H23V26H21V18Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Preke;
