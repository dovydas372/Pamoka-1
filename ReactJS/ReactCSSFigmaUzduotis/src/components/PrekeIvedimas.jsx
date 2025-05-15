import { useRef } from "react";
import "./PrekeIvedimas.css";
const PrekeIvedimas = (props) => {
  const formRef = useRef();
  const ivestiFn = (event) => {
    event.preventDefault();
    const forma = formRef.current;
    const preke = {
      url: forma["url"].value,
      pavadinimas: forma["prekesPavadinimas"].value,
      kaina: forma["kaina"].value,
      kiekis: forma["kiekis"].value,
    };

    props.data(preke);
    forma.reset();
  };

  return (
    <div className="container">
      <h2>Prekes ivedimas </h2>

      <form ref={formRef} onSubmit={ivestiFn} className="ivedimasDiv">
        <label htmlFor="url">Prekes paveikslelio nuoroda</label>
        <input type="text" name="url" id="url" />

        <label htmlFor="prekesPavadinimas">Prekes pavadinimas</label>
        <input type="text" name="prekesPavadinimas" id="prekesPavadinimas" />

        <label htmlFor="kaina">Prekes kaina</label>
        <input type="number" name="kaina" id="kaina" />

        <label htmlFor="kiekis">Prekes kiekis</label>
        <input type="number" name="kiekis" id="kiekis" />

        <button type="submit">Ivesti</button>
      </form>
    </div>
  );
};

export default PrekeIvedimas;
