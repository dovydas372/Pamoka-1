import { createContext, useReducer } from "react";

export const ProgramContext = createContext();

export const programReducer = (state, action) => {
  switch (action.type) {
    case "SET_PROGRAMS":
      return { programos: action.payload };
    case "CREATE_PROGRAM":
      return { programos: [action.payload, ...state.programos] };
    case "DELETE_PROGRAM":
      return {
        programos: state.programos.filter(
          (programa) => programa._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const ProgramContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(programReducer, { programos: [] });

  return (
    <ProgramContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProgramContext.Provider>
  );
};

export default ProgramContext;
