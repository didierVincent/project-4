import "./WorkoutFatigue.css";
import { useMemo } from "react";

export default function WorkoutFatigue({ user, workout, exerciseList }) {
  const { totalTorsoFatigue, totalArmsFatigue, totalLegsFatigue } = useMemo(
    () => ({
      totalTorsoFatigue:
        workout.initFatigue.torsoFatigue + workout.addedFatigue.torsoFatigue,
      totalArmsFatigue:
        workout.initFatigue.armsFatigue + workout.addedFatigue.armsFatigue,
      totalLegsFatigue:
        workout.initFatigue.legsFatigue + workout.addedFatigue.legsFatigue,
    }),
    [workout.addedFatigue]
  );
  return (
    <div className="WorkoutFatigue">
      <table>
        <tbody>
          <tr>
            <th colSpan={4}> Workout Fatigue!</th>
          </tr>
          <tr>
            <th>Torso: </th>
            <th>{workout.initFatigue.torsoFatigue}</th>
            <th>--></th>
            <th>{totalTorsoFatigue}</th>
          </tr>
          <tr>
            <th>Arms: </th>
            <th>{workout.initFatigue.armsFatigue}</th>
            <th>--></th>
            <th>{totalArmsFatigue}</th>
          </tr>
          <tr>
            <th>Legs:</th>
            <th> {workout.initFatigue.legsFatigue}</th>
            <th>--></th>
            <th>{totalLegsFatigue}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
