import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/3160/3160782.svg"
          alt=""
        />
        <h1>Love Chat</h1>
      </div>

      <Button onClick={signIn}>Нэвтрэх</Button>
    </div>
  );
}

export default Login;
