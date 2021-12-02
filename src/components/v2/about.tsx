import React, { useEffect, useRef } from "react";
import AnimatedSection from "./animatedSection";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { FormattedMessage } from "react-intl";

export default function about() {
  const techSkills = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Next.js",
    "Node.js",
    "SQL",
    "MySQL",
    "MongoDB",
    "GraphQL,",
    "Git",
    "C#",
    "Unity",
  ];

  gsap.registerPlugin(ScrollTrigger);

  const tl2 = useRef(null);

  useEffect(() => {
    tl2.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".technical-skills",
        start: "-400px center",
        end: "-400px center",
        scrub: false,
        pin: false,
      },
    });

    techSkills.forEach((value, index) => {
      let cssIndex = index + 1;
      tl2.current.fromTo(
        ".technical-skills li:nth-child(" + cssIndex + ")",
        { opacity: 0, x: "-30" },
        { opacity: 1, x: 0, delay: 0.05 + cssIndex * 0.01, duration: 0.5 },
        "<"
      );
    });
  }, []);

  return (
    <AnimatedSection className="about" id="about">
      <div className="closed">
        <h2>
          <FormattedMessage id="about_title" />
        </h2>
      </div>
      <div className="open">
        <h2>
          <FormattedMessage id="about_title" />
        </h2>
        <p>
          <FormattedMessage
            id="about_paragraph"
            values={{
              br: <br />,
            }}
          />
        </p>
        <h3>
          <FormattedMessage id="about_skills" />
        </h3>
        <h4>
          <FormattedMessage id="about_skillsTechnical" />
        </h4>
        <ul className="technical-skills">
          {techSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <div className="buttons">
          <a
            className="button"
            href="#hero"
            onClick={() =>
              (document.querySelector<HTMLElement>(
                "#hero .resume-link .languages"
              ).style.display = "block")
            }
          >
            <FormattedMessage id="about_resume" />
          </a>
          <a className="button" href="#">
            <FormattedMessage id="about_contact" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
