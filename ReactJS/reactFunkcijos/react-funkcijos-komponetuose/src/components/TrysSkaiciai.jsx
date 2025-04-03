const TrysSkaiciai = () => {
  let Sk1 = 5;
  let Sk2 = 6;
  let Sk3 = 1;

  function skSuma(a, b, c) {
    return `${a + b + c}`;
  }

  function didziausiasSk(a, b, c) {
    return `${Math.max(a, b, c)}`;
  }

  function isvestiSkaicius(a, b, c) {
    return (
      <p>
        {a} {b} {c}
      </p>
    );
  }

  return (
    <div>
      TrysSkaiciai
      {isvestiSkaicius(Sk1, Sk2, Sk3)}
      {didziausiasSk(Sk1, Sk2, Sk3)} <br />
      Suma: {skSuma(Sk1, Sk2, Sk3)}
    </div>
  );
};

export default TrysSkaiciai;
