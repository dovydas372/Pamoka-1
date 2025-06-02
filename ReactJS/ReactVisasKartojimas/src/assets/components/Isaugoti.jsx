import { useEffect, useState } from "react";
import axios from "axios";

const Isaugoti = () => {
  const [issaugotiFilmai, setIssaugotiFilmai] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/Mano%20megstamiausi")
      .then((response) => {
        setIssaugotiFilmai(response.data);
      })
      .catch((error) => {
        console.error("Klaida gaunant duomenis:", error);
      });
  }, []);

  const deleteFn = (id) => {
    axios
      .delete(`http://localhost:8000/Mano%20megstamiausi/${id}`)
      .then((response) => {
        axios
          .get("http://localhost:8000/Mano%20megstamiausi")
          .then((response) => {
            setIssaugotiFilmai(response.data);
          })
          .catch((error) => {
            console.error("Klaida gaunant duomenis:", error);
          });
      })
      .catch((error) => {
        console.error("Klaida trinant:", error);
      });
  };

  return (
    <>
      <div>
        {issaugotiFilmai.map((filmas, index) => (
          <div key={index} className="filmoInfo">
            <div></div>
            <p>
              <strong>Pavadinimas:</strong> {filmas[0].pavadinimas}
            </p>
            <p>
              <strong>Zanrai:</strong>{" "}
              {filmas[0].zanrai.map((zanras, i) => (
                <span key={i}>{zanras} </span>
              ))}
            </p>
            <div className="daugiauMaziau">
              <div className="infoBox active">
                <p>
                  <strong>Rezisierius: </strong>
                  {filmas[0].rezisierius}
                </p>
                <p>
                  <strong>Isleidimo_metai: </strong>
                  {filmas[0].isleidimo_metai}
                </p>
                <p>
                  <strong>Imdb_ivertinimas: </strong>
                  {filmas[0].imdb_ivertinimas}
                </p>
              </div>
              <button onClick={() => deleteFn(filmas["id"])}>istrinti</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Isaugoti;
