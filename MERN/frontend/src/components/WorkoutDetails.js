import useWorkoutContext from "../hooks/useWorkoutContext";

const WorkoutDetails = ({ pratimas }) => {
  const { dispatch } = useWorkoutContext();

  const handleClick = async () => {
    const response = await fetch("/api/pratimai" + pratimas._id, {
      method: "DELETE",
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", playload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{pratimas.title}</h4>
      <p>
        <strong>Svoris (kg):</strong>
        {pratimas.load}
      </p>
      <p>
        <strong>Pratimo pakartojimai:</strong>
        {pratimas.reps}
      </p>
      <p>{pratimas.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};

export default WorkoutDetails;
