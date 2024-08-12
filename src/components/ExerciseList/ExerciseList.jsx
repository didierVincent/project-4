import "./ExerciseList.css";
import ExerciseListItem from "../ExerciseListItem/ExerciseListItem";

export default function ExerciseList({ exerciseList }) {
  const exer = exerciseList.map((exercise) => (
    <ExerciseListItem key={exercise._id} exercises={exercise} />
  ));
  return (
    <>
      <h3 className="ExerciseList">ExerciseList</h3>
      <div>{exer}</div>
    </>
  );
}
