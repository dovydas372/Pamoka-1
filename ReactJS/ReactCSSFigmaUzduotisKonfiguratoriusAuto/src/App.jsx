import { use, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Paketas from "./components/Paketas/Paketas";
import Variklis from "./components/Variklis/Variklis";

function App() {
  const [kaina, setKaina] = useState();
  const suma = (gautaKaina) => {
    setKaina(kaina + gautaKaina);
  };
  return (
    <>
      <Header></Header>
      <div className="container">
        <section className="first">
          <div>
            <img
              src=".\src\assets\img\f3d55ece923ce5d9094c0de5a5da2cfbeaeae0bd.png"
              alt=""
            />
          </div>
          <div>
            <Paketas></Paketas>
          </div>
        </section>
        <section className="second">
          \
          <div>
            <Variklis pasirinkimasFn={(a) => suma(a)}></Variklis>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
