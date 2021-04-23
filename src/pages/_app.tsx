import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Boilerplate</title>
        <meta
          name="description"
          content="A simple project starter to work with TS, React, NextJS and Styled components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
