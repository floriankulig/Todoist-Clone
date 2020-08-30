import React, { useState, useCallback } from "react";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMail, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import firebase from "firebase"

export const SignUpForm = ({ setOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async event => {
    event.preventDefault();
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      // .then(setOpen(false))
      .catch(error => { alert(error); setOpen(true) })
  }

  return (
    <div className="form-overlay">
      <form method="POST" onSubmit={handleSignUp} className="form">
        <h1 className="header">Sign Up</h1>
        <span
          className="form__cancel-x"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
          aria-label="Close SignUp Form"
        >
          X
        </span>
        {/* <div className="input-container">
          <input
            placeholder="Username"
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
          />
          <FaRegUser />
          <div className="bg"></div>
        </div> */}
        <div className="input-container">
          <input
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
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <AiFillEyeInvisible />
          <div className="bg"></div>
        </div>
        <button tabIndex={0} type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};
