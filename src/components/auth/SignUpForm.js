import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

export const SignUpForm = ({ setOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-overlay">
      <form method="POST" className="form">
        <h1 className="header">Sign Up</h1>
        <span
          className="form__cancel-x"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
          aria-label="Close SignUp Form"
        >
          X
        </span>
        <div className="input-container">
          <input
            placeholder="Username"
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
          />
          <FaUserAlt />
          <div className="bg"></div>
        </div>
        <div className="input-container">
          <input
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <div className="bg"></div>
        </div>
        <div className="input-container">
          <input
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <div className="bg"></div>
        </div>
        <button tabIndex={0} type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};
