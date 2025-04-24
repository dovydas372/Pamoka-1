import { useState, useRef } from "react";

const Komp5 = () => {
  const [prekes, setPreke] = useState([]);
  const [prekesMazai, setPrekeMazai] = useState([]);

  const formRef = useRef();

  const submitFn = (event) => {
    event.preventDefault();

    const form = formRef.current;

    const preke = {
      pavadinimas: form["pavadinimas"].value,
      kaina: form["kaina"].value,
      kiekis: form["kiekis"].value,
    };

    const laukai = Object.values(preke).filter((reiksme) => reiksme.length > 0);

    if (laukai.length === Object.values(preke).length) {
      setPreke([...prekes, preke]);

      if (preke.kiekis < 5) {
        setPrekeMazai([...prekesMazai, preke]);
      }
    } else {
      return alert("Neivedet visu laukeliu");
    }
  };
  const valytiFn = () => {
    setPreke([]);
    setPrekeMazai([]);
  };

  return (
    <div>
      <h1>Komp5</h1>
      <h2>Prekes</h2>
      <form ref={formRef} onSubmit={submitFn}>
        <br />
        <label htmlFor="pavadinimas">pavadinimas</label>
        <br />
        <input type="text" name="pavadinimas" />
        <br />
        <label htmlFor="kaina">Kaina</label>
        <br />
        <input type="number" name="kaina" min="0" step="1" />
        <br />
        <label htmlFor="kiekis">Kiekis</label>
        <br />
        <input type="number" name="kiekis" min="0" defaultValue="" step="1" />
        <br />
        <button>Ivesti</button>
      </form>

      <br />
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>pavadinimas</th>
              <th>kaina</th>
              <th>kiekis</th>
            </tr>
          </thead>
          <tbody>
            {prekes.map((prek, index) => {
              return (
                <tr key={index}>
                  <td>{prek.pavadinimas}</td>
                  <td>{prek.kaina}</td>
                  <td>{prek.kiekis}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        <br />
        {prekesMazai.length > 0 && (
          <table border={1}>
            <thead>
              <tr>
                <th>pavadinimas</th>
                <th>kaina</th>
                <th>kiekis</th>
              </tr>
            </thead>
            <tbody>
              {prekesMazai.map((prek, index) => {
                return (
                  <tr key={index}>
                    <td>{prek.pavadinimas}</td>
                    <td>{prek.kaina}</td>
                    <td>{prek.kiekis}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <button onClick={valytiFn}>isvalyti</button>
      <br />
    </div>
  );
};

export default Komp5;
