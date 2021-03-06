import React, { useState } from "react";
import { FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import { useAuthValue } from "../context";
import { firebase } from "../firebase";
import { AuthForm } from "./auth/AuthForm";

export const UserMenu = ({ setOpen }) => {
  const currentUser = useAuthValue();

  const [authFormOpen, setAuthFormOpen] = useState(false);
  const [authFormType, setAuthFormType] = useState("");

  const handleAuthClick = (type) => {
    setAuthFormOpen(true);
    setAuthFormType(type);
  };

  return (
    <>
      <ul className="dropdown-menu">
        {currentUser.uid ? (
          <li
            onClick={() => {
              setOpen(false);
              firebase.auth().signOut();
            }}
            onKeyDown={() => {
              setOpen(false);
              firebase.auth().signOut();
            }}
            aria-label="Log the current user out"
            role="button"
          >
            <FaUserAltSlash />
            <span>Log Out</span>
          </li>
        ) : (
          <>
            <li
              onClick={() => {
                handleAuthClick("login");
              }}
              onKeyDown={() => {
                handleAuthClick("login");
              }}
              aria-label="Open LogIn Form"
              role="button"
            >
              <FaUserAlt />
              <span>Log In</span>
            </li>
            <li
              onClick={() => {
                handleAuthClick("signup");
              }}
              onKeyDown={() => {
                handleAuthClick("signup");
              }}
              aria-label="Open SignUp Form"
              role="button"
            >
              <FaUserAlt />
              <span>Sign Up</span>
            </li>
          </>
        )}
      </ul>
      {authFormOpen && (
        <AuthForm setOpen={setAuthFormOpen} type={authFormType} />
      )}
    </>
  );
};
