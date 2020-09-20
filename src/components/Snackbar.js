import React, { useState } from "react";
import { createPortal } from "react-dom";

export const Snackbar = ({ setOpen, message }) => {

    setTimeout(() => {
        setOpen(false);
    }, 5000);

    const handleClose = () => {
        setOpen(false)
    }

    return createPortal(
        <div className="snackbar">
            <p>{message}</p> <span
                onClick={() => handleClose()}
                onKeyDown={() => handleClose()}
            >+</span>
        </div>
        , document.getElementById("modal-entry"));
};
