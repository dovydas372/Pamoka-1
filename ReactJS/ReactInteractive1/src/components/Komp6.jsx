import React from "react";

const Komp6 = () => {
  const slaptasSkaicius = (event) => {
    const skaicius = Math.floor(Math.random() * 10 + 1);
    alert("Slaptas skaicius: " + skaicius);
  };
  const antrasButton = (event) => {
    console.log(event.nativeEvent.target.textContent);
  };
  const treciasButton = (event) => {
    console.log(event);
    alert("Trecias");
  };
  return (
    <div>
      <h1>Komp6</h1>
      <button onClick={slaptasSkaicius}>Slaptas skaicius</button>
    </div>
  );
};

export default Komp6;
