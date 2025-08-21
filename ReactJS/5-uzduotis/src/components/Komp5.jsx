// TODO: prijunkite šį komponentą prie App.jsx

const Komp5 = () => {
  let spalvos = ["raudona", "geltona", "žalia", "mėlyna", "violetinė"];

  return (
    // TODO: atvaizduokite visas spalvas
    // naudodami map funkciją, įdėdami viską
    // į rikiuotą sąrašą (ol)
    <div>
      <h1>Komp5</h1>
      <ol>
        {spalvos.map((spalva) => (
          <li>{spalva}</li>
        ))}
      </ol>
    </div>
  );
};

export default Komp5;
