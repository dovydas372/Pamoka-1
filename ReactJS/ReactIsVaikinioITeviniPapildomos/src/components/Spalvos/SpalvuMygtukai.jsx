import { useRef } from "react";

const SpalvuMygtukai = (props) => {
  const pasirinktiFn = (event) => {
    const spalva = event.target.innerText;
    console.log(spalva);
    props.spalva(spalva);
  };

  return (
    <div>
      <h2>SpalvuMygtukai</h2>
      <button onClick={pasirinktiFn}>Raudona</button>
      <br />
      <button onClick={pasirinktiFn}>Žalia</button>
      <br />
      <button onClick={pasirinktiFn}>Melynas</button>
    </div>
  );
};

export default SpalvuMygtukai;
