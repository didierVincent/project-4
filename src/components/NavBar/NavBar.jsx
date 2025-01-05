import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Link, useLocation } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar() {
  const { currentUser, setWorkout, setCurrentUser, setLoading } =
    useContext(AppContext);
  async function handleLogOut() {
    // Delegate to the users-service
    setLoading(true);
    userService.logOut();
    // Update state will also cause a re-render
    setCurrentUser(null);
    setWorkout(null);

    setLoading(false);
  }

  return (
    <div>
      <nav className="Navbar">
        <Link
          to="/workouts"
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 500);
          }}
        >
          {" "}
          Workout History{" "}
        </Link>
        &nbsp; | &nbsp;
        <Link
          to="/workouts/new"
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
            }, 500);
          }}
        >
          New Workout
        </Link>
        &nbsp;&nbsp;<span>Welcome, {currentUser.name}</span>
        &nbsp;&nbsp;
        <Link to="" onClick={handleLogOut}>
          Log Out
        </Link>
      </nav>
    </div>
  );
}
