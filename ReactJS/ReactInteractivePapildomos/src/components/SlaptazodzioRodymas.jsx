import { useState } from "react";

const SlaptazodzioRodymas = () => {
  const [tipas, setTipas] = useState("password");

  const event = (e) => {
    setTipas(e.target.checked ? "text" : "password");
  };

  return (
    <div>
      <h1>SlaptazodzioRodymas</h1>

      <input type={tipas} />
      <input onChange={event} type="checkbox" />
    </div>
  );
};

export default SlaptazodzioRodymas;
