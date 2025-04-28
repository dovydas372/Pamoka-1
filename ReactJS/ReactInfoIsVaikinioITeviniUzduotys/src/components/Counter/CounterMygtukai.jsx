import { useState } from "react";

const CounterMygtukai = (props) => {
  const [count, setCount] = useState(0);
  let suma;
  const counter = props.data;
  const skaiciuoti = () => {
    setCount(count + 1);
    props.data(count);
  };
  const skaiciuoti2 = () => {
    setCount(count + 2);
    props.data(count);
  };
  const skaiciuoti3 = () => {
    setCount(count + 3);
    props.data(count);
  };
  return (
    <div>
      <h2>CounterMygtukai</h2>
      <button onClick={skaiciuoti}>prideti paspaudima +1</button>
      <button onClick={skaiciuoti2}>prideti paspaudima +2</button>
      <button onClick={skaiciuoti3}>prideti paspaudima +3</button>
    </div>
  );
};

export default CounterMygtukai;
