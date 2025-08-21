import ApieMus from "./components/ApieMus";
import Foooter from "./components/Foooter";
import Header from "./components/Header";
import Navbaras from "./components/Navbaras";
import Paslaugos from "./components/Paslaugos";

function App() {
  return (
    <>
      <div className="conteineris">
        <Navbaras></Navbaras>
        <Header></Header>
        <Paslaugos></Paslaugos>
        <ApieMus></ApieMus>
        <Foooter></Foooter>
      </div>
    </>
  );
}

export default App;
