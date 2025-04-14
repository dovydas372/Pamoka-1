import { useState } from "react";

const Komp3 = () => {
  const [skaicius, naujasSkaicius] = useState(0);

  const didint = () => {
    naujasSkaicius(skaicius + 1);
  };
  const mazinti = () => {
    naujasSkaicius(skaicius - 1);
  };

  const didint5 = () => {
    naujasSkaicius(skaicius + 5);
  };

  const mazinti5 = () => {
    naujasSkaicius(skaicius - 5);
  };

  const Grazinti = () => {
    naujasSkaicius(0);
  };
  return (
    <div>
      <h1>Komp3</h1>
      <h2>KeistiSkaiciu</h2>
      <button onClick={didint}>Didinti</button>
      <button onClick={didint5}>Didinti5</button>
      <button onClick={mazinti}>Mazinti</button>
      <button onClick={mazinti5}>Mazinti5</button>
      <button onClick={Grazinti}>Grazinti</button>
      <p>Dabar yra: {skaicius}</p>
    </div>
  );
};

export default Komp3;
