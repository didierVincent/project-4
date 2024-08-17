import "./ManualButtons.css";

export default function ManualButtons({
  handleAddRestDay,
  handleResetFatigueAndWorkout,
  btnLoading,
}) {
  return (
    <div className="ManualButtons">
      <hr></hr>

      <button
        className="rest-day"
        onClick={handleAddRestDay}
        disabled={btnLoading}
      >
        + Add Rest Day
      </button>

      <button
        className="reset-all"
        onClick={handleResetFatigueAndWorkout}
        disabled={btnLoading}
      >
        Reset All !!!
      </button>
      <p>
        <strong>*Rest days decrease all muscle fatigue by 4 levels</strong>
      </p>
    </div>
  );
}
