import "./ExerciseList.css";
import ExerciseListItem from "../ExerciseListItem/ExerciseListItem";

export default function ExerciseList({ exerciseList, activeCat }) {
  const catExercises = exerciseList.filter((exercise) =>
    exercise.muscle.some((m) => m.name === activeCat)
  );
  const exercises = catExercises.map((exercise) => (
    <ExerciseListItem key={exercise._id} exercises={exercise} />
  ));
  return (
    <>
      <h3 className="ExerciseList">ExerciseList</h3>
      <div>{exercises}</div>
    </>
  );
}
