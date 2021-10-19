import { getStorageValue, setStorageValue } from "../lib/useLocalStorage";

export const setMode = (useDark: boolean) => {
  setStorageValue("useDarkMode", useDark);
};

export const getMode = () => {
  let userPreferenceIsDark = false;

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    userPreferenceIsDark = true;
  }

  return getStorageValue("useDarkMode", userPreferenceIsDark);
};

export const applyMode = (useDark: boolean) => {
  if (!useDark) {
    document.getElementsByTagName("body")[0].classList.remove("dark");
  } else {
    document.getElementsByTagName("body")[0].className += " dark ";
  }
};

export const enforceMode = (useDark: boolean) => {
  applyMode(useDark);
};
