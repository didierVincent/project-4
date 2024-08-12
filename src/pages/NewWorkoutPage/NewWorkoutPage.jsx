import { useState, useEffect, useRef } from "react";
import "./NewWorkoutPage.css";
import FatigueTable from "../../components/FatigueTable/FatigueTable";
import MuscleList from "../../components/MuscleList/MuscleList";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import WorkoutDetail from "../../components/WorkoutDetail/WorkoutDetail";

export default function NewWorkoutPage() {
  return (
    <>
      <h2>
        <aside>
          {/* replace table below with svg later */}
          <FatigueTable />
          <MuscleList />
        </aside>
      </h2>
      <div>
        <ExerciseList />
      </div>
      <div>
        <WorkoutDetail />
      </div>
    </>
  );
}
