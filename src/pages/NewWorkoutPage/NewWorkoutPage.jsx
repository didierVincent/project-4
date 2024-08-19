import { useState, useEffect, useRef } from "react";
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

export default function NewWorkoutPage({
  user,
  setUser,
  workout,
  setWorkout,
  loading,
  setLoading,
  setActiveWorkout,
  btnLoading,
  setBtnLoading,
}) {
  return (
    <main className="NewWorkoutPage">
      {!loading ? (
        <>
          <aside>
            {/* replace table below with svg later */}
            <div className="user-name">{user.name}</div>
            <SVGBodyModel workout={workout} />
            <FatigueTable user={user} workout={workout} />
            <ColorScale user={user} workout={workout} />
            <ManualButtons
              handleResetFatigueAndWorkout={handleResetFatigueAndWorkout}
              handleAddRestDay={handleAddRestDay}
              btnLoading={btnLoading}
            />
          </aside>
          <div className="middle">
            <div className="cat-text">Exercises by Muscle Groups</div>
            <MuscleList
              categories={categoriesRef.current}
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
              user={user}
              handleRemoveExercise={handleRemoveExercise}
              handleChangeQty={handleChangeQty}
              handleSaveWorkout={handleSaveWorkout}
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
