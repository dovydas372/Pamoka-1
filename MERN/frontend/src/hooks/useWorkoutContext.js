import { useContext } from "react";
import WorkoutContext from "../context/WorkoutContext";

const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw Error("useWorkoutContext turi būti WorkoutContextProvider viduje");
  }
  return context;
};

export default useWorkoutContext;
