import { useAuthContext } from "./useAuthContext";
import useWorkoutContext from "./useWorkoutContext.js";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: pratimoDispatch } = useWorkoutContext();

  const logout = () => {
    //šaliname user iš localStorage
    localStorage.removeItem("user");

    // naikiname JWT
    dispatch({ type: "LOGOUT" });
    pratimoDispatch({ type: "SET_WORKOUTS", payload: null });
  };
  return { logout };
};
