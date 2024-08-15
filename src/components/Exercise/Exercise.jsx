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
            Torso: +{exerciseList.exercise.torsoFatigue * exerciseList.qty}{" "}
            Arms: +{exerciseList.exercise.armsFatigue * exerciseList.qty} Legs:
            +{exerciseList.exercise.legsFatigue * exerciseList.qty}
            <button
              className="remove-btn"
              onClick={() => handleRemoveExercise(exerciseList.exercise._id)}
            >
              Remove
            </button>
          </div>

          {/* <table className="exercise-dmg">
            <tbody>
              <tr>
                <th>Torso</th>
                <th></th>
              </tr>
              <tr>
                <th>Arms</th>
                <th>+{exerciseList.exercise.armsFatigue}</th>
              </tr>
              <tr>
                <th>Legs</th>
                <th>+{exerciseList.exercise.legsFatigue}</th>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
}
