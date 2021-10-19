import React from "react";
import Navbar from "./navbar";

type HeaderProps = {
  children?: JSX.Element;
  activePage: string;
};

export default function Header({ children, activePage }: HeaderProps) {
  return (
    <div>
      <div className="relative dark:bg-gray-800 bg-gray-50 ">
        <div className="max-w-6xl mx-auto">
          <Navbar activePage={activePage} />
          {children}
        </div>
      </div>
    </div>
  );
}
