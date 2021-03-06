import React from 'react'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Santavana | 寂静禅林</title>
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
