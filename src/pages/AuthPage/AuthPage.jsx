import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./AuthPage.css";
import AppTitle from "../../components/AppTitle/AppTitle";
import SVGDemo from "../../components/SVGDemo/SVGDemo";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
      <AppTitle />
      <main className="AuthPage">
        <div className="title">
          <h1>Welcome!</h1>
          <h3>
            Track your workout activity, and we'll show you if you're at any
            real injury risk.
          </h3>
          <h2>No more surprise injuries!</h2>
        </div>
        <div className="btn-ctr">
          <button
            className="signup-btn"
            onClick={() => setShowSignUp(!showSignUp)}
          >
            {showSignUp ? "Log In" : "Sign Up"}
          </button>
        </div>
        <div className="make-flex">
          {showSignUp ? (
            <SignUpForm setUser={setUser} />
          ) : (
            <LoginForm setUser={setUser} />
          )}
          <div className="svg-demo">
            <SVGDemo />
          </div>
        </div>
      </main>
    </div>
  );
}
