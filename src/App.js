import React, { useState, useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { ProjectsProvider, SelectedProjectProvider } from "./context";

export const App = () => {
  const getSavedMode = () => {
    const savedMode = JSON.parse(localStorage.getItem("darkMode"));
    if ("darkMode" in localStorage) {
      return savedMode;
    } else {
      return false;
    }
  };

  const [darkMode, setDarkMode] = useState(getSavedMode());

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          data-testid="application"
          className={darkMode ? "darkmode" : undefined}
        >
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

export default App;
