import { useState } from "react";

const Komp4 = () => {
  const skKeitimoHandler = (pokytis) => {
    alert("gautas pokytis" + pokytis);
    if (pokytis === 0) {
      naujasSkaicius(0);
    } else {
      naujasSkaicius(skaicius + pokytis);
    }
  };

  const [skaicius, naujasSkaicius] = useState(10);

  return (
    <div>
      <h1>Komp4</h1>
      <h2>KeistiSkaiciu 2 </h2>
      <button onClick={() => skKeitimoHandler(1)}>Didinti</button>
      <button onClick={() => skKeitimoHandler(5)}>Didinti5</button>
      <button onClick={() => skKeitimoHandler(-1)}>Mazinti</button>
      <button onClick={() => skKeitimoHandler(-5)}>Mazinti5</button>
      <button onClick={() => skKeitimoHandler(0)}>Grazinti</button>
      <p>Dabar yra: {skaicius}</p>
    </div>
  );
};

export default Komp4;
