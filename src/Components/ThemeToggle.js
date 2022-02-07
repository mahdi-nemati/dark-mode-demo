import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <FaSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          class="text-gray-500 dark:text-gray-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl cursor-pointer"
        />
      ) : (
        <FaMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          class="text-gray-500 dark:text-gray-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
