import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Alexis Hecfeuille's homepage, full stack web developer based in France." />
          <meta name="author" content="Alexis Hecfeuille" />
          <meta name="robots" content="index, follow" />
          <meta name="keywords" content="hecfeuille,alexis,software,developer,web,developer,front,back,full,stack,javascript,react,node,next,sse,se" />
          <meta property="og:title" content="Alexis Hecfeuille" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Alexis Hecfeuille" />
          <meta property="og:url" content="https://alexis.hecfeuille.fr/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="fr_FR" />
          <meta property="og:site_name" content="Alexis Hecfeuille" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
