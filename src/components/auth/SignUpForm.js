import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

export const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="form-overlay">
      <div className="signup-form">
        <h1 className="header">Sign Up</h1>
        <div className="input-container">
          <input
            placeholder="Username"
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
          />
          {/* <FaUserAlt /> */}
          <div className="bg"></div>
        </div>
        <div className="input-container">
          <input
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
          />
          <div className="bg"></div>
        </div>
        <div className="input-container">
          <input
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="text"
          />
          <div className="bg"></div>
        </div>
        <button tabIndex={0} className="submit-button">
          Submit
      </button>
      </div>
    </div>
  );
};
