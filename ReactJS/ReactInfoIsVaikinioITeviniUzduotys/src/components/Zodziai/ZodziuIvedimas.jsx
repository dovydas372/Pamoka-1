import { useRef } from "react";

const ZodziuIvedimas = (props) => {
  const formRef = useRef();

  const ivestiFn = (event) => {
    event.preventDefault();
    const form = formRef.current;
    if (form["ivestasZodis"].value !== "") {
      props.data(form["ivestasZodis"].value);
    }
  };

  return (
    <div>
      <h2>ZodziuIvedimas</h2>
      <form ref={formRef} onSubmit={ivestiFn}>
        <label htmlFor="ivestasZodis">Iveskite zodi</label>
        <input type="text" name="ivestasZodis" id="ivestasZodis" />
        <button type="submit">Ivesti</button>
      </form>
    </div>
  );
};

export default ZodziuIvedimas;
