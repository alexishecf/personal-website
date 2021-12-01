import React from "react";
import { FormattedMessage } from "react-intl";
import AnimatedSection from "../animatedSection";
import WorkHologame from "./workHologame";

export default function work() {
  return (
    <section className="work" id="work">
      <h2><FormattedMessage id="work_showcase" /></h2>
      <WorkHologame />
    </section>
  );
}
