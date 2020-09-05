import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMail, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import firebase from "firebase";

export const AuthForm = ({ setOpen, type = "signup" }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (type === "signup") {
      if (password === passwordConfirm) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((authUser) => {
            setOpen(false);
            authUser.user.updateProfile({ displayName: username });
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      } else {
        setErrorMessage("Password confirmation does not match.");
      }
    } else if (type === "login") {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => setOpen(false))
        .catch((error) => setErrorMessage(error.message));
    }
  };

  return (
    <div className="form-overlay">
      <form method="POST" onSubmit={handleSubmit} className="form">
        <div className="form__top-bar">
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
        </div>
        {type === "signup" ? (
          <div className="input-container">
            <input
              tabIndex={0}
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
              type="text"
            />
            <FaRegUser />
            <div className="bg"></div>
          </div>
        ) : undefined}
        <div className="input-container" style={{ animationDelay: "50ms" }}>
          <input
            tabIndex={0}
            placeholder="Email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <AiOutlineMail />
          <div className="bg"></div>
        </div>
        <div className="input-container" style={{ animationDelay: "150ms" }}>
          <input
            tabIndex={0}
            placeholder="Password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          {showPassword === true ? (
            <AiFillEyeInvisible onClick={() => setShowPassword(false)} />
          ) : (
            <AiFillEye onClick={() => setShowPassword(true)} />
          )}
          <div className="bg"></div>
        </div>
        {type === "signup" ? (
          <div className="input-container" style={{ animationDelay: "250ms" }}>
            <input
              tabIndex={0}
              placeholder="Confirm Password"
              value={passwordConfirm}
              required
              onChange={(event) => setPasswordConfirm(event.target.value)}
              type="password"
            />
            {showPassword === true ? (
              <AiFillEyeInvisible onClick={() => setShowPassword(false)} />
            ) : (
              <AiFillEye onClick={() => setShowPassword(true)} />
            )}
            <div className="bg"></div>
          </div>
        ) : undefined}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
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
