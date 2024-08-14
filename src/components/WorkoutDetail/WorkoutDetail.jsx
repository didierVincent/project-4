// export default function WorkoutDetail() {
//   return (
//     <>
//       <h3>WorkoutDetail</h3>
//       <div>(list of exercises displayed here)</div>
//     </>
//   );
// }

import "./WorkoutDetail.css";
import Exercise from "../Exercise/Exercise";

// Used to display the details of any order, including the cart (unpaid order)
export default function WorkoutDetail({ workout, user, handleRemoveExercise }) {
  if (!workout) return null;
  const exerciseList = workout.exerciseList.map((exercise) => (
    <Exercise
      exerciseList={exercise}
      isDone={workout.isDone}
      // handleChangeQty={handleChangeQty}
      key={exercise._id}
      workout={workout}
      user={user}
      handleRemoveExercise={handleRemoveExercise}
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
      <div className="title">
        {workout.isDone ? (
          <span>
            Workout <span className="smaller">{workout.workoutId}</span>
          </span>
        ) : (
          <div>NEW Workout</div>
        )}
        <div>{formattedDate}</div>
      </div>
      <div className="">
        {exerciseList.length ? (
          <>
            {exerciseList}
            <section className="total">
              {workout.isDone ? (
                <span className="right">TOTAL&nbsp;&nbsp;</span>
              ) : (
                <button
                  className="btn-sm"
                  // onClick={handleCheckout}
                  disabled={!exerciseList.length}
                >
                  Save Workout
                </button>
              )}
              {/* <span>{workout.totalQty}</span> */}
              {/* <span className="right">${order.orderTotal.toFixed(2)}</span> */}
            </section>
          </>
        ) : (
          <div className="hungry">Your added exercises will appear here.</div>
        )}
      </div>
    </div>
  );
}
