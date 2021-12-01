import React from "react";

import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";

export default function E404() {
  const intl = useIntl();

  return (
    <div>
      <Head>
        <title>{intl.formatMessage({ id: "e404_title" })}</title>
      </Head>
      <h1>
        <FormattedMessage id="e404_label" />
      </h1>
      <p>
        <FormattedMessage id="e404_paragraph" />
      </p>
    </div>
  );
}
