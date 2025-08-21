import React from "react";

const TekstoVaik = (props) => {
  const patikrinimas = (fraze) => {
    if (fraze && fraze.split("").filter((r) => r == "a").length > 0) {
      return `tekste yra a raidziu`;
    } else {
      return `tekste nera "a" raidziu`;
    }
  };

  return (
    <div>
      <h2>TekstoVaik</h2>
      <p>gautas tekstas is vaikinio elemento: {props.tekstas}</p>
      <p>{patikrinimas(props.tekstas)}</p>
    </div>
  );
};

export default TekstoVaik;
