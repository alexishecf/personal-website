import type { AppProps } from "next/app";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { IntlProvider } from "react-intl";
import { messagesFr } from "../../lang/fr-FR";
import { messagesEn } from "../../lang/en-US";
import { useRouter } from "next/router";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const getLocaleMessages = function () {
    return router.locale === "en-US" ? messagesEn : messagesFr;
  };

  return (
    <IntlProvider
      messages={getLocaleMessages()}
      key={router.locale}
      locale={router.locale}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
