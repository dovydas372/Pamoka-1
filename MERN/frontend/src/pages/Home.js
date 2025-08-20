import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import useWorkoutContext from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();
  const { pratimai, dispatch } = useWorkoutContext();
  useEffect(() => {
    const fetchPratimus = async () => {
      const response = await fetch("/api/pratimai", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    if (user) {
      fetchPratimus();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="workouts">
        {pratimai &&
          pratimai.map((pratimas) => (
            <WorkoutDetails
              key={pratimas._id}
              pratimas={pratimas}
            ></WorkoutDetails>
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
