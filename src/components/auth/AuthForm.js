import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMail, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import firebase from "firebase";

export const AuthForm = ({ setOpen, type = "signup" }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (type === "signup") {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
          setOpen(false);
          authUser.user.updateProfile({ displayName: username });
        })
        .catch((error) => {
          // TODO: Provide Error Message underneath inputs by adding state
          alert(error.message);
        });
    }
  };

  return (
    <div className="form-overlay">
      <form method="POST" onSubmit={handleSubmit} className="form">
        {type === "login" ? (
          <h1 className="header">Log In</h1>
        ) : type === "signup" ? (
          <h1 className="header">Sign Up</h1>
        ) : undefined}
        <span
          className="form__cancel-x"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
          aria-label="Close SignUp Form"
        >
          X
        </span>
        {type === "signup" ? (
          <div className="input-container">
            <input
              tabIndex={0}
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              type="text"
            />
            <FaRegUser />
            <div className="bg"></div>
          </div>
        ) : undefined}
        <div className="input-container">
          <input
            tabIndex={0}
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <AiOutlineMail />
          <div className="bg"></div>
        </div>
        <div className="input-container">
          <input
            tabIndex={0}
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <AiFillEyeInvisible />
          <div className="bg"></div>
        </div>
        {type === "login" ? (
          <button tabIndex={0} type="submit" className="submit-button">
            Log In
          </button>
        ) : type === "signup" ? (
          <button tabIndex={0} type="submit" className="submit-button">
            Sign Up
          </button>
        ) : undefined}
      </form>
    </div>
  );
};
