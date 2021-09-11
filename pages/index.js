import React, { useEffect } from 'react'
import Head from 'next/head';
import Button from '../src/components/shared/Button'
import Steps from '../src/components/Steps'
import ReactAudioPlayer from 'react-audio-player'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

const IndexPage = () => {
  const handle = useFullScreenHandle()
  const url = 'https://santavana.vercel.app'
  const title = 'Santavana Forest Hermitage'
  const description = 'CNY Blessing from Buddha'
  const image = 'https://i.postimg.cc/V64RD65h/buddha-sit.png'

  useEffect(() => {
    handle.enter
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Sam Kah Chiin" />
        <meta name="keywords" content="Santavana" />
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <meta httpEquiv="Content-Security-Policy" content="script-src 'self' https://carol-portfolio.vercel.app/;" /> */}

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
      </Head>
      <FullScreen handle={handle}>
        <Steps />
        <ReactAudioPlayer src="/cny_music.mp3" autoPlay loop />
      </FullScreen>
    </>
  )
}

export default IndexPage
