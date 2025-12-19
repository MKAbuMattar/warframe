import {Fragment} from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import Background from '@/util/Background/Background';
import {GlobalStyle} from '@/styles/Style';
import Footer from '@/components/Footer/Footer';

import '@/styles/normalize.css';

const App = ({Component, pageProps}) => {
  return (
    <Fragment>
      <Head>
        <title>Warframe Info</title>
        <meta
          name="description"
          content="Information on WARFRAME. Our goal is to build the most comprehensive database regarding the game, including everything from gameplay descriptions, weapon statistics, and battle mechanics to the eponymous Warframes and the WARFRAME universe's underlying mythology."
        />
        <meta name="robots" content="all" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:url" content="http://mkabumattar.github.io/" />
        <meta property="og:site_name" content="Warframe Info" />
        <meta property="og:title" content="Warframe Info" />
        <meta
          property="og:description"
          content="Information on WARFRAME. Our goal is to build the most comprehensive database regarding the game, including everything from gameplay descriptions, weapon statistics, and battle mechanics to the eponymous Warframes and the WARFRAME universe's underlying mythology."
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mkabumattar" />
        <meta name="twitter:creator" content="@mkabumattar" />
        <meta name="twitter:title" content="Warframe Info" />
        <meta
          name="twitter:description"
          content="Information on WARFRAME. Our goal is to build the most comprehensive database regarding the game, including everything from gameplay descriptions, weapon statistics, and battle mechanics to the eponymous Warframes and the WARFRAME universe's underlying mythology."
        />
      </Head>

      <GlobalStyle />
      <Background />
      <Navbar />
      <Component {...pageProps} />

      <Footer />
    </Fragment>
  );
};

export default App;
