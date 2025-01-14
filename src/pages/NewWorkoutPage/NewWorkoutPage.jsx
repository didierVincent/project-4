import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./NewWorkoutPage.css";
import FatigueTable from "../../components/FatigueTable/FatigueTable";
import MuscleList from "../../components/MuscleList/MuscleList";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import WorkoutDetail from "../../components/WorkoutDetail/WorkoutDetail";
import ColorScale from "../../components/ColorScale/ColorScale";
import SVGBodyModel from "../../components/SVGBodyModel/SVGBodyModel";
import ManualButtons from "../../components/ManualButtons/ManualButtons";
import { AppContext } from "../../contexts/AppContext";

export default function NewWorkoutPage() {
  const {
    currentUser,
    setCurrentUser,
    workout,
    setWorkout,
    loading,
    setLoading,
    setActiveWorkout,
    btnLoading,
    setBtnLoading,
    exerciseList,
    activeCat,
    setActiveCat,
    categories,
    handleAddToWorkout,
    handleRemoveExerciseFromWorkout,
    handleIncrementQty,
    handleDecrementQty,
    handleResetFatigueAndWorkout,
    handleAddRestDay,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const categoriesRef = useRef([]);

  // async function handleSaveWorkout() {
  //   setBtnLoading(true);
  //   const updatedUser = await usersAPI.updateFatigue();
  //   setCurrentUser(updatedUser);
  //   const updatedWorkout = await workoutsAPI.saveWorkout();
  //   setWorkout(updatedWorkout);
  //   // add setTimeout here + display message?
  //   setBtnLoading(false);
  //   setLoading(true);
  //   setActiveWorkout(false);
  //   navigate("/workouts");
  // }

  // async function handleResetFatigueAndWorkout() {
  //   setLoading(true);
  //   const updatedUser = await usersAPI.resetFatigue();
  //   setCurrentUser(updatedUser);
  //   await workoutsAPI.resetWorkout();
  //   const updatedWorkout = await workoutsAPI.getWorkout();
  //   setWorkout(updatedWorkout);
  //   setLoading(false);
  // }

  // async function handleAddRestDay() {
  //   setBtnLoading(true);
  //   const updatedUser = await usersAPI.addRestDay();
  //   setCurrentUser(updatedUser);
  //   const updatedWorkout = await workoutsAPI.addRestDay();
  //   setWorkout(updatedWorkout);
  //   setBtnLoading(false);
  // }

  // testing commit on new device //

  return (
    <main className="NewWorkoutPage">
      {!loading ? (
        <>
          <aside>
            {/* replace table below with svg later */}
            <div className="user-name">{currentUser.name}</div>
            <SVGBodyModel />
            <FatigueTable />
            <ColorScale />
            <ManualButtons
              handleResetFatigueAndWorkout={handleResetFatigueAndWorkout}
              handleAddRestDay={handleAddRestDay}
              btnLoading={btnLoading}
            />
          </aside>
          <div className="middle">
            <div className="cat-text">Exercises by Muscle Groups</div>
            <MuscleList
              categories={categories}
              activeCat={activeCat}
              setActiveCat={setActiveCat}
            />
            <hr />
            <div className="cat-text">
              Add exercises below and build your workout!
            </div>
            <hr />

            <ExerciseList
              btnLoading={btnLoading}
              exerciseList={exerciseList}
              activeCat={activeCat}
              handleAddToWorkout={handleAddToWorkout}
            />
          </div>
          <div className="right">
            <WorkoutDetail
              loading={loading}
              workout={workout}
              currentUser={currentUser}
              handleRemoveExerciseFromWorkout={handleRemoveExerciseFromWorkout}
              handleIncrementQty={handleIncrementQty}
              handleDecrementQty={handleDecrementQty}
              btnLoading={btnLoading}
            />
          </div>
        </>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </main>
  );
}
