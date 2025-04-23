import React from "react";
import Salis from "./Salis";

const Pasaulis = () => {
  let pirmas = "asdasdsad";
  return (
    <div>
      <h1>Pasaulis</h1>
      <Salis zemynas="europa"></Salis>
      <Salis zemynas={pirmas}></Salis>
      <Salis zemynas="Amerika"></Salis>
    </div>
  );
};

export default Pasaulis;
