import Section from "./section";
import Link from "next/link";
import { FormattedMessage, FormattedNumber, useIntl } from "react-intl";

export default function About() {
  const intl = useIntl();

  return (
    <Section>
      <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200  md:text-3xl">
        <span className="text-indigo-600">01.</span>{" "}
        <span>
          <FormattedMessage id="index_aboutLabel" />
        </span>{" "}
      </h1>
      <p className="my-3 text-base text-gray-600 dark:text-gray-500 ml-4 md:w-3/4">
        <FormattedMessage id="index_about" />
      </p>

      <h2 className="text-xl mt-8  text-gray-800 font-bold dark:text-gray-300">
        <FormattedMessage id="index_technicalSkills" />
      </h2>
      <ul className="mt-3 ml-4 md:w-3/4">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Next.js",
          "Node.js",
          "SQL",
          "MySQL",
          "MongoDB",
          "GraphQL",
          "Git",
          "C#",
          "Unity",
        ].map((skill) => (
          <li
            key={skill}
            className="rounded-md inline-block mr-2 mt-2 px-2 py-1 text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 font-semibold"
          >
            {skill}
          </li>
        ))}
      </ul>

      <h2 className="mt-5 text-xl text-gray-800 font-bold dark:text-gray-300">
        <FormattedMessage id="index_softSkills" />
      </h2>
      <ul className="mt-3 ml-4">
        {[
          intl.formatMessage({ id: "about_softSkill1" }),
          intl.formatMessage({ id: "about_softSkill2" }),
          intl.formatMessage({ id: "about_softSkill3" }),
          intl.formatMessage({ id: "about_softSkill4" }),
        ].map((skill) => (
          <li
            key={skill}
            className="rounded-md inline-block mr-2 mt-2 px-2 py-1 text-indigo-500  bg-indigo-100 dark:bg-indigo-200 hover:bg-indigo-50 dark:hover:bg-indigo-100 font-semibold"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  );
}
