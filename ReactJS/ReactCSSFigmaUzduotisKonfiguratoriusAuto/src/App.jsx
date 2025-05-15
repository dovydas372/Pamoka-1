import { use, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Paketas from "./components/Paketas/Paketas";
import Variklis from "./components/Variklis/Variklis";
import PapildomiPriedai from "./components/PapildomiPriedai/PapildomiPriedai";
import Spalva from "./components/Spalva/Spalva";
import Salonas from "./components/Salonas/Salonas";
import Dekojame from "./components/Dekojame/Dekojame";

function App() {
  const [paketas, setPaketas] = useState();
  const [spalva, setSpalva] = useState();
  const [variklis, setVariklis] = useState();
  const [saloans, setSalonas] = useState();
  const [priedai, setPriedai] = useState();
  const [pirkti, setPirkti] = useState(false);

  const paketasK = (gautaKaina) => {
    setPaketas(gautaKaina);
  };
  const spalvaK = (gautaKaina) => {
    setSpalva(gautaKaina);
  };

  const variklisK = (gautaKaina) => {
    setVariklis(gautaKaina);
  };
  const salonasK = (gautaKaina) => {
    setSalonas(gautaKaina);
  };
  const priedaiK = (gautaKaina) => {
    setPriedai(gautaKaina);
  };

  const galutineKainaFn = () => {
    return (
      (isNaN(paketas) ? 0 : Number(paketas)) +
      (isNaN(spalva) ? 0 : Number(spalva)) +
      (isNaN(variklis) ? 0 : Number(variklis)) +
      (isNaN(saloans) ? 0 : Number(saloans)) +
      (isNaN(priedai) ? 0 : Number(priedai))
    );
  };

  const pirktiFn = () => {
    setPirkti(true);
  };

  const atgalFn = (a) => {
    setPaketas(0);
    setSpalva(0);
    setVariklis(0);
    setSalonas(0);
    setPriedai(0);
    setPirkti(a);
  };

  return (
    <>
      <Header></Header>
      <div className="container">
        {pirkti ? (
          <Dekojame atgal={(a) => atgalFn(a)}></Dekojame>
        ) : (
          <div>
            <section className="first">
              <div>
                <img
                  src=".\src\assets\img\f3d55ece923ce5d9094c0de5a5da2cfbeaeae0bd.png"
                  alt=""
                />
              </div>
              <div>
                <Paketas pasirinkimasFn={(a) => paketasK(a)}></Paketas>
              </div>
            </section>
            <section className="second">
              <div>
                <Spalva pasirinkimasFn={(a) => spalvaK(a)}></Spalva>
              </div>
              <div>
                <Variklis pasirinkimasFn={(a) => variklisK(a)}></Variklis>
              </div>
            </section>
            <section className="third">
              <div>
                <Salonas pasirinkimasFn={(a) => salonasK(a)}></Salonas>
              </div>
              <div>
                <PapildomiPriedai
                  pasirinkimasFn={(a) => priedaiK(a)}
                ></PapildomiPriedai>
              </div>
            </section>

            <hr />

            <div className="footer">
              <div className="galutineKaina">
                Galutinė kaina:{" "}
                <span className="galutineKSk">{galutineKainaFn()}</span>
              </div>
              <div>
                <button onClick={pirktiFn}>Pirkti</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
