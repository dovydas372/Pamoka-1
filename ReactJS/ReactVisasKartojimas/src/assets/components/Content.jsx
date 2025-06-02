import { useEffect, useState } from "react";
import axios from "axios";

const Content = () => {
  const [filmai, setFilmai] = useState([]);
  const [active, setActive] = useState(Array(filmai.length).fill(false));
  const [issaugotiFilmai, setIssaugotiFilmai] = useState([]);
  const daugiauMaziauFn = (inde) => {
    const naujasActive = [...active];
    naujasActive[inde] = !naujasActive[inde];
    setActive(naujasActive);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/filmai")
      .then((response) => {
        setFilmai(response.data);
      })
      .catch((error) => {
        console.error("Klaida gaunant duomenis:", error);
      });

    axios
      .get("http://localhost:8000/Mano%20megstamiausi")
      .then((response) => {
        setIssaugotiFilmai(response.data);
      })
      .catch((error) => {
        console.error("Klaida gaunant duomenis:", error);
      });
  }, []);

  const pridetiFn = (index) => {
    if (
      issaugotiFilmai.some(
        (isaugotasFilmas) =>
          isaugotasFilmas[0].pavadinimas == filmai[index].pavadinimas
      )
    ) {
      console.log("Filmas jau pridėtas.");
    } else {
      axios
        .post("http://localhost:8000/Mano%20megstamiausi", [filmai[index]])
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
          console.error("Klaida perduodant duomenis:", error);
        });
    }
  };

  console.log(issaugotiFilmai);

  return (
    <>
      <div>
        {filmai.map((filmas, index) => (
          <div key={index} className="filmoInfo">
            <div></div>
            <p>
              <strong>Pavadinimas:</strong> {filmas.pavadinimas}
            </p>
            <p>
              <strong>Zanrai:</strong>{" "}
              {filmas.zanrai.map((zanras, i) => (
                <span key={i}>{zanras} </span>
              ))}
            </p>
            <div className="daugiauMaziau">
              <div className={active[index] ? "infoBox active" : "infoBox"}>
                <p>
                  <strong>Rezisierius: </strong>
                  {filmas.rezisierius}
                </p>
                <p>
                  <strong>Isleidimo_metai: </strong>
                  {filmas.isleidimo_metai}
                </p>
                <p>
                  <strong>Imdb_ivertinimas: </strong>
                  {filmas.imdb_ivertinimas}
                </p>
                <button onClick={() => pridetiFn(index)}>prideti</button>
              </div>
              <button onClick={() => daugiauMaziauFn(index)}>
                {active[index] ? "maziau" : "daugiau"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;
