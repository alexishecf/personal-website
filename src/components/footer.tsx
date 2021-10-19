import Link from "next/link";
import { FormattedMessage } from "react-intl";

export default function Footer() {
  return (
    <div className="relative py-6 bg-gray-100 dark:bg-gray-800 dark:text-gray-400 text-gray-700 text-center">
      <p>
        <FormattedMessage
          id="footer_paragraph"
          values={{
            year: new Date().getFullYear(),
          }}
        />
        <br />
      </p>
      <ul className="mt-2">
        <li>
          <Link href="/legal">
            <a className="font-bold inline-link">
              <FormattedMessage id="footer_legal" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
