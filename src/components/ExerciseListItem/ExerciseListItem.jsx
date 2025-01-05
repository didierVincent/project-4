import { useState } from "react";
import "./ExerciseListItem.css";

export default function ExerciseListItem({
  exercise,
  handleAddToWorkout,
  btnLoading,
}) {
  // const [showInfo, setShowInfo] = useState(true);

  return (
    <div className="ExerciseListItem">
      <div className="grid-ctr1">
        <div className="grid-ctr2">
          <div className="ExerciseName">{exercise.name}</div>
          <table className="fat-data">
            <tbody>
              <tr>
                <th>Torso</th>
                <th>+{exercise.torsoFatigue}</th>
              </tr>
              <tr>
                <th>Arms</th>
                <th>+{exercise.armsFatigue}</th>
              </tr>
              <tr>
                <th>Legs</th>
                <th>+{exercise.legsFatigue}</th>
              </tr>
            </tbody>
          </table>

          {/* <div className="info">
            <small>Show/Hide info &nbsp;</small>
            <label class="switch">
              <input type="checkbox" checked></input>
              <span className="slider round"></span>
            </label>
          </div> */}
        </div>
        <button
          className="AddButton"
          onClick={() => handleAddToWorkout(exercise)}
          disabled={btnLoading}
        >
          + Add Set
        </button>
      </div>
    </div>
  );
}
