import "./App.css";
import AtvirkstinisTekstas from "./components/AtvirkstinisTekstas";
import CapsLockIspejimas from "./components/CapsLockIspejimas";
import MygtukoSpalva from "./components/MygtukoSpalva";
import PaspaudimuSkaiciuokle from "./components/PaspaudimuSkaiciuokle";
import RaidziuFiltras from "./components/RaidziuFiltras";
import SimboliuSkaicius from "./components/SimboliuSkaicius";
import Skaiciuotuvas from "./components/Skaiciuotuvas";
import SlaptazodzioRodymas from "./components/SlaptazodzioRodymas";

function App() {
  return (
    <>
      <Skaiciuotuvas></Skaiciuotuvas>
      <SimboliuSkaicius></SimboliuSkaicius>
      <CapsLockIspejimas></CapsLockIspejimas>
      <PaspaudimuSkaiciuokle></PaspaudimuSkaiciuokle>
      <AtvirkstinisTekstas></AtvirkstinisTekstas>
      <SlaptazodzioRodymas></SlaptazodzioRodymas>
      <RaidziuFiltras></RaidziuFiltras>
      <MygtukoSpalva></MygtukoSpalva>
    </>
  );
}

export default App;
