import React, { useState } from "react";
import { firebase } from "../firebase";
import { Snackbar } from "./Snackbar";

export const Checkbox = ({ id, taskDesc }) => {
  const [checked, setChecked] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const archiveTask = () => {
    setChecked(true);
    setSnackbarOpen(true);
    setTimeout(() => {
      firebase.firestore().collection("tasks").doc(id).delete();
    }, 2000);
  };

  return (
    <>
      <div
        className={checked ? "checkbox-holder checked" : "checkbox-holder"}
        data-testid="checkbox-action"
        onClick={() => archiveTask()}
        onKeyDown={() => archiveTask()}
        aria-label={`Mark ${taskDesc} as done?`}
        role="button"
        tabIndex={0}
      >
        <label htmlFor="cb" id="checkbox">
          <svg
            viewBox="0 0 100 100"
            className={checked ? "reverse" : undefined}
          >
            <path
              class="box"
              d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"
            />
            <polyline class="check" points="25.5,53.5 39.5,67.5 72.5,34.5 " />
          </svg>
        </label>
      </div>

      {snackbarOpen && <Snackbar message={`Task "${taskDesc}" archived!`} />}
    </>
  );
};
