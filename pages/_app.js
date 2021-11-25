import { Fragment } from 'react'

import { DefaultSeo } from 'next-seo'
import SEO from './../next-seo.config'

import { GlobalStyle } from '../style/Style'

import '../style/normalize.css'

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App
