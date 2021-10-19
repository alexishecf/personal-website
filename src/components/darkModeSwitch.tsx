import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import { setMode, applyMode, getMode } from "../lib/darkMode";

export default function Home() {
  const [isDark, setDark] = useState(false);
  const [init, setInit] = useState(false);

  const switchMode = () => {
    setMode(!isDark);
    setDark(!isDark);
  };

  useEffect(() => {
    if (!init) {
      setDark(getMode());
      setInit(true);
    }

    applyMode(isDark);
  }, [isDark]);

  return (
    <Link href="#" scroll={false}>
      <a>
        {isDark ? (
          <SunIcon
            onClick={switchMode}
            className={`inline w-6 h-6 align-top text-yellow-400 transform hover:scale-110  transition duration-150`}
          />
        ) : (
          <MoonIcon
            onClick={switchMode}
            className={`inline w-6 h-6 align-top text-gray-600 transform hover:scale-110  transition duration-150`}
          />
        )}
      </a>
    </Link>
  );
}
