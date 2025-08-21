import { useState, useRef } from "react";

const Komp4 = () => {
  const [automobiliai, setAutomobiliai] = useState([]);

  const formRef = useRef();

  const submitFn = (event) => {
    event.preventDefault();

    const form = formRef.current;

    let naujasAutomobilis = {
      marke: form["marke"].value,
      modelis: form["modelis"].value,
      metai: form["metai"].value,
    };

    const laukai = Object.values(naujasAutomobilis).filter(
      (reiksme) => reiksme.length > 0
    );

    if (laukai.length === Object.values(naujasAutomobilis).length) {
      setAutomobiliai([...automobiliai, naujasAutomobilis]);
    }
  };
  const valytiFn = () => {
    setAutomobiliai([]);
  };

  return (
    <div>
      <h1>Komp4</h1>
      <h2>Automobiliai</h2>
      <form ref={formRef} onSubmit={submitFn}>
        <label htmlFor="marke">Marke</label>
        <br />
        <input type="text" name="marke" />
        <br />
        <label htmlFor="modelis">Modelis</label>
        <br />
        <input type="text" name="modelis" />
        <br />
        <label htmlFor="metai">Metai</label>
        <br />
        <input
          type="number"
          name="metai"
          min="1900"
          max="2025"
          defaultValue="2000"
          step="1"
        />
        <br />
        <button>Ivesti</button>
      </form>

      <br />
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>Marke</th>
              <th>Modelis</th>
              <th>Metai</th>
            </tr>
          </thead>
          <tbody>
            {automobiliai.map((auto, index) => {
              console.log(auto);
              return (
                <tr key={index}>
                  <td>{auto.marke}</td>
                  <td>{auto.modelis}</td>
                  <td>{auto.metai}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button onClick={valytiFn}>isvalyti</button>
      <br />
    </div>
  );
};

export default Komp4;
