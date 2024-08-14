"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
const ToggleTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  // const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className=""
    >
      Toggle Mode
    </Button>
  );
};

export default ToggleTheme;
