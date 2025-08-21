const Darbuotojas = () => {
  let darbuotojas = {
    vardas: "Jonas",
    profesija: "Programuotojas",
    atlyginimas: 2500,
    etatas: "Pilnas",
    darboStazas: 5,
  };

  function arUzdirbaDaugiau(a) {
    if (a < darbuotojas.atlyginimas) {
      return `darbuotojas uzdirba daugiau nei ${a}`;
    } else {
      return `darbuotojas uzdirba maziau nei ${a}`;
    }
  }

  function ilgametisDarbuotas(a) {
    if (a >= 5) {
      return `Ilgametis darbuotojas`;
    } else {
      return `Naujokas`;
    }
  }

  function darbuotojoUzdarbis(atlyginimas, etatas, darbostazas) {
    if (etatas == "Pilnas") {
      return darbostazas * 12 * atlyginimas;
    } else if (etatas == "Puse") {
      return darbostazas * 12 * (atlyginimas / 2);
    }
  }

  return (
    <div>
      <h3>Darbuotojas</h3>
      <p>{darbuotojas.vardas}</p>
      <p>{darbuotojas.profesija}</p>
      <p>{darbuotojas.atlyginimas}</p>
      <p>{darbuotojas.etatas}</p>
      <p>{darbuotojas.darboStazas}</p>
      <p>
        darbuotojas uzdirbo per visa laika:
        {darbuotojoUzdarbis(
          darbuotojas.atlyginimas,
          darbuotojas.etatas,
          darbuotojas.darboStazas
        )}
        eur
      </p>
      <p>dabuotojas yra: {ilgametisDarbuotas(darbuotojas.darboStazas)}</p>
      <p>ar darbuotojas uzdirba: {arUzdirbaDaugiau(500)} eur</p>
    </div>
  );
};

export default Darbuotojas;
