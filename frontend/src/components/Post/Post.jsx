import { Avatar } from '@material-ui/core'
import { ThumbUp, ChatBubbleOutline, NearMe, AccountCircle, ExpandMore} from '@material-ui/icons'
import React from 'react'
import './post.css'

function Post({profilePic, message, userName, timeStamp, imgName}) {
    return (
        <div className='post'>
            <Avatar src={profilePic} className='post-avatar' />
            <div className='post-topInfo'>
                <h3>{userName}</h3>
                <p>{new Date(parseInt(timeStamp)).toUTCString()}</p>
            </div>
            <div className="post-options">
                <div className='post-option'>
                    <ThumbUp/>
                    <p>Like</p>
                </div>
                <div className="post-option">
                    <ChatBubbleOutline/>
                    <p>Comment</p>
                </div>
                <div className="post-option">
                    <NearMe/>
                    <p>Share</p>
                </div>
                <div className="post-option">
                    <AccountCircle/>
                    <ExpandMore/>
                </div>
            </div>
        </div>
    )
}

export default Post
