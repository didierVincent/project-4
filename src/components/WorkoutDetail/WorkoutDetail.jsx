import "./WorkoutDetail.css";
import Exercise from "../Exercise/Exercise";
import WorkoutFatigue from "../WorkoutFatigue/WorkoutFatigue";

// Used to display the details of any order, including the cart (unpaid order)
export default function WorkoutDetail({
  workout,
  user,
  handleRemoveExercise,
  handleChangeQty,
  btnLoading,
  handleSaveWorkout,
}) {
  if (!workout) return null;
  const exerciseList = workout.exerciseList.map((exercise) => (
    <Exercise
      exerciseList={exercise}
      isDone={workout.isDone}
      key={exercise._id}
      workout={workout}
      user={user}
      handleRemoveExercise={handleRemoveExercise}
      handleChangeQty={handleChangeQty}
      btnLoading={btnLoading}
    />
  ));

  const date = new Date(workout.updatedAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long", // "Monday", "Tuesday", etc.
    year: "numeric", // "2024"
    month: "long", // "August", "September", etc.
    day: "numeric", // "14"
  });

  return (
    <div className="WorkoutDetail">
      <div className="grid">
        <div className="title">
          {workout.isDone ? (
            <span>
              Workout <span className="smaller">{workout.workoutId}</span>
            </span>
          ) : (
            <div className="title-date">
              <div className="NEW-Workout">
                Workout #{workout._id.slice(-3).toUpperCase()}
              </div>
              <div className="date">{formattedDate}</div>
            </div>
          )}

          {exerciseList.length ? (
            <div className="fat-table">
              <WorkoutFatigue
                user={user}
                workout={workout}
                exerciseList={exerciseList}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div>
        {exerciseList.length ? (
          <>
            {/* <WorkoutFatigue
                user={user}
                workout={workout}
                exerciseList={exerciseList}
              /> */}
            {exerciseList}
            <div className="total">
              {workout.isDone ? (
                <span className="right">TOTAL&nbsp;&nbsp;</span>
              ) : (
                <button
                  className="btn-sm"
                  onClick={handleSaveWorkout}
                  disabled={!exerciseList.length}
                >
                  Save Workout
                </button>
              )}
              {/* <span>{workout.totalQty}</span> */}
              {/* <span className="right">${order.orderTotal.toFixed(2)}</span> */}
            </div>
          </>
        ) : (
          <div className="no-exercises">
            Added exercises will be listed here.
          </div>
        )}
      </div>
    </div>
  );
}
