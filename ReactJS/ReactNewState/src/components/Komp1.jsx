import { useState } from "react";

const Komp1 = () => {
  const [skaicius, naujasSkaicius] = useState(0);

  const didint = () => {
    naujasSkaicius(skaicius + 1);
  };
  const mazinti = () => {
    naujasSkaicius(skaicius - 1);
  };

  return (
    <div>
      <h1>Komp1</h1>
      <h2>Counter</h2>
      <button onClick={didint}>Didinti</button>
      <button onClick={mazinti}>Mazinti</button>
      <p>Dabar yra: {skaicius}</p>
    </div>
  );
};

export default Komp1;
