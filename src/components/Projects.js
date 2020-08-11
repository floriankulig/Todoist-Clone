import React, { useState } from "react";
import { useSelectedProjectValue, useProjectsValue } from "../context";
import { IndividualProject } from "./IndividualProject";

export const Projects = ({
  activeValue = null,
  activeGeneric,
  setActiveGeneric,
}) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        data-testid="project-action-parent"
        className={
          active === project.projectId && !activeGeneric
            ? "active sidebar__project"
            : "sidebar__project"
        }
      >
        <div
          role="button"
          data-testid="project-action"
          tabIndex={0}
          aria-label={`Select ${project.name} as the task project`}
          onClick={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
            setActiveGeneric(null);
          }}
          onKeyDown={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
            setActiveGeneric(null);
          }}
        >
          <IndividualProject project={project} />
        </div>
      </li>
    ))
  );
};
