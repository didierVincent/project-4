import "./WorkoutHistoryPage.css";
import "../../components/SVGBodyHistory/SVGBodyHistory.css";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import SavedWorkouts from "../../components/SavedWorkouts/SavedWorkouts";
import * as workoutsAPI from "../../utilities/workout-api";
import ColorScale from "../../components/ColorScale/ColorScale";
import UserFatigueTable from "../../components/UserFatigueTable/UserFatigueTable";
import SVGBodyHistory from "../../components/SVGBodyHistory/SVGBodyHistory";
import { AppContext } from "../../contexts/AppContext";

export default function WorkoutHistoryPage() {
  const {
    currentUser,
    workout,
    setWorkout,
    loading,
    setLoading,
    activeWorkout,
  } = useContext(AppContext);

  useEffect(function () {
    async function getWorkoutHistory() {
      setLoading(true);
      const savedWorkouts = await workoutsAPI.getWorkoutHistory();
      setWorkout(savedWorkouts);
      setLoading(false);
    }
    getWorkoutHistory();
  }, []);

  console.log("typeof workout: ", typeof workout);
  console.log("workout: ", workout);

  if (!loading) {
    const savedWorkouts = workout.map((pastWorkouts, counter) => (
      <SavedWorkouts counter={counter + 1} pastWorkouts={pastWorkouts} />
    ));

    return (
      <div className="WorkoutHistoryPage">
        <div className="left">
          <div className="left-title">Workout History</div>
          {savedWorkouts.length ? (
            <>
              <table>
                <tbody>
                  <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Date Created</th>
                    <th>Fatigue Added</th>
                  </tr>
                  {savedWorkouts}
                </tbody>
              </table>
            </>
          ) : (
            ""
          )}

          <div>
            {activeWorkout ? (
              <div className="unsaved-warning">
                ** Note: Current workout is unsaved!
              </div>
            ) : (
              ""
            )}
            <Link to="/workouts/new">
              <button onClick={() => setLoading(true)}>
                {activeWorkout ? "Go back to Workout" : "Create new Workout"}
              </button>
            </Link>
          </div>
        </div>
        <div className="svg">
          <div>{currentUser.name}'s Muscles</div>
          <SVGBodyHistory currentUser={currentUser} />
        </div>

        <div className="right">
          <div className="right-title">Fatigue</div>
          <div className="uft">
            <UserFatigueTable currentUser={currentUser} />
          </div>
          <div className="cs">
            <ColorScale />
          </div>
        </div>
      </div>
    );
  }
}
