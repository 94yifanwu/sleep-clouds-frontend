import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@material-ui/icons'
import React, {forwardRef} from 'react'
import "./Post.css"
import {Avatar} from '@material-ui/core'

const Post = forwardRef ( 
    ({
        key,
        displayName,
        username,
        verified,
        text,
        image,
        avatar,
        timestamp
        }, ref) =>  
    {
    return (
        <div className="post">
            <div className="post-avatar">
                <Avatar src={avatar}></Avatar>
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-header-text">
                        <h3>
                            {key}
                            {displayName} 
                            <span> 
                                {verified && <VerifiedUser className="post-badge"  />} @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post-header-description">
                        <p>{text}</p>
                    </div>
                    <img src={image} alt="" />
                    <div className="post-footer">
                        <ChatBubbleOutline fontSize="small" />
                        <Repeat fontSize="small"/>
                        <FavoriteBorder fontSize="small" />
                        <Publish fontSize="small" />
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Post
