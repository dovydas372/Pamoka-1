import { useState } from "react";

const Komp3 = () => {
  const [dienosUzsakymas, setDienosUzsakymas] = useState(0);
  const [kepykla1, setKepykla1] = useState(0);
  const [kepykla2, setKepykla2] = useState(0);
  const [kepykla3, setKepykla3] = useState(0);

  const uzsakymasFn = (e) => {
    setDienosUzsakymas(e.target.value);
  };
  const pirmaFn = (e) => {
    setKepykla1(e.target.value);
  };
  const antraFn = (e) => {
    setKepykla2(e.target.value);
  };
  const treciaFn = (e) => {
    setKepykla3(e.target.value);
    console.log(kepykla1);
    console.log(kepykla2);
    console.log(kepykla3);
  };

  const tikrinti = () => {
    let bendrasKiekis =
      parseInt(kepykla1) + parseInt(kepykla2) + parseInt(kepykla3);
    console.log(bendrasKiekis);
    if (bendrasKiekis >= parseInt(dienosUzsakymas)) {
      return `tikslas bus įvykdytas`;
    } else {
      return `tikslas nebus pasiektas trūksta: ${
        dienosUzsakymas - bendrasKiekis
      }`;
    }
  };

  return (
    <div>
      <h1>Komp3</h1>
      <h2>Trys kepyklos</h2>

      <br />

      <label htmlFor="dienosUzsakymas">Kiek reiks iskepti siandien:</label>
      <input id="dienosUzsakymas" type="text" onInput={uzsakymasFn} />
      <br />
      <label htmlFor="pirmas">Kiek kiausiniu bus padėta per siandien:</label>
      <input id="pirmas" type="text" onInput={pirmaFn} />
      <br />
      <label htmlFor="antras">Kiek kiausiniu bus padėta per siandien:</label>
      <input id="antras" type="text" onInput={antraFn} />
      <br />
      <label htmlFor="trecias">Kiek kiausiniu bus padėta per siandien:</label>
      <input id="trecias" type="text" onInput={treciaFn} />
      <br />
      <br />

      <div> {tikrinti()}</div>
    </div>
  );
};

export default Komp3;
