import { useState, useRef } from "react";

const Komp6 = () => {
  const [kepyklosInfo, setKepyklosInfo] = useState([]);
  const [dienosUzsakymai, setDienosUzsakymai] = useState();
  let uzsakymaiDienos = 0;
  const formRef = useRef();
  const formRef2 = useRef();

  const changeFn = (event) => {
    event.preventDefault();

    const form = formRef.current;

    const kepykla = {
      darbuotojuSkaicius: form["darbuotojuSkaicius"].value,
      kepiniaiPerValanda: form["kepiniaiPerValanda"].value,
      darboValandos: form["darboValandos"].value,
    };

    console.log(kepykla);
    const laukai = Object.values(kepykla).filter(
      (reiksme) => reiksme.length > 0
    );

    if (laukai.length == Object.values(kepykla).length) {
    }
  };
  const valytiFn = () => {
    setPreke([]);
    setPrekeMazai([]);
  };

  const skaiciuoti = (event) => {
    event.preventDefault();
    const form2 = formRef2.current;
    uzsakymaiDienos += Number(form2["dienosUzsakymai"].value);
    console.log(uzsakymaiDienos);
    setDienosUzsakymai(uzsakymaiDienos);
    form2["dienosUzsakymai"].value = "";
  };

  return (
    <div>
      <h1>Komp6</h1>
      <h2>Kepykla</h2>
      <form ref={formRef} onChange={changeFn}>
        <br />
        <label htmlFor="darbuotojuSkaicius">darbuotoju Skaicius</label>
        <br />
        <input type="number" name="darbuotojuSkaicius" />
        <br />
        <label htmlFor="kepiniaiPerValanda">
          kepiniai Per Valanda vieno darbuotojo
        </label>
        <br />
        <input type="number" name="kepiniaiPerValanda" />
        <br />
        <label htmlFor="darboValandos">darbo valandos per diena</label>
        <br />
        <input type="number" name="darboValandos" />
        <br />
      </form>
      <br />
      <br />
      <form ref={formRef2} onSubmit={skaiciuoti}>
        <br />
        <label htmlFor="dienosUzsakymai">Dienos uzsakymai</label>
        <br />
        <input type="number" name="dienosUzsakymai" />
        <br />
        <button>Ivesti</button>
      </form>
      <p>jau suvesta: {dienosUzsakymai} uzsakymu</p>
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
          <tbody></tbody>
        </table>
        <br />
        <br />
      </div>
      <button onClick={valytiFn}>isvalyti</button>
      <br />
    </div>
  );
};

export default Komp6;
