import React from "react";

const IsvestiInfo = ({ siustaInfo }) => {
  return (
    <div>
      <h2>IsvestiInfo</h2>
      {siustaInfo.length > 0
        ? siustaInfo.map((darbuotojas, index) => (
            <p key={index}>
              Vardas: {darbuotojas.vardas},
              <br /> Pavarde: {darbuotojas.pavarde},
              <br /> Pareigos: {darbuotojas.pareigos},
              <br /> Atlyginimas: {darbuotojas.atlyginimas},
            </p>
          ))
        : "nera įvestų darbuotoju"}
    </div>
  );
};

export default IsvestiInfo;
