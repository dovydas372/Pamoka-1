import useProgramContext from "../hooks/useProgramContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../hooks/useAuthContext";

const ProgramaDetails = ({ programa }) => {
  const { dispatch } = useProgramContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/programs/` + programa._id,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_PROGRAM", payload: json });
    }
  };

  return (
    <div className="programa-details">
      <h4>{programa.title}</h4>
      <p>Programos sukūrė: {programa.user_id}</p>
      <p>
        Sukurta:{" "}
        {formatDistanceToNow(new Date(programa.createdAt), { addSuffix: true })}
      </p>

      {programa.pratimai && programa.pratimai.length > 0 && (
        <ul>
          {programa.pratimai.map((pratimas) => (
            <li key={pratimas._id}>
              {pratimas.title} - {pratimas.reps} reps, {pratimas.load} kg
            </li>
          ))}
        </ul>
      )}

      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default ProgramaDetails;
