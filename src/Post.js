import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@material-ui/icons'
import React from 'react'
import "./Post.css"
import {Avatar} from '@material-ui/core'

function Post({
    displayName,
    username,
    varified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post-avatar">
                <Avatar src="https://avatarfiles.alphacoders.com/125/125254.png"></Avatar>
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-header-text">
                        <h3>
                            Yifan Wu 
                            <span> 
                                <VerifiedUser className="post-badge" />
                            </span>
                        </h3>
                    </div>
                    <div className="post-header-description">
                        <p>I challenge you to save......</p>
                    </div>
                    <img src="https://media.giphy.com/media/AZFXN9ckBvn56F6zL6/giphy.gif" alt="" />
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
}

export default Post
