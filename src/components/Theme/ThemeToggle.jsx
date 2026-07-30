import { useContext } from "react";
import { MainThemeContext } from "./MainTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(MainThemeContext);
  return (
    <button onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</button>
  );
};

export default ThemeToggle;
