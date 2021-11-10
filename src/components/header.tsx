import React from "react";
import Navbar from "./navbar";

type HeaderProps = {
  children?: JSX.Element;
  activePage: string;
};

export default function Header({ children, activePage }: HeaderProps) {
  return (
    <div className="relative dark:bg-gray-800 bg-gray-50 ">
      <Navbar activePage={activePage} />
      {children}
    </div>
  );
}
