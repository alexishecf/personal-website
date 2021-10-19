import Container from "../components/container";
import Footer from "../components/footer";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Header from "../components/header";
import Hero from "../components/hero";

import Head from "next/head";
import { useIntl } from "react-intl";

export default function Home() {
  const intl = useIntl();

  return (
    <div>
      <Head>
        <title>{intl.formatMessage({ id: "index_title" })}</title>
      </Head>

      <Header activePage="Home">
        <Hero />
      </Header>
      <Container>
        <About />
        <Projects />
        <Contact />
      </Container>

      <Footer />
    </div>
  );
}
