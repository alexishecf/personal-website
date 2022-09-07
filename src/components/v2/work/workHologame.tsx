import React, { useEffect, useRef } from 'react';
import AnimatedSection from '../animatedSection';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';
import { FormattedMessage } from 'react-intl';

export default function workHologame() {
  gsap.registerPlugin(ScrollTrigger);

  const tl = useRef(null);
  const tl2 = useRef(null);
  const techStack = ['C#', 'TypeScript', 'PHP', 'SQL', 'Unity', 'React'];

  useEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: '.work-hologame .stack',
        start: '-400px center',
        end: '-400px center',
        scrub: false,
        pin: false,
      },
    });

    techStack.forEach((value, index) => {
      let cssIndex = index + 1;
      tl.current.fromTo(
        '.work-hologame .stack li:nth-child(' + cssIndex + ')',
        { opacity: 0, x: '-30' },
        { opacity: 1, x: 0, delay: 0.05 + cssIndex * 0.01, duration: 0.5 },
        '<'
      );
    });

    tl2.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.work-hologame .bottom-cover',
          start: '-400px center',
          end: '300px center',
          scrub: true,
          pin: false,
        },
      })
      .fromTo(
        '.work-hologame .bottom-cover',
        {
          backgroundPosition: '50% 80%',
        },
        {
          backgroundPosition: '50% 0%',
        }
      );
  }, []);

  return (
    <AnimatedSection className="work-hologame" id="work-hologame">
      <div className="closed">
        <h2>hologame</h2>
      </div>
      <div className="open">
        <h2>hologame</h2>
        <p>
          <FormattedMessage id="work_hologame_short" />
        </p>

        <div className="wrapper">
          <div className="item">
            <h3>
              <FormattedMessage id="work_role" />
            </h3>
            <span>
              <FormattedMessage id="work_hologame_role" />
            </span>
          </div>
          <div className="item">
            <h3>
              <FormattedMessage id="work_date" />
            </h3>
            <span>
              <FormattedMessage id="work_hologame_date" />
            </span>
          </div>
          <div className="item">
            <h3>
              <FormattedMessage id="work_location" />
            </h3>
            <span>
              <FormattedMessage id="work_hologame_location" />
            </span>
          </div>
        </div>

        <p>
          <FormattedMessage
            id="work_hologame_paragraph"
            values={{
              br: <br />,
            }}
          />
        </p>
        <h3 className="stack-title">
          <FormattedMessage id="work_stack" />
        </h3>
        <ul className="stack">
          {techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="bottom-cover" style={{ background: "url('images/project_hologame_hq.jpg')" }}>
          <div className="buttons">
            <a className="button" href="https://hologame.fr/" target="_blank">
              <FormattedMessage id="work_website" />
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
