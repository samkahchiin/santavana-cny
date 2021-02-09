import React from 'react'
import Button from '../src/components/shared/Button'
import Steps from '../src/components/Steps'
import ReactAudioPlayer from 'react-audio-player'

const IndexPage = () => {
    return (
       <>
        <Steps />
        <div>
            <ReactAudioPlayer useRef='audio_tag' src="/cny_music.mp3" autoPlay/>
        </div> 
    </>
    )
}

export default IndexPage
