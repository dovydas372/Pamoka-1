import { useState } from "react";
import TemperaturosIvestis from "./TemperaturosIvestis";

const TemperaturosRodiklis = () => {
  const [temperatura, setTemperatura] = useState();

  const tempFn = (temp) => {
    setTemperatura(temp);
  };

  return (
    <div>
      <h1>TemperaturosRodiklis</h1>

      <TemperaturosIvestis ivestaTemp={tempFn}></TemperaturosIvestis>

      <p>Temperatura: {temperatura}</p>
      {temperatura < 3 ? "Teperatura labai zema reikia apsirenkti silciau" : ""}
    </div>
  );
};

export default TemperaturosRodiklis;
