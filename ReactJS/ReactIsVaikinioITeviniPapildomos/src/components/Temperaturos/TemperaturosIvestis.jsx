import { useRef } from "react";

const TemperaturosIvestis = (props) => {
  const formaRef = useRef();
  const ivestiFn = (event) => {
    event.preventDefault();
    const form = formaRef.current["temperatura"].value;
    console.log(form);
    props.ivestaTemp(form);
    formaRef.current.reset();
  };
  return (
    <div>
      <h2>TemperaturosIvestis</h2>
      <form action="" ref={formaRef} onSubmit={ivestiFn}>
        <label htmlFor="temperatura">iveskit temperatura</label>
        <input type="number" name="temperatura" />
        <button type="submit">ivesti</button>
      </form>
    </div>
  );
};

export default TemperaturosIvestis;
