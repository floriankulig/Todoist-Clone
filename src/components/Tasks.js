import React, { useEffect } from "react";
import { Checkbox } from "./Checkbox";
import { AddTask } from "./AddTask";
import { useTasks } from "../hooks";
import { collatedTasks } from "../constants";
import { getTitle, getCollatedTitle, collatedTasksExist } from "../helpers";
import {
  useSelectedProjectValue,
  useProjectsValue,
  useAuthValue,
} from "../context";
import { ReactComponent as Checklist } from "./assets/checklist.svg";

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);
  const currentUser = useAuthValue();

  let projectName = "";

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject).name;
  }

  useEffect(() => {
    currentUser.uid
      ? (document.title = `${projectName}: Todoist`)
      : (document.title = "Todoist");
  });

  return (
    <div className="tasks" data-testid="tasks">
      {currentUser.uid ? (
        <h2 data-testid="project-name">{projectName}</h2>
      ) : undefined}
      {currentUser.uid ? (
        <>
          <ul className="tasks__list">
            {tasks.map((task, index) => (
              <li
                key={`${task.id}`}
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <Checkbox id={task.id} taskDesc={task.task} />
                <span>{task.task}</span>
              </li>
            ))}
          </ul>

          <AddTask />
        </>
      ) : (
          <div className="no-user-page">
            <Checklist className="checklist-svg" />

            <button className="landing-page-cta">Log In</button>
          </div>
        )}
    </div>
  );
};
