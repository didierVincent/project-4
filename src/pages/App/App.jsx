import { useState, useEffect, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import * as exercisesAPI from "../../utilities/exercise-api";
import * as musclesAPI from "../../utilities/muscle-api";
import * as workoutsAPI from "../../utilities/workout-api";
import * as usersAPI from "../../utilities/users-api";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import NewWorkoutPage from "../NewWorkoutPage/NewWorkoutPage";
import WorkoutHistoryPage from "../WorkoutHistoryPage/WorkoutHistoryPage";
import AppTitle from "../../components/AppTitle/AppTitle";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeWorkout, setActiveWorkout] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const [exerciseList, setExerciseList] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const navigate = useNavigate();

  const categoriesRef = useRef([]);

  useEffect(function () {
    async function getExercises() {
      setLoading(true);
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
      setActiveWorkout(true);
      setLoading(false);
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
          setLoading(false);
        }
      }
      fetchUserData();
    },
    [workout]
  );

  useEffect(function () {
    async function getWorkoutHistory() {
      setLoading(true);
      const savedWorkouts = await workoutsAPI.getWorkoutHistory();
      setWorkout(savedWorkouts);
      setLoading(false);
    }
    getWorkoutHistory();
  }, []);

  async function handleAddToWorkout(exerciseId) {
    setBtnLoading(true);
    const updatedWorkout = await workoutsAPI.addExerciseToWorkout(exerciseId);
    setWorkout(updatedWorkout);
    setBtnLoading(false);
  }

  async function handleRemoveExercise(exerciseId) {
    setBtnLoading(true);
    const updatedWorkout = await workoutsAPI.removeExerciseFromWorkout(
      exerciseId
    );
    setWorkout(updatedWorkout);
    setBtnLoading(false);
  }

  async function handleChangeQty(exerciseId, newQty) {
    setBtnLoading(true);
    const updatedWorkout = await workoutsAPI.changeExerciseQty(
      exerciseId,
      newQty
    );
    setWorkout(updatedWorkout);
    setBtnLoading(false);
  }

  async function handleSaveWorkout() {
    setBtnLoading(true);
    const updatedUser = await usersAPI.updateFatigue();
    setUser(updatedUser);
    const updatedWorkout = await workoutsAPI.saveWorkout();
    setWorkout(updatedWorkout);
    // add setTimeout here + display message?
    setBtnLoading(false);
    setLoading(true);
    setActiveWorkout(false);
    navigate("/workouts");
  }

  async function handleResetFatigueAndWorkout() {
    setLoading(true);
    const updatedUser = await usersAPI.resetFatigue();
    setUser(updatedUser);
    await workoutsAPI.resetWorkout();
    const updatedWorkout = await workoutsAPI.getWorkout();
    setWorkout(updatedWorkout);
    setLoading(false);
  }

  async function handleAddRestDay() {
    setBtnLoading(true);
    const updatedUser = await usersAPI.addRestDay();
    setUser(updatedUser);
    const updatedWorkout = await workoutsAPI.addRestDay();
    setWorkout(updatedWorkout);
    setBtnLoading(false);
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar
            user={user}
            setUser={setUser}
            loading={loading}
            setLoading={setLoading}
          />
          <AppTitle />
          <Routes>
            <Route path="/" element={<Navigate to="/workouts/new" />} />
            <Route
              path="/workouts/new"
              element={
                <NewWorkoutPage
                  user={user}
                  setUser={setUser}
                  workout={workout}
                  setWorkout={setWorkout}
                  loading={loading}
                  setLoading={setLoading}
                  activeWorkout={activeWorkout}
                  setActiveWorkout={setActiveWorkout}
                  btnLoading={btnLoading}
                  setBtnLoading={setBtnLoading}
                />
              }
            />
            <Route
              path="/workouts"
              element={
                <WorkoutHistoryPage
                  user={user}
                  setUser={setUser}
                  workout={workout}
                  setWorkout={setWorkout}
                  loading={loading}
                  setLoading={setLoading}
                  activeWorkout={activeWorkout}
                  btnLoading={btnLoading}
                />
              }
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
