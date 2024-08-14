import "./Exercise.css";

export default function Exercise({
  exerciseList,
  workout,
  user,
  handleRemoveExercise,
}) {
  return (
    <div className="Exercise">
      <div className="grid-ctr1">
        <div className="grid-ctr2">
          <div className="ExerciseTitle">
            {exerciseList.exercise.name}
            <small>&nbsp;&nbsp;[x{exerciseList.qty} set]&nbsp;&nbsp;</small>
            <button className="small-btn">-</button>
            <button className="small-btn">+</button>
            <button
              className="remove-btn"
              onClick={() => handleRemoveExercise(exerciseList.exercise._id)}
            >
              Remove
            </button>
          </div>
          <div className="exercise-dmg">Damage</div>
          <table>
            <tbody>
              <tr>
                <th>Torso</th>
                <th>+{exerciseList.exercise.torsoFatigue}</th>
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
          </table>
          <div className="new-fatigue-lvl">Added Fatigue</div>
          <table>
            <tbody>
              <tr>
                <th>0</th>
                <th>--></th>
                <th>{workout.addedFatigue.torsoFatigue}</th>
              </tr>
              <tr>
                <th>0</th>
                <th>--></th>
                <th>{workout.addedFatigue.armsFatigue}</th>
              </tr>
              <tr>
                <th>0</th>
                <th>--></th>
                <th>{workout.addedFatigue.armsFatigue}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
