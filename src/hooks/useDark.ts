import { useEffect, useState } from "react";

export const useDark = () => {
  const [theme, setTheme] = useState<Theme | undefined>(
    localStorage.getItem("theme") as Theme
  );

  let currentTheme = theme === "dark" ? "light" : "dark";

  const toggleTheme = () => {
    setTheme(currentTheme as Theme);
  };

  useEffect(() => {
    const root = window.document.documentElement;

    if (!theme) {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove(currentTheme);
      root.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return [theme, toggleTheme] as const;
};
