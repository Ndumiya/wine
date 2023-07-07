import React from 'react'
import '../components/Video.css'

function Video() {
    return (
        <div>
{/* 
            <video >
                <source src='https://assets.mixkit.co/videos/preview/mixkit-pouring-red-wine-from-a-bottle-very-close-view-22734-large.mp4' />
            </video> */}

            <iframe src='https://www.youtube.com/embed/y6lXDn771HA?controls=0&autoplay=1&mute=1'

                allow='autoplay;'
                allowFullScreen
            />
            
        </div>
    )
}

export default Video