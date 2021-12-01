import React from "react";

import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";

export default function E500() {
  const intl = useIntl();

  return (
    <div>
    <Head>
      <title>{intl.formatMessage({ id: "e500_title" })}</title>
    </Head>
    <h1>
      <FormattedMessage id="e500_label" />
    </h1>
    <p>
      <FormattedMessage id="e500_paragraph" />
    </p>
  </div>
  );
}
