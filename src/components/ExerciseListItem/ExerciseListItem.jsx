import { useState } from "react";
import "./ExerciseListItem.css";

export default function ExerciseListItem({
  exercises,
  handleAddToWorkout,
  loading,
}) {
  // const [showInfo, setShowInfo] = useState(true);

  return (
    <div className="ExerciseListItem">
      <div className="grid-ctr1">
        <div className="grid-ctr2">
          <div className="ExerciseName">{exercises.name}</div>
          <table className="fat-data">
            <tbody>
              <tr>
                <th>Torso</th>
                <th>+{exercises.torsoFatigue}</th>
              </tr>
              <tr>
                <th>Arms</th>
                <th>+{exercises.armsFatigue}</th>
              </tr>
              <tr>
                <th>Legs</th>
                <th>+{exercises.legsFatigue}</th>
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
          onClick={() => handleAddToWorkout(exercises._id)}
          disabled={loading}
        >
          + Add Set
        </button>
      </div>
    </div>
  );
}
