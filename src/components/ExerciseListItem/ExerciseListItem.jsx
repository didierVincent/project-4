import "./ExerciseListItem.css";

export default function ExerciseListItem({ exercises }) {
  return (
    <div className="ExerciseListItem">
      <h3>{exercises.name}</h3>
      <div>Torso +{exercises.torsoFatigue}</div>
      <div>Arms +{exercises.armsFatigue}</div>
      <div>Legs +{exercises.legsFatigue}</div>
      <div>
        <button>+Add</button>
      </div>
    </div>
  );
}
