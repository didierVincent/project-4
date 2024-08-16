import "./ManualButtons.css";

export default function ManualButtons() {
  return (
    <div className="ManualButtons">
      <hr></hr>
      <button className="rest-day">+ Add Rest Day</button>
      <button className="reset-all">Reset All !!!</button>
      <p>
        <strong>*Rest days decrease all muscle fatigue by 2</strong>
      </p>
    </div>
  );
}
