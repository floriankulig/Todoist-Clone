import React, { useState } from "react";
import { FaPizzaSlice, FaUserAlt } from "react-icons/fa";
import { AddTask } from "../AddTask";

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add">
              <button
                data-testid="quick-add-task-action"
                aria-label="Quick add task"
                onClick={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
                onKeyDown={() => {
                  setShowQuickAddTask(true);
                  setShouldShowMain(true);
                }}
                tabIndex={0}
              >
                +
              </button>
            </li>
            <li className="settings__user-menu">
              <button
                data-testid="user-menu-action"
                aria-label="User Menu on/off"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                onKeyDown={() => setUserMenuOpen(!userMenuOpen)}
              >
                <FaUserAlt />
              </button>
              {userMenuOpen && (
                <ul className="settings__user-menu-list">
                  <li>
                    <button type="submit">Log Out</button>
                  </li>
                </ul>
              )}
            </li>
            <li
              onClick={() => setDarkMode(!darkMode)}
              onKeyDown={() => setDarkMode(!darkMode)}
              className="settings__darkmode"
              data-testid="dark-mode-action"
            >
              <button aria-label="Darkmode on/off">
                <FaPizzaSlice />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};
