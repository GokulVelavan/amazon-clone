import React, { useState } from "react";
import "./Login.css";
import { auth } from "./Firebase";
import { useHistory, Link } from "react-router-dom";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((error) => alert(error.message));
  };
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_img"
          src="https://wallpaperaccess.com/full/1383586.jpg"
        />
      </Link>
      <div className="login_input">
        <form>
          <h1 className="login_text">Sign In</h1>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={login} type="submit">
            Sign In
          </button>
        </form>
        <p>By signing-in Your accepting the Term and Conditions of AMAZON </p>
        <button onClick={register}>Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
