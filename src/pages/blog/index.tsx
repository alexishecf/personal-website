import Container from "../../components/container";
import Footer from "../../components/footer";
import Header from "../../components/header";

import Head from "next/head";
import { FormattedMessage, useIntl } from "react-intl";

export default function Home() {
  const intl = useIntl();

  return (
    <div>
      <Head>
        <title>{intl.formatMessage({ id: "blog_title" })}</title>
      </Head>

      <Header activePage="Blog" />
      <Container smallerMarginsAndPaddings={true}>
        <div className="pb-48">
          <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200  md:text-3xl">
            <span>
              <FormattedMessage id="blog_blogLabel" />
            </span>
          </h1>

          <p className="my-3 text-gray-600 dark:text-gray-500">
            <FormattedMessage id="blog_paragraph" />
          </p>
        </div>
      </Container>

      <Footer />
    </div>
  );
}
