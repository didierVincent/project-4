import "./ExerciseList.css";
import ExerciseListItem from "../ExerciseListItem/ExerciseListItem";

export default function ExerciseList({
  exerciseList,
  activeCat,
  handleAddToWorkout,
  loading,
}) {
  // display only exercises with selected muscle category
  const catExercises = exerciseList.filter((exercise) =>
    exercise.muscle.some((m) => m.name === activeCat)
  );

  const catFatigue = {
    Torso: "torsoFatigue",
    Arms: "armsFatigue",
    Legs: "legsFatigue",
  };

  const currCat = catFatigue[activeCat];

  if (currCat) {
    catExercises.sort((a, b) => b[currCat] - a[currCat]);
  }

  const exercises = catExercises.map((exercise) => (
    <ExerciseListItem
      loading={loading}
      key={exercise._id}
      exercises={exercise}
      handleAddToWorkout={handleAddToWorkout}
    />
  ));
  return (
    <>
      <div className="ExerciseList">{exercises}</div>
    </>
  );
}
