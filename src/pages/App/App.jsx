import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import NewWorkoutPage from "../NewWorkoutPage/NewWorkoutPage";
import WorkoutHistoryPage from "../WorkoutHistoryPage/WorkoutHistoryPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Navigate to="/workouts/new" />} />
            <Route
              path="/workouts/new"
              element={<NewWorkoutPage user={user} setUser={setUser} />}
            />
            <Route
              path="/workouts"
              element={<WorkoutHistoryPage user={user} setUser={setUser} />}
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
