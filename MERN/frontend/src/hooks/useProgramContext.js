import { useContext } from "react";
import { ProgramContext } from "../context/ProgramaContext";

const useProgramContext = () => {
  const context = useContext(ProgramContext);
  if (!context) {
    throw Error("useProgramContext turi būti ProgramContextProvider viduje");
  }
  return context;
};

export default useProgramContext;
