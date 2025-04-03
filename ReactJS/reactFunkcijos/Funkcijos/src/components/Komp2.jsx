const Komp2 = () => {
  let skaicius1 = 55;
  let skaicius2 = 20;
  const didesnis = (sk1, sk2) => {
    if (sk1 > sk2) {
      return `${sk1} didesnis`;
    } else {
      return `${sk2} didesnis`;
    }
  };
  return (
    <div>
      <h2>didesnis / mazesnis skaicius</h2>
      <p>
        Turim ksaiciai: {skaicius1} ir {skaicius2}
      </p>
      <p>{didesnis(skaicius1, skaicius2)}</p>
    </div>
  );
};

export default Komp2;
