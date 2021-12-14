import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@material-ui/icons'
import React, { forwardRef } from 'react'
import "./Post.css"
import { Avatar } from '@material-ui/core'

let audio = new Audio("./1.mp3")
const playAudio = () => {
    audio.play()
}

const Post = forwardRef(
    ({
        key,
        displayName,
        username,
        verified,
        text,
        image,
        avatar,
        timestamp
    }, ref) => {
        return (
            <div className="post" ref={ref}>
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
                                    {verified && <VerifiedUser className="post-badge" />} @{username}
                                </span>
                            </h3>
                        </div>
                        <div className="post-header-description">
                            <p>{text}</p>
                        </div>
                        <img src={image} alt="" onClick={playAudio} />
                        <div className="post-footer">
                            <ChatBubbleOutline fontSize="small" />
                            <Repeat fontSize="small" />
                            <FavoriteBorder fontSize="small" />
                            <Publish fontSize="small" />
                        </div>
                    </div>
                </div>
            </div>
        )
    })

export default Post
