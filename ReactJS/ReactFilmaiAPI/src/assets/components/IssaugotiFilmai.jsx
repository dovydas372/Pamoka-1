import { useEffect, useState } from "react";
import Filmai from "./Filmai";
import axios from "axios";

const IssaugotiFilmai = () => {
  const [filmaiPuslapis, setPuslapisFilmu] = useState([]);
  console.log(1);
  useEffect(() => {
    const saugoti = localStorage.getItem("moviesID");
    let saugotiMasyvas = JSON.parse(saugoti);
    setPuslapisFilmu(saugotiMasyvas);
  }, []);

  return (
    <>
      <div>IssaugotiFilmai</div>
      <button>spausti</button>
      <div>
        <Filmai
          filmai={filmaiPuslapis}
          atsinaujino={(filmai) => setPuslapisFilmu(filmai)}
        ></Filmai>
      </div>
    </>
  );
};

export default IssaugotiFilmai;
