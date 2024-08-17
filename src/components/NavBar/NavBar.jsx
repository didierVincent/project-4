import { Link, useLocation } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser, setLoading }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
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
        &nbsp;&nbsp;<span>Welcome, {user.name}</span>
        &nbsp;&nbsp;
        <Link to="" onClick={handleLogOut}>
          Log Out
        </Link>
      </nav>
    </div>
  );
}
