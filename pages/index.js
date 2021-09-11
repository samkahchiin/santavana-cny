import React, { useEffect } from 'react'
import Button from '../src/components/shared/Button'
import Steps from '../src/components/Steps'
import ReactAudioPlayer from 'react-audio-player'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

const IndexPage = () => {
  const handle = useFullScreenHandle()

  useEffect(() => {
    handle.enter
  }, [])

  return (
    <>
      <FullScreen handle={handle}>
        <Steps />
        <ReactAudioPlayer src="/cny_music.mp3" autoPlay loop />
      </FullScreen>
    </>
  )
}

export default IndexPage
