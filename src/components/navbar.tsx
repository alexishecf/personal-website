import Head from "next/head";
import Link from "next/link";
import DarkModeSwitch from "./darkModeSwitch";
import { useIntl } from "react-intl";

type NavbarProps = {
  activePage: string;
};

export default function Navbar({ activePage }: NavbarProps) {
  const intl = useIntl();

  return (
    <nav
      className="navbar"
      aria-label="Global"
    >
      <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/">
            <a>
              <span className="sr-only">Alexis Hecfeuille</span>
              <span className="h-8 w-auto sm:h-10 font-black text-4xl dark:text-gray-200 text-gray-800">
                A
              </span>
              <span className="h-8 w-auto sm:h-10 font-black text-4xl text-indigo-600">
                H
              </span>
            </a>
          </Link>
        </div>
      </div>
      <div className="block sm:ml-10 pr-2 sm:pr-4 space-x-3 sm:space-x-8">
        {[
          {
            name: intl.formatMessage({ id: "header_home" }),
            href: "/",
            activePage: "Home",
          },
          {
            name: intl.formatMessage({ id: "header_blog" }),
            href: "/blog",
            activePage: "Blog",
          },
          {
            name: intl.formatMessage({ id: "header_contact" }),
            href: "mailto:alexis@hecfeuille.fr",
            activePage: "",
          },
        ].map(({ name, href, activePage: page }) => (
          <Link key={name} href={href}>
            <a
              className={`inline font-medium text-gray-500 hover:opacity-60 ${
                activePage === page ? "underline" : ""
              }`}
            >
              {name}
            </a>
          </Link>
        ))}

        <DarkModeSwitch />
      </div>
    </nav>
  );
}
