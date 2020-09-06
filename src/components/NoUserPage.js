import React, { useState } from 'react';
import { ReactComponent as Checklist } from "./assets/checklist.svg";
import { AuthForm } from "./auth/AuthForm"


export const NoUserPage = () => {
    const [authFormOpen, setAuthFormOpen] = useState(false);

    return (
        <div className="no-user-page">
            <Checklist className="checklist-svg" />

            <button className="landing-page-cta"
                aria-label="Open LogIn Modal"
                onClick={() => setAuthFormOpen(true)}
                onKeyDown={() => setAuthFormOpen(true)}
            >
                Log In
            </button>
            <span>or</span>
            <button
                className="landing-page-cta"
                aria-label="Open SignUp Modal"
                onClick={() => setAuthFormOpen(true)}
                onKeyDown={() => setAuthFormOpen(true)}
            >
                Sign Up
            </button>
            <AuthForm setOpen={setAuthFormOpen} />
        </div>
    )
}
