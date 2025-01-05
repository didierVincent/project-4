import { useContext, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { getUser } from "../../utilities/users-service";
// import * as exercisesAPI from "../../utilities/exercise-api";
// import * as musclesAPI from "../../utilities/muscle-api";
// import * as workoutsAPI from "../../utilities/workout-api";
// import * as usersAPI from "../../utilities/users-api";
import "./App.css";
import { AppContext, AppProvider } from "../../contexts/AppContext";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import NewWorkoutPage from "../NewWorkoutPage/NewWorkoutPage";
import WorkoutHistoryPage from "../WorkoutHistoryPage/WorkoutHistoryPage";
import AppTitle from "../../components/AppTitle/AppTitle";

export default function App() {
  const { currentUser, workout, loading } = useContext(AppContext); // Access currentUser from context
  return (
    <main className="App">
      {loading ? (
        <div>Loading...</div>
      ) : currentUser && workout ? (
        <>
          <NavBar />
          <AppTitle />
          <Routes>
            <Route path="/" element={<Navigate to="/workouts/new" />} />
            <Route path="/workouts/new" element={<NewWorkoutPage />} />
            <Route path="/workouts" element={<WorkoutHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}
