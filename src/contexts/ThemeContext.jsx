import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.style.setProperty(
          "--theme-primary",
          "#0d6efd"
        );
        document.documentElement.style.setProperty(
          "--theme-secondary",
          "#6c757d"
        );
        break;
      case "light":
        document.documentElement.style.setProperty(
          "--theme-primary",
          "#589AFD"
        );
        document.documentElement.style.setProperty(
          "--theme-secondary",
          "#959CA3"
        );
        break;
    }
  }, [theme]);
  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
