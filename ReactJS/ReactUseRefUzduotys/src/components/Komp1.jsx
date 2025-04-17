import { useState, useRef } from "react";

const Komp1 = () => {
  const [pirmas, setPirmas] = useState("");

  const pirmasRef = useRef();

  const paimtiReiksme = () => {
    document;
    setPirmas(pirmasRef.current.value);
    pirmasRef.current.value = "";
  };

  const arTeigiamas = (a) => {
    if (pirmas != "") {
      if (a >= 0) {
        return `Skaicius yra teigiamas`;
      } else {
        return `Skaicius yra neigiamas`;
      }
    }
  };
  const arLyginis = (a) => {
    if (pirmas != "") {
      if (a % 2 == 0) {
        return `skaicius yra lyginis`;
      } else {
        return `skaicius yra nelyginis`;
      }
    }
  };

  return (
    <div>
      <h1>Komp1</h1>
      <h2>Skaicius</h2>
      <input type="number" ref={pirmasRef} />
      <button onClick={paimtiReiksme}>Ivesti</button>
      <br />
      <p>{pirmas}</p>
      <p>{arTeigiamas(pirmas)}</p>
      <p>{arLyginis(pirmas)}</p>
    </div>
  );
};

export default Komp1;
