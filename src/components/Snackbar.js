import React from "react";
import { createPortal } from "react-dom";

export const Snackbar = ({ message }) => {

    return createPortal(
        <div className="snackbar">
            <p>{message}</p>
        </div>
        , document.getElementById("modal-entry"));
};
