const GeriausiasMedis = () => {
  let skaicius = Math.floor(Math.random() * 100 + 1);
  const patikrinitiKoksMedis = (medis) => {
    if (medis === "azuolas") {
      alert("Oho koks azuolas");
    } else if (medis === "liepa") {
      alert("grazi liepa");
    } else {
      alert("tai ne liepa ir ne azuolas");
    }
  };
  return (
    <div>
      <h1>GeriausiasMedis</h1>
      <button onClick={() => patikrinitiKoksMedis("azuolas")}>azuolas</button>
      <button onClick={() => patikrinitiKoksMedis("liepa")}>liepa</button>
      <button onClick={() => patikrinitiKoksMedis("kitas")}>kitas medis</button>
    </div>
  );
};

export default GeriausiasMedis;
