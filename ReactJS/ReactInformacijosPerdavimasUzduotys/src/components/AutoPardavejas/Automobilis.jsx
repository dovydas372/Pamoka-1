import React from "react";

const Automobilis = ({ auto }) => {
  const { marke, modelis, metai } = auto;

  return (
    <div>
      <h2>Automobilis</h2>
      <p>{marke}</p>
      <p>{modelis}</p>
      <p>{metai}</p>
    </div>
  );
};

export default Automobilis;
