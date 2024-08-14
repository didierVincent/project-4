import { useState, useEffect, useRef } from "react";
import * as exercisesAPI from "../../utilities/exercise-api";
import * as musclesAPI from "../../utilities/muscle-api";
import * as workoutsAPI from "../../utilities/workout-api";
import "./NewWorkoutPage.css";
import FatigueTable from "../../components/FatigueTable/FatigueTable";
import MuscleList from "../../components/MuscleList/MuscleList";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import WorkoutDetail from "../../components/WorkoutDetail/WorkoutDetail";

export default function NewWorkoutPage({ user, onWorkoutUpdated }) {
  const [exerciseList, setExerciseList] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const [userFatigue, setUserFatigue] = useState([]);
  const [workout, setWorkout] = useState(null);
  const categoriesRef = useRef([]);

  useEffect(function () {
    async function getExercises() {
      const exercises = await exercisesAPI.getAll();
      const muscleCats = await musclesAPI.getAll();
      const userFatigue = await userFatigueAPI.getUserFatigue(user._id);
      categoriesRef.current = [
        ...new Set(muscleCats.map((muscle) => muscle.name)),
      ];
      setUserFatigue(userFatigue);
      setActiveCat(categoriesRef.current[0]);
      setExerciseList(exercises);
    }
    getExercises();

    async function getWorkout() {
      const workout = await workoutsAPI.getWorkout();
      setWorkout(workout);
    }
    getWorkout();
  }, []);

  async function handleAddToWorkout(exerciseId) {
    const updatedWorkout = await workoutsAPI.addExerciseToWorkout(exerciseId);
    setWorkout(updatedWorkout);
    onWorkoutUpdated();
    // setUser(user);
  }

  async function handleRemoveExercise(exerciseId) {
    const updatedWorkout = await workoutsAPI.removeExerciseFromWorkout(
      exerciseId
    );
    setWorkout(updatedWorkout);
  }

  return (
    <main className="NewWorkoutPage">
      <aside>
        {/* replace table below with svg later */}
        <FatigueTable user={user} />
        <MuscleList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
      </aside>
      <div>
        <ExerciseList
          exerciseList={exerciseList}
          activeCat={activeCat}
          handleAddToWorkout={handleAddToWorkout}
        />
      </div>
      <div>
        <WorkoutDetail
          workout={workout}
          user={user}
          handleRemoveExercise={handleRemoveExercise}
        />
      </div>
    </main>
  );
}
