import "./App.css";
import Komp1 from "./components/Komp1";
import TekstoBendras from "./components/pvz1/TekstoBendras";
import Parduotuve from "./components/pvz2/parduotuve";
import Paslaugos from "./components/pvz3/Paslaugos";
import Grupe from "./components/pvz4/Grupe";
import Imone from "./components/pvz5/Imone";
import Savaite from "./components/pvz6/Savaite";
import Servisas from "./components/pvz7/Servisas";

function App() {
  return (
    <>
      <Komp1></Komp1>
      <TekstoBendras></TekstoBendras>

      <Parduotuve></Parduotuve>
      <Paslaugos></Paslaugos>
      <Grupe></Grupe>
      <Imone></Imone>
      <Savaite></Savaite>
      <Servisas></Servisas>
    </>
  );
}

export default App;
