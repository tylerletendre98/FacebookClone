import React from 'react'
import { Avatar } from '@material-ui/core'
import './story.css'

function Story({img, profileSrc, title}) {
    return (
        <div style={{backgroundImage: `url(${img})`}} className="story">
            <Avatar src={profileSrc} className='story-avatar'/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
