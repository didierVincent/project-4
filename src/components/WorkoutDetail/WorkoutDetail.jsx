import "./WorkoutDetail.css";
import Exercise from "../Exercise/Exercise";
import WorkoutFatigue from "../WorkoutFatigue/WorkoutFatigue";
import { AppContext } from "../../contexts/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as workoutsAPI from "../../utilities/workout-api";
import * as usersAPI from "../../utilities/users-api";

// Used to display the details of any order, including the cart (unpaid order)
export default function WorkoutDetail() {
  const {
    workout,
    setWorkout,
    setActiveWorkout,
    setCurrentUser,
    handleRemoveExerciseFromWorkout,
    handleIncrementQty,
    handleDecrementQty,
    btnLoading,
    setBtnLoading,
    setLoading,
  } = useContext(AppContext);

  const navigate = useNavigate();

  async function handleSaveWorkout() {
    setBtnLoading(true);
    const updatedUser = await usersAPI.updateFatigue();
    setCurrentUser(updatedUser);
    const updatedWorkout = await workoutsAPI.saveWorkout();
    setWorkout(updatedWorkout);
    // add setTimeout here + display message?
    setBtnLoading(false);
    setLoading(true);
    setActiveWorkout(false);
    navigate("/workouts");
    setLoading(false);
  }

  if (!workout) return null;
  const exerciseList = workout.exerciseList.map((exercise) => (
    <Exercise
      exercise={exercise}
      key={exercise._id}
      handleRemoveExerciseFromWorkout={handleRemoveExerciseFromWorkout}
      handleIncrementQty={handleIncrementQty}
      handleDecrementQty={handleDecrementQty}
      btnLoading={btnLoading}
    />
  ));

  const date = new Date(workout.updatedAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long", // "Monday", "Tuesday", etc.
    year: "numeric", // "2024"
    month: "long", // "August", "September", etc.
    day: "numeric", // "14"
  });

  return (
    <div className="WorkoutDetail">
      <div className="grid">
        <div className="title">
          {workout.isDone ? (
            <span>
              Workout <span className="smaller">{workout.workoutId}</span>
            </span>
          ) : (
            <div className="title-date">
              <div className="NEW-Workout">
                Workout #{workout._id.slice(-3).toUpperCase()}
              </div>
              <div className="date">{formattedDate}</div>
            </div>
          )}

          {exerciseList.length ? (
            <div className="fat-table">
              <WorkoutFatigue workout={workout} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div>
        {exerciseList.length ? (
          <>
            {exerciseList}
            <div className="total">
              {workout.isDone ? (
                <span className="right">TOTAL&nbsp;&nbsp;</span>
              ) : (
                <button
                  className="btn-sm"
                  onClick={handleSaveWorkout}
                  disabled={!exerciseList.length}
                >
                  Save Workout
                </button>
              )}
              {/* <span>{workout.totalQty}</span> */}
            </div>
          </>
        ) : (
          <div className="no-exercises">
            Empty Workout! Added exercises will be listed here.
          </div>
        )}
      </div>
    </div>
  );
}
