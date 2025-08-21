import React from "react";

const KnyguSpausdinimas = ({ siustiKnyga }) => {
  return (
    <div>
      <h2>KnyguSpausdinimas</h2>
      {siustiKnyga.length > 0
        ? siustiKnyga.map((knyga, index) => (
            <p key={index}>
              Pavadinimas: {knyga.pavadinimas}, <br /> Kaina: {knyga.kaina},
              <br /> Metai: {knyga.metai}
            </p>
          ))
        : "nera įvestų knygų"}
    </div>
  );
};

export default KnyguSpausdinimas;
