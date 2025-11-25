import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/ThemeToggle.css";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark ? <i className="bx bx-sun"></i> : <i className="bx bx-moon"></i>}
    </button>
  );
};

export default ThemeToggle;
