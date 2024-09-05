"use client";
import React, { useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { flushSync } from "react-dom";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
// Extend the Document interface to include startViewTransition
declare global {
  interface Document {
    startViewTransition?: (callback: () => void) => {
      ready: Promise<void>;
    };
  }
}

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const ref = useRef<HTMLButtonElement>(null);

  const toggle = async (isDarkMode: boolean) => {
    if (!ref.current || !document.startViewTransition || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
      setTheme(isDarkMode ? "light" : "dark"); // Fallback without transition
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(isDarkMode ? "light" : "dark");
      });
    }).ready;

    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${left + width / 2}px ${top + height / 2}px)`,
          `circle(${maxRadius}px at ${left + width / 2}px ${top + height / 2}px)`,
        ],
      },
      {
        duration: 500,
        // easing: "ease-in-out",
        // pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Button
      variant={'ghost'}
      ref={ref}
      onClick={() => toggle(theme === "dark")}
      className=""
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ToggleTheme;
