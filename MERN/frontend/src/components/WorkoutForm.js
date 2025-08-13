import { useState } from "react";
import useWorkoutContext from "../hooks/useWorkoutContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSumbit = async (e) => {
    e.preventDefault();
    const pratimas = { title, load, reps };
    const response = await fetch("/api/pratimai", {
      method: "POST",
      body: JSON.stringify(pratimas),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      console.log(error);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("Naujas pratimas pradėti");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSumbit}>
      <h3>Pradėti naują pratimą</h3>
      <label>Pratimo pavadinimas:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Svoris (kg)</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <label>Pratimo pakrtojimai:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <button>Pridėti pratimą</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
