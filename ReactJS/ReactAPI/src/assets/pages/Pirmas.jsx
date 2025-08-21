import { useEffect, useState, useRef } from "react";
import axios from "axios";
const pirmas = () => {
  const [komentarai, setKomentarai] = useState([]);
  const formaRef = useRef(null);

  const pridetiFN = (e) => {
    e.preventDefault();
    const formaInfo = formaRef.current;

    const komentaras = {
      title: formaInfo["pavadinimas"].value,
      body: formaInfo["komentaras"].value,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/posts", komentaras)
      .then((response) => {
        setKomentarai([response.data]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="container">
        <form action="" ref={formaRef} onSubmit={pridetiFN}>
          <label htmlFor="pavadinimas">Temos pavadinimas:</label>
          <br />
          <input type="text" name="pavadinimas" id="pavadinimas" />
          <br />
          <label htmlFor="komentaras">Komentaras:</label>
          <br />
          <input type="text" name="komentaras" id="komentaras" />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {komentarai.map((koment, index) => (
          <div key={index} className="komentaras">
            <h4>{koment.title}</h4>
            <p>{koment.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default pirmas;
