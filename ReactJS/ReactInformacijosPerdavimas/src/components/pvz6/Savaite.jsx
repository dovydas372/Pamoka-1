import React from "react";
import Diena from "./Diena";

const Savaite = () => {
  let temperatura = [10, 5, 6, 8, 9, 10, 56];
  return (
    <div>
      <h1>Savaite</h1>
      <div>
        {temperatura.map((temp, i) => (
          <Diena temperatura={temp}></Diena>
        ))}
      </div>
    </div>
  );
};

export default Savaite;
