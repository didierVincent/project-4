import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <nav className="Navbar">
      <Link to="/workouts">Workout History</Link>
      &nbsp; | &nbsp;
      <Link to="/workouts/new">New Workout</Link>
      &nbsp;&nbsp;<span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
