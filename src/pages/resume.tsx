import Head from "next/head";
import Link from "next/link";
import { enforceMode } from "../lib/darkMode";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faFilePdf,
  faChevronLeft,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";

import { FormattedMessage, FormattedNumber, useIntl } from "react-intl";

const nestedListStyle = {
  listStyleType: "circle",
};

export default function Resume() {
  const intl = useIntl();
  const router = useRouter();

  useEffect(() => {
    enforceMode(false);
  });

  return (
    <div>
      <Head>
        <title>{intl.formatMessage({ id: "resume_title" })}</title>
      </Head>

      <div className="relative bg-white">
        <div className="max-w-6xl mx-auto px-4 h-14 my-4 border-b print:hidden">
          <Link href="/">
            <a
              className="float-left bg-gray-600 py-2 px-4 rounded-md hover:bg-gray-500 text-white font-bold"
              href="/"
            >
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </a>
          </Link>

          <div className="float-left py-2">
            <FontAwesomeIcon
              icon={faFlag}
              className="ml-4 text-gray-800"
            ></FontAwesomeIcon>
            <Link href="/resume" locale="en-US">
              <a
                className={`${
                  router.locale === "en-US" ? "font-bold" : ""
                } px-2 text-gray-800`}
                href="/"
              >
                ENG
              </a>
            </Link>
            <span className="">|</span>
            <Link href="/resume" locale="fr">
              <a
                className={`${
                  router.locale === "fr" ? "font-bold" : ""
                } px-2 text-gray-800`}
                href="/"
              >
                FRA
              </a>
            </Link>
          </div>
          <a
            className="float-right bg-indigo-500 py-2 px-4 rounded-md hover:bg-indigo-400 text-white font-bold"
            href={
              router.locale === "fr"
                ? "/files/hecfeuille_resume_fr.pdf"
                : "/files/hecfeuille_resume.pdf"
            }
          >
            <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon> PDF
          </a>
        </div>

        <div className="max-w-4xl print:max-w-5xl mx-auto pr-8 lg:pr-0">
          <div>
            <div className="hidden print:ml-8 print:mt-10 print:w-20 print:h-20 print:inline-block md:inline-block w-16 h-16 align-top mt-6 ml-6 text-center flex-wrap content-center	rounded-full border border-indigo-500 text-indigo-500">
              <div className="mt-2 print:mt-3 print:text-xl">A</div>
              <div className="-mt-1 print:text-xl">H</div>
            </div>

            <div className="inline-block ml-6 mt-7">
              <h1 className="text-3xl font-semibold text-gray-900 tracking-wide">
                ALEXIS HECFEUILLE
              </h1>
              <h2 className="mt-3 tracking-wider">
                <FormattedMessage id="resume_jobTitle" />
              </h2>
              <p className="text-gray-600 text-sm mt-1 tracking-wider">
                Berck, France |{" "}
                <a href="https://alexis.hecfeuille.fr/" target="_blank">
                  alexis.hecfeuille.fr
                </a>{" "}
                | <a href="mailto:alexis@hecfeuille.fr">alexis@hecfeuille.fr</a>{" "}
                | +33 6 51 19 29 38
                <br />
                <a href="https://github.com/alexishecf" target="_blank">
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> alexishecf
                </a>{" "}
                /
                <a
                  href="https://linkedin.com/in/alexishecfeuille"
                  target="_blank"
                  className="ml-1"
                >
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>{" "}
                  alexishecfeuille
                </a>
              </p>
            </div>
          </div>
          <div>
            <div className="ml-8 lg:ml-28 mt-8 print:ml-10">
              <h1 className="text-md uppercase text-gray-400 tracking-wider my-5">
                <FormattedMessage id="resume_skillsLabel" />
              </h1>

              <div>
                <ul>
                  {[
                    "HTML",
                    "CSS",
                    "PHP",
                    "JavaScript",
                    "SQL",
                    "GraphQL",
                    "React",
                    "Next.js",
                    "Node.js",
                    "MongoDB",
                    "MySQL",
                  ].map((skill, index) => (
                    <li
                      key={index}
                      className={`border text-indigo-500 px-4 mr-1 mt-1
                      } py-1 text-sm border-indigo-500 inline-block`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="ml-8 lg:ml-28 mt-10 print:ml-10">
              <h1 className="text-md uppercase text-gray-400 tracking-wider  my-6">
                <FormattedMessage id="resume_educationLabel" />
              </h1>

              <div className="education-list">
                <div className="education-item">
                  <a
                    href="https://sciences-technologies.univ-lille.fr/informatique/"
                    target="_blank"
                  >
                    <h2 className="mt-3 tracking-wider text-gray-900 uppercase text-lg font-semibold">
                      <FormattedMessage id="resume_education1University" />
                    </h2>
                  </a>
                  <h3 className="text-gray-600 text-sm tracking-wider mt-1">
                    <FormattedMessage id="resume_education2Diploma" /> | 2019 –
                    2021
                  </h3>
                  <p className="mt-2 text-sm tracking-wide text-gray-900">
                    <FormattedMessage id="resume_education2Courses" />
                  </p>
                </div>
                <div className="education-item mt-8">
                  <a
                    href="https://sciences-technologies.univ-lille.fr/informatique/"
                    target="_blank"
                  >
                    <h2 className="mt-3 tracking-wider text-gray-900 uppercase text-lg font-semibold">
                      <FormattedMessage id="resume_education1University" />
                    </h2>
                  </a>
                  <h3 className="text-gray-600 text-sm tracking-wider mt-1">
                    <FormattedMessage id="resume_education1Diploma" /> | 2016 –
                    2019
                  </h3>
                  <p className="mt-2 text-sm tracking-wide text-gray-900">
                    <FormattedMessage id="resume_education1Courses" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="ml-8 lg:ml-28 mt-10 print:ml-10">
              <h1 className="text-md uppercase text-gray-400 tracking-wider my-6 ">
                <FormattedMessage id="resume_workExperienceLabel" />
              </h1>

              <div className="experience-list">
                <div className="experience-item">
                  <a href="https://hologame.fr/" target="_blank">
                    <h2 className="mt-3 tracking-wider text-gray-900 uppercase text-lg font-semibold">
                      hologame
                    </h2>
                  </a>
                  <h3 className="mt-1 text-sm text-gray-900 tracking-wider">
                    <FormattedMessage id="resume_workExperience1CompanyDesc" />
                  </h3>

                  <h4 className="text-gray-500 text-sm tracking-wider mt-2">
                    <FormattedMessage id="resume_workExperience1JobTitle" /> |
                    Tourcoing, France | Sep 2018 – Oct 2021
                  </h4>
                  <ul className="list-disc ml-5 mt-3 text-gray-900 tracking-wider text-sm ">
                    <li className="py-1">
                      <FormattedMessage id="resume_workExperience1UnorderedListEl1" />
                      <ul className="list-disc ml-5" style={nestedListStyle}>
                        <li className="pt-1">
                          <FormattedMessage id="resume_workExperience1UnorderedListEl1_1" />
                        </li>
                        <li className="pt-1">
                          <FormattedMessage id="resume_workExperience1UnorderedListEl1_2" />
                        </li>
                      </ul>
                    </li>
                    <li className="py-1">
                      <FormattedMessage id="resume_workExperience1UnorderedListEl2" />
                    </li>
                    <li className="py-1">
                      <FormattedMessage id="resume_workExperience1UnorderedListEl3" />
                      <ul className="list-disc ml-5" style={nestedListStyle}>
                        <li className="pt-1">
                          <FormattedMessage id="resume_workExperience1UnorderedListEl3_1" />
                        </li>
                        <li className="pt-1">
                          <FormattedMessage id="resume_workExperience1UnorderedListEl3_2" />
                        </li>
                      </ul>
                    </li>
                    <li className="py-1">
                      <FormattedMessage id="resume_workExperience1UnorderedListEl4" />
                    </li>
                    <li className="py-1">
                      <FormattedMessage id="resume_workExperience1UnorderedListEl5" />
                    </li>
                    <li className="py-1">
                      <FormattedMessage id="resume_workExperience1UnorderedListEl6" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="ml-8 lg:ml-28 mt-10 pb-28 print:pb-0 print:ml-10">
              <h1 className="text-md uppercase text-gray-400 tracking-wider mt-4 mb-6">
                <FormattedMessage id="resume_languagesLabel" />
              </h1>

              <div className="tracking-wide">
                <div className="w-32 inline-block mb-4 align-top">
                  <div className="block">
                    <FormattedMessage id="resume_language1" />
                  </div>
                  <div className="block text-sm text-gray-600 mt-1">
                    <FormattedMessage
                      id="resume_language1Proficiency"
                      values={{
                        br: <br />,
                      }}
                    />
                  </div>
                </div>
                <div className="w-32 inline-block mb-4 align-top">
                  <div className="block">
                    <FormattedMessage id="resume_language2" />
                  </div>
                  <div className="block text-sm text-gray-600 mt-1">
                    <FormattedMessage
                      id="resume_language2Proficiency"
                      values={{
                        br: <br />,
                      }}
                    />
                  </div>
                </div>

                <div className="w-32 inline-block mb-4 align-top">
                  <div className="block">
                    <FormattedMessage id="resume_language3" />
                  </div>
                  <div className="block text-sm text-gray-600 mt-1">
                    <FormattedMessage
                      id="resume_language3Proficiency"
                      values={{
                        br: <br />,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
