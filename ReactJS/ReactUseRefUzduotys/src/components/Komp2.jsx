import { useRef, useState } from "react";

const Komp2 = () => {
  const [info, setInfo] = useState();
  const formRef = useRef();

  const submitFn = (e) => {
    e.preventDefault();

    const forma = formRef.current;

    const ivestaInfo = {
      kilometrai: forma["km"].value,
      kuroSunaudojimas: forma["kuroSn"].value,
      litroKaina: forma["kaina"].value,
    };

    setInfo(ivestaInfo);
  };

  return (
    <div>
      <h1>Komp2</h1>
      <h2>Kelione</h2>
      <form ref={formRef}>
        <label htmlFor="km">Kilometrai</label>
        <input type="number" name="km" />
        <br />
        <label htmlFor="kuroSn">Kuro sunaudojimas 100km</label>
        <input type="number" name="kuroSn" />
        <br />
        <label htmlFor="kaina">Kuro kaina per 1l</label>
        <input type="number" name="kaina" />
        <br />
        <button onClick={submitFn}>ivesti</button>
        <br />
      </form>
      <br />
      <p>kilometrai: {info.kilometrai}</p>
      <p>kuroSunaudojimas:{info.kuroSunaudojimas}</p>
      <p>litroKaina: {info.litroKaina}</p>
    </div>
  );
};

export default Komp2;
