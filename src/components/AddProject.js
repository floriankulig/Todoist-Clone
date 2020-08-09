import React, { useState } from "react";
import { firebase } from "../firebase";
import { generatePushId } from "../helpers";
import { useProjectsValue } from "../context";

export const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState("");

  const projectId = generatePushId();
  const { setProjects } = useProjectsValue();

  const addProject = () =>
    projectName &&
    firebase
      .firestore()
      .collection("projects")
      .add({
        projectId,
        name: projectName,
        userId: "jlIFXIwyAL3tzHMtzRbw",
      })
      .then(() => {
        setProjects([]);
        setProjectName("");
        setShow(false);
      });

  return (
    <div className="add-project" data-testid="add-project">
      {show && (
        <div className="add-project__input" data-testid="add-project-inner">
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="add-project__name"
            data-testid="project__name"
            type="text"
            placeholder="Name your project"
          />
          <button
            className="add-project__submit"
            data-testid="add-project-submit"
            type="button"
            onClick={() => addProject()}
          >
            Add project
          </button>
          <span
            aria-label="Cancel adding project"
            className="add-project-cancel"
            data-testid="hide-project-overlay"
            onClick={() => setShow(false)}
            onKeyDown={() => setShow(false)}
            role="button"
            tabIndex={0}
          >
            Cancel
          </span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span
        aria-label="Add Project"
        data-testid="add-project-action"
        className="add-project__text"
        onClick={() => setShow(!show)}
        onKeyDown={() => setShow(!show)}
        role="button"
        tabIndex={0}
      >
        AddProject
      </span>
    </div>
  );
};
