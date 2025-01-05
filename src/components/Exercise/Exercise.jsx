import "./Exercise.css";

export default function Exercise({
  exercise,
  handleRemoveExerciseFromWorkout,
  handleIncrementQty,
  handleDecrementQty,
  btnLoading,
}) {
  return (
    <div className="Exercise">
      <div className="grid-ctr1">
        <div className="grid-ctr2">
          <div className="ExerciseTitle">
            {exercise.exercise.name}
            <small>&nbsp;&nbsp;[x{exercise.qty} set]&nbsp;&nbsp;</small>
          </div>
          <div className="inc-dec-btns">
            <button
              className="small-btn"
              onClick={() => handleDecrementQty(exercise.exercise)}
              disabled={btnLoading}
            >
              -{" "}
            </button>
            <button
              className="small-btn"
              onClick={() => handleIncrementQty(exercise.exercise)}
              disabled={btnLoading}
            >
              +{" "}
            </button>
          </div>

          <div className="exercise-dmg">
            Torso: +{exercise.exercise.torsoFatigue * exercise.qty}
            <br />
            Arms: +{exercise.exercise.armsFatigue * exercise.qty}
            <br />
            Legs: +{exercise.exercise.legsFatigue * exercise.qty}
            <br />
          </div>
          <button
            className="remove-btn"
            onClick={() => handleRemoveExerciseFromWorkout(exercise.exercise)}
            disabled={btnLoading}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
