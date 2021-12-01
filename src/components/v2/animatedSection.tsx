import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

export default function animatedSection({children, className, id}) {
  gsap.registerPlugin(ScrollTrigger);

  const el = useRef(null);
  const q = gsap.utils.selector(el);
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: q(".closed"),
          start: "top center",
          end: "bottom center",
          scrub: false,
          pin: false,
        },
      })
      .fromTo(
        q(".closed"),
        {
          "max-width":
            Math.min(350, document.documentElement.clientWidth) + "px",
          height:"200px",
          autoAlpha: 1,
        },
        {
          "max-width":
            Math.min(1024, document.documentElement.clientWidth) + "px",
          autoAlpha: 0,
          height:"auto",
          duration: "0.8",
        }
      )
      .fromTo(
        q(".open"),
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: "0.6",

        },
        "<"
      );
  }, []);

  return (
    <section className={className} ref={el} id={id}>
      {children}
    </section>
  );
}
