import Head from 'next/head'
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nicolas Scandizzo Portfolio</title>
        <meta property="og:title" content="Nicolas Scandizzo Portfolio" key="title" />
      </Head>
      <Theme>

        <Component {...pageProps} />
      </Theme>
    </>
  );
}
