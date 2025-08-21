import React from "react";

const ProgramavimoKalba = (props) => {
  const issiunciam = (event) => {
    props.grazinamaReiksme(event.target.innerText);
  };

  return (
    <div>
      <h2>ProgramavimoKalba</h2>
      <button onClick={issiunciam}>JavaScript</button>
      <button onClick={issiunciam}>HTML</button>
      <button onClick={issiunciam}>CSS</button>
      <button onClick={issiunciam}>PHP</button>
    </div>
  );
};

export default ProgramavimoKalba;
