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
    projects.map((project, index) => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        data-testid="project-action-parent"
        className={
          active === project.projectId && !activeGeneric
            ? "active sidebar__project"
            : "sidebar__project"
        }
        // add animation delay for every project to animate separatly
        style={{ animationDelay: `${index * 20}ms` }}
      >
        <div
          role="button"
          data-testid="project-action"
          tabIndex={0}
          aria-label={`Select ${project.name} as the task project`}
          onClick={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
            setActiveGeneric("");
          }}
          onKeyDown={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
            setActiveGeneric("");
          }}
        >
          <IndividualProject project={project} />
        </div>
      </li>
    ))
  );
};
