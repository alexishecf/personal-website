import Link from "next/link";
import Section from "./section";

import { FormattedMessage, useIntl } from "react-intl";

export default function Projects() {
  const intl = useIntl();

  return (
    <Section>
      <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200  md:text-3xl">
        <span className="text-indigo-600">02.</span>{" "}
        <span>
          <FormattedMessage id="index_thingsIveWorkedOn" />
        </span>
      </h1>

      <div className="max-width-6xl mx-auto py-8 text-center md:text-left">
        {[
          {
            product: "hologame",
            image: "/images/project_hologame.jpg",
            description: intl.formatMessage({
              id: "projects_project1OneLiner",
            }),
            technologies: [
              { label: "Unity" },
              { label: "C#" },
              { label: "PHP" },
              { label: "SQL" },
              { label: "React" },
            ],
            href: "https://hologame.fr/",
          },
          {
            product: intl.formatMessage({ id: "projects_project2" }),
            image: "/images/project_personalWebsite.png",
            description: intl.formatMessage({
              id: "projects_project2OneLiner",
            }),
            technologies: [
              { label: "React" },
              { label: "Next.js" },
              { label: "CSS" },
            ],
            href: "https://github.com/alexishecf/personal-website",
          },
        ].map((thing) => (
          <Link key={thing.product} href={thing.href}>
            <a target={thing.href.startsWith("/") ? "_self" : "_blank"}>
              <div className="group relative inline-block w-72 h-64 md:w-80 md:h-64  md:mx-4 my-4 cursor-pointer shadow-lg">
                <div className="absolute top-0 left-0 w-full h-full bg-gray-500  transition duration-100">
                  <div className="w-full h-32 overflow-hidden">
                    <img src={thing.image} />
                  </div>
                </div>

                <div className="absolute top-32 left-0 w-full h-32 bg-gray-50 group-hover:bg-opacity-90 dark:group-hover:bg-opacity-90 shadow-xl dark:bg-gray-800 transition duration-100">
                  <div className="w-full text-center mt-4">
                    <h1 className="text-md md:text-xl font-bold text-gray-800 dark:text-gray-200">
                      {thing.product}
                    </h1>
                    <p className="text-xs md:text-sm dark:text-gray-400">
                      {thing.description}
                    </p>
                  </div>
                  <ul className="absolute bottom-5 w-full text-center ">
                    {thing.technologies.map((technology) => (
                      <li
                        key={technology.label}
                        className="inline px-2 md:px-3 py-1 mx-1 rounded-md text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 font-bold text-xs"
                      >
                        {technology.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Section>
  );
}
