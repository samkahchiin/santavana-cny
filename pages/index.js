import React from 'react'
import Button from '../src/components/shared/Button'
import Steps from '../src/components/Steps'
import ReactAudioPlayer from 'react-audio-player'

const IndexPage = () => (
  <>
    <Steps />
    <ReactAudioPlayer src="/cny_music.mp3" autoPlay loop />
  </>
)

export default IndexPage
