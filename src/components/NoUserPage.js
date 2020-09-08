import React, { useState } from "react";
import { ReactComponent as Checklist } from "./assets/checklist.svg";
import { AuthForm } from "./auth/AuthForm";

export const NoUserPage = () => {
    const [authFormOpen, setAuthFormOpen] = useState(false);
    const [authFormType, setAuthFormType] = useState("");

    const handleClick = (type) => {
        setAuthFormOpen(true);
        setAuthFormType(type);
    };

    return (
        <div className="no-user-page">
            <Checklist className="checklist-svg" />

            <h3 className="header">Get started with your ToDo-List!</h3>

            <button
                className="landing-page-cta"
                aria-label="Open LogIn Modal"
                onClick={() => handleClick("login")}
                onKeyDown={() => handleClick("login")}
            >
                Log In
      </button>
            <p>OR</p>
            <button
                className="landing-page-cta"
                aria-label="Open SignUp Modal"
                onClick={() => handleClick("signup")}
                onKeyDown={() => handleClick("signup")}
            >
                Sign Up
      </button>
            {authFormOpen && (
                <AuthForm setOpen={setAuthFormOpen} type={authFormType} />
            )}
        </div>
    );
};
