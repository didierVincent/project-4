import { useState, useEffect, useRef } from "react";
import * as exercisesAPI from "../../utilities/exercise-api";
import * as musclesAPI from "../../utilities/muscle-api";
import "./NewWorkoutPage.css";
import FatigueTable from "../../components/FatigueTable/FatigueTable";
import MuscleList from "../../components/MuscleList/MuscleList";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import WorkoutDetail from "../../components/WorkoutDetail/WorkoutDetail";
import ExerciseListItem from "../../components/ExerciseListItem/ExerciseListItem";

export default function NewWorkoutPage({ user, setUser }) {
  const [exerciseList, setExerciseList] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const categoriesRef = useRef([]);

  useEffect(function () {
    async function getExercises() {
      const exercises = await exercisesAPI.getAll();
      const muscleCats = await musclesAPI.getAll();
      categoriesRef.current = [
        ...new Set(muscleCats.map((muscle) => muscle.name)),
      ];
      setActiveCat(categoriesRef.current[0]);
      setExerciseList(exercises);
    }
    getExercises();
  }, []);

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
        <ExerciseList exerciseList={exerciseList} activeCat={activeCat} />
      </div>
      <div>
        <WorkoutDetail />
      </div>
    </main>
  );
}
