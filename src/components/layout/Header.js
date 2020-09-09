import React, { useState } from "react";
import { FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import { WiDaySunny, WiMoonWaxingCrescent2 } from "react-icons/wi";
import { AddTask } from "../AddTask";
import { AuthForm } from "../auth/AuthForm";
import { firebase } from "../../firebase";
import { useAuthValue } from "../../context";

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const currentUser = useAuthValue();

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            {currentUser.uid && (
              <>
                <li onClick={() => firebase.auth().signOut()}>Log Out</li>
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
              </>
            )}
            <li
              className={
                userMenuOpen
                  ? "settings__user-menu active"
                  : "settings__user-menu"
              }
              style={{ animationDelay: "150ms" }}
            >
              <button
                data-testid="user-menu-action"
                aria-label="User Menu on/off"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                onKeyDown={() => setUserMenuOpen(!userMenuOpen)}
              >
                <FaUserAlt />
              </button>
              {userMenuOpen && <AuthForm setOpen={setUserMenuOpen} />}
            </li>
            <li
              onClick={() => setDarkMode(!darkMode)}
              onKeyDown={() => setDarkMode(!darkMode)}
              className="settings__darkmode"
              data-testid="dark-mode-action"
              style={{ animationDelay: "250ms" }}
            >
              <button aria-label="Darkmode on/off">
                {darkMode ? <WiDaySunny /> : <WiMoonWaxingCrescent2 />}
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
