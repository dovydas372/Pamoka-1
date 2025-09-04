import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import useProgramContext from "../hooks/useProgramContext";
import ProgramDetails from "../components/ProgramosDetails";

const Programos = () => {
  const { user } = useAuthContext();
  const { programos, dispatch } = useProgramContext();

  useEffect(() => {
    const fetchProgramas = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/programs`,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_PROGRAMS", payload: json });
      }
    };

    if (user) fetchProgramas();
  }, [dispatch, user]);

  return (
    <div className="programs">
      {programos &&
        programos.map((programa) => (
          <ProgramDetails key={programa._id} programa={programa} />
        ))}
    </div>
  );
};

export default Programos;
