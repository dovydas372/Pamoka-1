import { useEffect, useRef, useState } from "react";
import axios from "axios";
const Antras = () => {
  const formRef = useRef(null);
  const [isfiltruoti, setIsfiltruoti] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((ats) => {
        console.log(ats.data.slice(0, 100));
        setComments(ats.data.slice(0, 100));
      })
      .catch((klaida) => {
        console.log(klaida);
      });
  }, []);

  const filterFn = (e) => {
    e.preventDefault();
    const paieskaIfno = formRef.current.value;
    let masyvas = [];
    comments.forEach((komentaras) => {
      if (komentaras.email.toLowerCase().includes(paieskaIfno.toLowerCase())) {
        masyvas.push(komentaras);
      }
      setIsfiltruoti(masyvas);
    });
  };

  return (
    <>
      <div>
        <form action="" onSubmit={filterFn} className="forma2">
          <label htmlFor="paieska" className="forma-label">
            Paieska pagal Email:
          </label>
          <input
            type="text"
            name="paieska"
            ref={formRef}
            className="forma-input"
          />
        </form>
        <div className="komentarai-container">
          {isfiltruoti.map((filtruotas, index) => (
            <div key={index} className="komentaras-card">
              <div className="komentaras-item">
                <strong>Vardas:</strong> {filtruotas.name}
              </div>
              <div className="komentaras-item">
                <strong>ID:</strong> {filtruotas.id}
              </div>
              <div className="komentaras-item">
                <strong>Email:</strong> {filtruotas.email}
              </div>
              <div className="komentaras-item">
                <strong>Body:</strong> {filtruotas.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Antras;
