import { Avatar } from '@material-ui/core'
import React from 'react'

function Post({profilePic, message, userName, timeStamp, imgName}) {
    return (
        <div className='post'>
            <Avatar src={profilePic} className='post-avatar' />
            <div className='post-topInfo'>
                <h3>{userName}</h3>
                <p>{new Date(parseInt(timeStamp)).toUTCString()}</p>
            </div>
        </div>
    )
}

export default Post
