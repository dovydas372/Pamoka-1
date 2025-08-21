import { useState } from "react";

const Komp2 = () => {
  const [kiausiniai, setKiausiniai] = useState("");

  const tikslas = 10;

  const pirmasFn = (e) => {
    setKiausiniai(e.target.value);
  };

  const tikrinti = () => {
    if (kiausiniai >= tikslas) {
      return `tikslas bus įvykdytas`;
    } else {
      return `tikslas nebus pasiektas`;
    }
  };

  return (
    <div>
      <h1>Komp2</h1>
      <h2>Vistos</h2>
      <h3>Dienos tikslas {tikslas}</h3>
      <br />

      <label htmlFor="pirmas">Kiek kiausiniu bus padėta per siandien:</label>
      <input id="pirmas" type="text" onInput={pirmasFn} />
      <br />
      <br />

      <div> {tikrinti()}</div>
    </div>
  );
};

export default Komp2;
