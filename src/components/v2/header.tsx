import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FormattedMessage } from "react-intl";

export default function header() {
  gsap.registerPlugin(ScrollTrigger);

  const heroContainer = useRef(null);
  const tl = useRef(null);

  const resumeLanguagesContainer = useRef(null);

  const onResumeClick = () => {
    resumeLanguagesContainer.current.style.display =
      resumeLanguagesContainer.current.style.display === "block"
        ? "none"
        : "block";
  };

  useEffect(() => {
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: heroContainer.current,
          start: "center center",
          end: "50% ",
          scrub: 5,
          pin: true,
          anticipatePin: 1,
          fastScrollEnd: true,
        },
      })
      .fromTo(heroContainer.current, {}, {});
  }, []);

  return (
    <header>
      <nav>
        <Link href="#about">
          <a><FormattedMessage id="header_about" /></a>
        </Link>
        <Link href="#work">
          <a><FormattedMessage id="header_work" /></a>
        </Link>
        <Link href="#contact">
          <a><FormattedMessage id="header_contact" /></a>
        </Link>
        <a
          onClick={() => {
            document.body.classList.toggle("dark-mode");
          }}
        >
          <span className="moon">
            <FontAwesomeIcon icon={faMoon} />
          </span>
          <span className="sun">
            <FontAwesomeIcon icon={faSun} />
          </span>
        </a>
      </nav>

      <div className="hero" ref={heroContainer}>
        <div className="short-intro">
          <h1>
            Alexis
            <br />
            Hecfeuille
          </h1>
          <p>
            <FormattedMessage id="header_bio" />
          </p>

          <div className="social">
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
            ].map((socialLink) => (
              <Link key={socialLink.href} href={socialLink.href}>
                <a
                  target={socialLink.href.startsWith("/") ? "_self" : "_blank"}
                >
                  <FontAwesomeIcon
                    size="lg"
                    icon={socialLink.icon}
                  ></FontAwesomeIcon>
                </a>
              </Link>
            ))}

            <div className="resume-link" onClick={onResumeClick}>
              <FontAwesomeIcon size="lg" icon={faFileAlt}></FontAwesomeIcon>
              <div className="languages" ref={resumeLanguagesContainer}>
                <a
                  href="files/resume_hecfeuille.pdf"
                  target="_blank"
                  className="lang"
                >
                  English
                </a>
                <a
                  href="files/cv_hecfeuille_fr.pdf"
                  target="_blank"
                  className="lang"
                >
                  Français
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="photo">
          <figure>
            <img src="/images/alexis.jpg" alt="Alexis Hecfeuille's photo" />
          </figure>
        </div>
      </div>
    </header>
  );
}
