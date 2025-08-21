import React from "react";

const Salis = (props) => {
  return (
    <div>
      <h2>Salis</h2>
      <p>{props.zemynas}</p>
      <p>{props.zemynas === "europa" ? "jega tai eruopos zemynas" : ""}</p>
    </div>
  );
};

export default Salis;
