import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ">
      {/* Photo */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:bg-indigo-500 md:bg-transparent lg:w-2/5">
        <svg
          className="hidden lg:block absolute left-0 inset-y-0 h-full w-48 text-gray-50 dark:text-gray-800 transform -translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div className="group relative lg:left-0 mx-auto lg:w-56 lg:h-56 sm:w-48 sm:h-48 w-40 h-40 lg:my-32 lg:-ml-12 my-12 shadow-xl transform lg:rotate-2 transition duration-300 hover:-rotate-6 ">
          <div className="absolute block lg:w-56 lg:h-56 sm:w-48 sm:h-48 w-40 h-40 left-3 top-3 bg-transparent border-4 border-dashed border-gray-300 dark:border-gray-300 transform group-hover:rotate-12 transition duration-300"></div>

          <img
            src="images/alexis.png"
            className="absolute z-10"
            alt="Picture of the author"
          />
        </div>
      </div>

      <div className="sm:text-center lg:text-left bg-transparent pb-12">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Alexis</span>{" "}
          <span className="block text-indigo-600 xl:inline">Hecfeuille</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          <FormattedMessage id="index_heroBio" />
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div>
            <a
              href="mailto:alexis@hecfeuille.fr"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-3xl text-white bg-indigo-600 hover:bg-transparent hover:border-black dark:hover:text-white hover:text-black dark:hover:border-white  transition duration-150 md:py-4 md:text-lg md:px-10"
            >
              <FormattedMessage id="index_contactMe" />
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3 py-4 px-3">
            {[
              {
                href: "https://linkedin.com/in/alexishecfeuille",
                icon: faLinkedin,
              },
              {
                href: "https://github.com/alexishecf",
                icon: faGithub,
              },
              {
                href: "https://twitter.com/AHecfeuille",
                icon: faTwitter,
              },
              {
                href: "/resume",
                icon: faFileAlt,
              },
            ].map((socialLink) => (
              <Link key={socialLink.href} href={socialLink.href}>
                <a
                  target={socialLink.href.startsWith("/") ? "_self" : "_blank"}
                  className="group px-2"
                >
                  <FontAwesomeIcon
                    size="lg"
                    className="transform group-hover:text-indigo-600 dark:text-gray-200 text-gray-800 transition duration-150"
                    icon={socialLink.icon}
                  ></FontAwesomeIcon>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
