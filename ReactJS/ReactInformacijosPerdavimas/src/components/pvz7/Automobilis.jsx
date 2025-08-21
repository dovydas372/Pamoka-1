import React from "react";

const Automobilis = ({ auto }) => {
  const { marke, modelis } = auto; // kai rasome kaireje puseje su {} tai mes pasijamame info is desines puses kintamojo, masyvo ir t.t.
  return (
    <div>
      <h2>Automobilis</h2>
      <p>{marke}</p>
      <p>{modelis}</p>
    </div>
  );
};

export default Automobilis;
