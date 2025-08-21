import "./App.css";
import Pardavejas from "./components/AutoPardavejas/Pardavejas";
import Imone from "./components/Bonusai/Imone";
import HobiuParduotuve from "./components/Deliones/HobiuParduotuve";
import Mokymai from "./components/MokymuInfo/Mokymai";
import Pasaulis from "./components/PasaulioInfo/Pasaulis";
import Kategorijas from "./components/Portalas/Kategorijas";

import VisosRoles from "./components/Roles/VisosRoles";
import Studentas from "./components/StudentoInfo/Studentas";

function App() {
  return (
    <>
      <Pasaulis></Pasaulis>
      <VisosRoles></VisosRoles>
      <Imone></Imone>
      <Pardavejas></Pardavejas>
      <HobiuParduotuve></HobiuParduotuve>
      <Studentas></Studentas>
      <Kategorijas></Kategorijas>
      <Mokymai></Mokymai>
    </>
  );
}

export default App;
