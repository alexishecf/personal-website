import React from "react";

import Container from "../components/container";
import Footer from "../components/footer";
import Header from "../components/header";

import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";

export default function E404() {
  const intl = useIntl();

  return (
    <div>
      <Head>
        <title>{intl.formatMessage({ id: "e404_title" })}</title>
      </Head>

      <Header activePage="Legal" />
      <Container smallerMarginsAndPaddings={true}>
        <div className="pb-32">
          <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200  md:text-3xl">
            <span>
              <FormattedMessage id="e404_label" />
            </span>
          </h1>

          <p className="my-3 text-gray-600 dark:text-gray-500">
            <FormattedMessage id="e404_paragraph" />
          </p>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
