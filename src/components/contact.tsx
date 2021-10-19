import Section from "./section";
import Link from "next/link";
import { FormattedMessage, FormattedNumber, useIntl } from "react-intl";

export default function Contact() {
  return (
    <Section>
      <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200  md:text-3xl">
        <span className="text-indigo-600">03.</span>{" "}
        <span>
          <FormattedMessage id="index_contact" />
        </span>
      </h1>
      <p className="mt-3 text-base text-gray-600 dark:text-gray-500 ml-4">
        <FormattedMessage
          id="contact_paragraph"
          values={{
            mail: (
              <a className="inline-link" href="mailto:alexis@hecfeuille.fr">
                alexis@hecfeuille.fr
              </a>
            ),
            linkedInMessage: (
              <Link href="https://www.linkedin.com/in/alexishecfeuille">
                <a className="inline-link" target="_blank">
                  LinkedIn
                </a>
              </Link>
            ),
          }}
        />
      </p>
    </Section>
  );
}
