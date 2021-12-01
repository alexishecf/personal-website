import React from "react";
import { FormattedMessage } from "react-intl";

export default function contact() {
  return (
    <section className="contact" id="contact">
      <h2>
        <FormattedMessage id="contact_title" />
      </h2>
      <p>
        <FormattedMessage
          id="contact_paragraph"
          values={{
            mail: (
              <a href="mailto:alexis@hecfeuille.fr">alexis@hecfeuille.fr</a>
            ),
            linkedInMessage: (
              <a
                target="_blank"
                href="https://linkedin.com/in/alexishecfeuille"
              >
                LinkedIn
              </a>
            ),
          }}
        />
      </p>
    </section>
  );
}
