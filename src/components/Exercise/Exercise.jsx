import { useMemo } from "react";
import "./Exercise.css";

export default function Exercise({
  exerciseList,
  workout,
  handleRemoveExercise,
  handleChangeQty,
  loading,
}) {
  const { initialTorsoFatigue, initialArmsFatigue, initialLegsFatigue } =
    useMemo(
      () => ({
        initialTorsoFatigue: workout.addedFatigue.torsoFatigue,
        initialArmsFatigue: workout.addedFatigue.armsFatigue,
        initialLegsFatigue: workout.addedFatigue.legsFatigue,
      }),
      [workout.addedFatigue]
    );
  return (
    <div className="Exercise">
      <div className="grid-ctr1">
        <div className="grid-ctr2">
          <div className="ExerciseTitle">
            {exerciseList.exercise.name}
            <small>&nbsp;&nbsp;[x{exerciseList.qty} set]&nbsp;&nbsp;</small>
          </div>
          <div className="inc-dec-btns">
            <button
              className="small-btn"
              onClick={() =>
                handleChangeQty(exerciseList._id, exerciseList.qty - 1)
              }
              disabled={loading}
            >
              -{" "}
            </button>
            <button
              className="small-btn"
              onClick={() =>
                handleChangeQty(exerciseList._id, exerciseList.qty + 1)
              }
              disabled={loading}
            >
              +{" "}
            </button>
          </div>

          <div className="exercise-dmg">
            Torso: +{exerciseList.exercise.torsoFatigue * exerciseList.qty}
            <br />
            Arms: +{exerciseList.exercise.armsFatigue * exerciseList.qty}
            <br />
            Legs: +{exerciseList.exercise.legsFatigue * exerciseList.qty}
            <br />
          </div>
          <button
            className="remove-btn"
            onClick={() => handleRemoveExercise(exerciseList.exercise._id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
