import React from 'react'
import MessageSender from '../MessageSender/MessageSender'
import StoryReel from '../StoryReel/StoryReel'
import './feed.css'

export default function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
        </div>
    )
}

