import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer({correct,wrong,url}) {
  return (
    <>
      <ReactPlayer controls style={{ marginLeft: '10px', marginRight: '10px' }} height={250} width={500} url={url} onReady={correct} onError={wrong} />    
    </>
  )
}

export default VideoPlayer
