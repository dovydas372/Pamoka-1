import { useRef } from "react";

const KnygosIvedimas = (props) => {
  const formRef = useRef();
  const ivestiFn = () => {
    const forma = formRef.current;
    const knyga = {
      pavadinimas: forma["ivestaKnyga"].value,
      kaina: forma["kaina"].value,
      metai: forma["metai"].value,
    };
    console.log(knyga);
    props.data(knyga);
  };

  return (
    <div>
      <h2>KnygosIvedimas </h2>
      <form ref={formRef} onSubmit={ivestiFn}>
        <label htmlFor="ivestaKnyga">Iveskite knygos pavadinima</label>
        <input type="text" name="ivestaKnyga" id="ivestaKnyga" />
        <label htmlFor="kaina">Iveskite knygos kaina</label>
        <input type="text" name="kaina" id="kaina" />
        <label htmlFor="metai">Iveskite knygos metus</label>
        <input type="text" name="metai" id="metai" />
        <button type="submit">Ivesti</button>
      </form>
    </div>
  );
};

export default KnygosIvedimas;
