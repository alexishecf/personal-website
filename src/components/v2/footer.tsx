import Link from "next/link";
import React from "react";
import { FormattedMessage } from "react-intl";

export default function footer() {
  return (
    <footer>
      <div>
        <FormattedMessage
          id="footer_paragraph"
          values={{
            year: new Date().getFullYear(),
          }}
        />
        {" "}-{" "}
        <Link href="/legal">
          <a><FormattedMessage id="footer_legal" /></a>
        </Link>
      </div>
    </footer>
  );
}
