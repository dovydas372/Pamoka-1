import { useState } from "react";

const Komp3 = () => {
  const [tekstas, setTekstas] = useState("");

  const uzvesta = () => {
    setTekstas("Uzvesta pelė");
    document.querySelector("#tekstoBlokas").style.backgroundColor = "lightblue";
  };
  const neuzvesta = () => {
    setTekstas("neuzvesta pelė");
    document.querySelector("#tekstoBlokas").style.backgroundColor = "black";
  };

  return (
    <div>
      <h1>Komp3</h1>
      <h2>Uzvedimas</h2>
      <input
        id="tekstoBlokas"
        onMouseEnter={uzvesta}
        onMouseLeave={neuzvesta}
        type="text"
      />
      <p>{tekstas}</p>
    </div>
  );
};

export default Komp3;
