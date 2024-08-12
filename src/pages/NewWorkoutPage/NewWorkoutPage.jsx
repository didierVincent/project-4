import { useState, useEffect, useRef } from "react";
import * as exercisesAPI from "../../utilities/exercise-api";
import "./NewWorkoutPage.css";
import FatigueTable from "../../components/FatigueTable/FatigueTable";
import MuscleList from "../../components/MuscleList/MuscleList";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import WorkoutDetail from "../../components/WorkoutDetail/WorkoutDetail";
import ExerciseListItem from "../../components/ExerciseListItem/ExerciseListItem";

export default function NewWorkoutPage() {
  const [exerciseList, setExerciseList] = useState([]);
  // const [activeCat, setActiveCat] = useState("");
  // const categoriesRef = useRef([]);

  useEffect(function () {
    async function getExercises() {
      const exercises = await exercisesAPI.getAll();
      setExerciseList(exercises);
    }
    getExercises();
  }, []);

  return (
    <main className="NewWorkoutPage">
      <aside>
        {/* replace table below with svg later */}
        <FatigueTable />
        <MuscleList />
      </aside>
      <div>
        <ExerciseList exerciseList={exerciseList} />
      </div>
      <div>
        <WorkoutDetail />
      </div>
    </main>
  );
}
