import React from "react";
import "./Ketvirta.css";
const Ketvirta = () => {
  const skaicius = 6;

  return (
    <div className={skaicius % 2 == 0 ? "lyginis" : "nelyginis"}>Ketvirta</div>
  );
};

export default Ketvirta;
