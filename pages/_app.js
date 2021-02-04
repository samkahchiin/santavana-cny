import React from 'react'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="fonts/fonts.css" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'ch';
  }
`

export default App
