import React from 'react'
import Button from '../src/components/shared/Button'
import Steps from '../src/components/Steps'
import AudioPlayer from 'react-h5-audio-player';

const IndexPage = () => {
    return (
       <>
        <Steps />
        <AudioPlayer
            autoPlay
            src="cny_music.mp3"
            onPlay={e => console.log("onPlay")}
        />
    </> 
    )
}

export default IndexPage
