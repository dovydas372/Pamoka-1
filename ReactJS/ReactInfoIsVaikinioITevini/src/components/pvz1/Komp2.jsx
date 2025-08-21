import { useState } from "react";

const Komp2 = (props) => {
  const miestas = props.miestas;
  const paspaudusFn = (event) => {
    props.griztaReiksme(event.target.innerText);
  };

  return (
    <div>
      <h2>Mygtukas</h2>
      <button onClick={paspaudusFn}>{miestas}</button>
    </div>
  );
};

export default Komp2;
