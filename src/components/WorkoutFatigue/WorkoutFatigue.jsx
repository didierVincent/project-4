import "./WorkoutFatigue.css";
import { useMemo } from "react";

export default function WorkoutFatigue({ user, workout, exerciseList }) {
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
    <div className="WorkoutFatigue">
      <div className="new-fatigue-lvl">Workout Fatigue!</div>
      <table>
        <tbody>
          <tr>
            <th>Torso: </th>
            <th>workout.init-> {workout.initFatigue.torsoFatigue}</th>
            <th>--></th>
            <th>workout.added->{initialTorsoFatigue}</th>
          </tr>
          <tr>
            <th>Arms: </th>
            <th>{user.fatigue.armsFatigue}</th>
            <th>--></th>
            <th>{initialArmsFatigue}</th>
          </tr>
          <tr>
            <th>Legs:</th>
            <th> {user.fatigue.legsFatigue}</th>
            <th>--></th>
            <th>{initialLegsFatigue}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
