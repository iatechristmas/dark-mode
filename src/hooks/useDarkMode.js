import react, { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
  const [someValue, setSomeValue] = useLocalStorage(key, initialValue);

  useEffect(() => {
    if (someValue === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [someValue]);

  return [someValue, setSomeValue];
};
