import React, { useEffect, useRef } from "react";
import Header from "../components/v2/header";
import Work from "../components/v2/work/work";
import About from "../components/v2/about";
import Contact from "../components/v2/contact";
import Footer from "../components/v2/footer";
import Head from "next/head";
import { useIntl } from "react-intl";

export default function index() {
  const intl = useIntl();

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <title>{intl.formatMessage({ id: "index_title" })}</title>
      </Head>
      <Header />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
