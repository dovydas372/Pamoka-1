import React from "react";

const Komp4 = () => {
  const pirmasButton = (event) => {
    console.log(event);
    alert("Pirmas");
  };
  const antrasButton = (event) => {
    console.log(event);
    alert("Antras");
  };
  const treciasButton = (event) => {
    console.log(event);
    alert("Trecias");
  };
  return (
    <div>
      <h1>Komp4</h1>
      <button onClick={pirmasButton}>Pirmas</button>
      <button onClick={antrasButton}>Antras</button>
      <button onClick={treciasButton}>Trecias</button>
    </div>
  );
};

export default Komp4;
