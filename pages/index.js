import React, { useEffect, useRef } from 'react'
import Button from '../src/components/shared/Button'
import Steps from '../src/components/Steps'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'

const IndexPage = () => {
  const handle = useFullScreenHandle()
  const audioRef = useRef()

  useEffect(() => {
    handle.enter
  }, [])

  return (
    <>
      <FullScreen handle={handle}>
        <Steps audioRef={audioRef} />
        <audio ref={audioRef} src="/cny_music.mp3" loop></audio>
      </FullScreen>
    </>
  )
}

export default IndexPage
