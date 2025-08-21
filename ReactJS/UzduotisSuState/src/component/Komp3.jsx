import { useState } from "react";

const Komp3 = () => {
  const [greitis, setGreitis] = useState(0);

  const skKeitimoHandler = (pokytis) => {
    if (pokytis === 0) {
      setGreitis(0);
    } else {
      setGreitis(greitis + pokytis);
    }
  };

  const tirkintiGreiti = (greitis) => {
    if (greitis === 0) {
      return `stovite vietoja`;
    } else if (greitis > 0 && greitis < 30) {
      return `vaŽiuojate lėtai`;
    } else {
      return `važiuojate greitai`;
    }
  };

  return (
    <div>
      <h1>Komp3</h1>
      <h2>KeistiSkaiciu 2 </h2>
      <button onClick={() => skKeitimoHandler(0)}>mazinti greiti i 0</button>
      <button onClick={() => skKeitimoHandler(10)}>Didinti greiti 10</button>
      <button onClick={() => skKeitimoHandler(20)}>Didinti greiti 20</button>
      <button onClick={() => skKeitimoHandler(30)}>Didinti greiti 30</button>
      <button onClick={() => skKeitimoHandler(40)}>Didinti greiti 40</button>
      <p>
        {tirkintiGreiti(greitis)} jusu greitis: {greitis}
      </p>
    </div>
  );
};

export default Komp3;
