import { useRef } from "react";

const Darbuotojas = (props) => {
  const formRef = useRef();
  const ivestiFn = (event) => {
    event.preventDefault();
    const forma = formRef.current;
    const darbuotojoInfo = {
      vardas: forma["vardas"].value,
      pavarde: forma["pavarde"].value,
      pareigos: forma["pareigos"].value,
      atlyginimas: forma["atlyginimas"].value,
    };

    props.info(darbuotojoInfo);
    forma.reset();
  };

  return (
    <div>
      <h2>Darbuotojo info: </h2>
      <form ref={formRef} onSubmit={ivestiFn}>
        <label htmlFor="vardas">Iveskite varda</label>
        <input type="text" name="vardas" id="vardas" />
        <label htmlFor="pavarde">Iveskite pavarde</label>
        <input type="text" name="pavarde" id="pavarde" />
        <label htmlFor="pareigos">Iveskite pareigas</label>
        <input type="text" name="pareigos" id="pareigos" />
        <label htmlFor="atlyginimas">Iveskite atlyginima</label>
        <input type="text" name="atlyginimas" id="atlyginimas" />
        <button type="submit">Ivesti</button>
      </form>
    </div>
  );
};

export default Darbuotojas;
