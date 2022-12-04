import { Fragment } from 'react'

import Head from 'next/head'

import Navbar from '../components/Navbar/Navbar'
import Background from '../util/Background/Background'

import { DefaultSeo } from 'next-seo'
import SEO from './../next-seo.config'

import { GlobalStyle } from '../style/Style'

import '../style/normalize.css'
import Footer from '../components/Footer/Footer'

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <meta name="robots" content="all" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <Background />
      <Navbar />
      <Component {...pageProps} />

      <Footer />
    </Fragment>
  )
}

export default App
