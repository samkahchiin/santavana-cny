import React from 'react'
import Button from '../src/components/shared/Button'
import Steps from '../src/components/Steps'
import ReactAudioPlayer from 'react-audio-player'

const IndexPage = () => {
    return (
       <>
        <Steps />
        <div>
            <ReactAudioPlayer src="/cny_music.mp3" autoPlay loop/>
        </div> 
    </>
    )
}

export default IndexPage
