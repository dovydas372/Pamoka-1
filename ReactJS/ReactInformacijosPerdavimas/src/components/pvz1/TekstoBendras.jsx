import React from "react";
import TekstoVaik from "./TekstoVaik";

const TekstoBendras = () => {
  const tek = "daug daug daug";
  return (
    <div>
      <h1>TekstoBendras</h1>
      <TekstoVaik tekstas="mano perduotas tekstas"></TekstoVaik>
      <TekstoVaik tekstas="mano kazkoks tekstas"></TekstoVaik>
      <TekstoVaik tekstas={tek}></TekstoVaik>
      <TekstoVaik></TekstoVaik>
    </div>
  );
};

export default TekstoBendras;
