import { useState } from "react";
import CounterMygtukai from "./CounterMygtukai";

const CounterTev = () => {
  const [counter, setCounter] = useState("");
  const paimaReiksme = (reiksme) => {
    setCounter(reiksme);
  };
  return (
    <div>
      <h1>CounterTev</h1>
      <CounterMygtukai data={paimaReiksme}></CounterMygtukai>
      <p>paspaudimai: {counter}</p>
    </div>
  );
};

export default CounterTev;
