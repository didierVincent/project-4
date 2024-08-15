import { useState, useEffect, useRef } from "react";
import * as exercisesAPI from "../../utilities/exercise-api";
import * as musclesAPI from "../../utilities/muscle-api";
import * as workoutsAPI from "../../utilities/workout-api";
import * as usersAPI from "../../utilities/users-api";
import "./NewWorkoutPage.css";
import FatigueTable from "../../components/FatigueTable/FatigueTable";
import MuscleList from "../../components/MuscleList/MuscleList";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import WorkoutDetail from "../../components/WorkoutDetail/WorkoutDetail";
import ColorScale from "../../components/ColorScale/ColorScale";
import SVGBodyModel from "../../components/SVGBodyModel/SVGBodyModel";
import ManualButtons from "../../components/ManualButtons/ManualButtons";

export default function NewWorkoutPage({ user, setUser }) {
  const [exerciseList, setExerciseList] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(false);
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

    async function getWorkout() {
      const workout = await workoutsAPI.getWorkout();
      setWorkout(workout);
    }
    getWorkout();
  }, []);

  useEffect(
    function () {
      async function fetchUserData() {
        const updatedUser = await usersAPI.fetchData();
        if (
          JSON.stringify(updatedUser.fatigue) !== JSON.stringify(user.fatigue)
        ) {
          setUser(updatedUser);
        }
      }
      fetchUserData();
    },
    [workout]
  );

  async function handleAddToWorkout(exerciseId) {
    setLoading(true);
    const updatedWorkout = await workoutsAPI.addExerciseToWorkout(exerciseId);
    setWorkout(updatedWorkout);
    setLoading(false);
  }

  async function handleRemoveExercise(exerciseId) {
    setLoading(true);
    const updatedWorkout = await workoutsAPI.removeExerciseFromWorkout(
      exerciseId
    );
    setWorkout(updatedWorkout);
    setLoading(false);
  }

  async function handleChangeQty(exerciseId, newQty) {
    setLoading(true);
    const updatedWorkout = await workoutsAPI.changeExerciseQty(
      exerciseId,
      newQty
    );
    console.log("this is updatedWorkout -> ", updatedWorkout);
    setWorkout(updatedWorkout);
    setLoading(false);
  }

  return (
    <main className="NewWorkoutPage">
      {workout ? (
        <>
          <aside>
            {/* replace table below with svg later */}
            <SVGBodyModel user={user} workout={workout} />
            <FatigueTable user={user} workout={workout} />
            <ColorScale user={user} workout={workout} />
            <ManualButtons />
          </aside>
          <div className="middle">
            <MuscleList
              categories={categoriesRef.current}
              activeCat={activeCat}
              setActiveCat={setActiveCat}
            />
            <ExerciseList
              loading={loading}
              exerciseList={exerciseList}
              activeCat={activeCat}
              handleAddToWorkout={handleAddToWorkout}
            />
          </div>
          <div>
            <WorkoutDetail
              loading={loading}
              workout={workout}
              user={user}
              handleRemoveExercise={handleRemoveExercise}
              handleChangeQty={handleChangeQty}
            />
          </div>
        </>
      ) : null}
    </main>
  );
}
