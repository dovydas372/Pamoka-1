// TODO: prijunkite šį komponentą prie App.jsx

const Komp6 = () => {
  let temperaturos = [15, 20, 25, 30, 35, 40];

  return (
    // TODO: atvaizduokite visas temperatūras
    // naudodami map funkciją, įdėdami viską
    // į lentelę (table),
    // kurioje būtų du stulpeliai:
    // 1. eilutės numeris (1, 2, 3, ...)
    // 2. temperatūra iš masyvo

    <div>
      <h1>Komp6</h1>
      <table>
        <tr>
          <td>Eilutes nr</td>
          <td>temperatura</td>
        </tr>
        {temperaturos.map((temperatura, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{temperatura}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Komp6;
