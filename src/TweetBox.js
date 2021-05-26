import React from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@material-ui/core'

function TweetBox() {
    return (
        <div class="tweetbox">
            <form>
                <div className="tweetbox-input">
                    <Avatar src="https://avatarfiles.alphacoders.com/125/125254.png"></Avatar>
                    <input placeholder="what's happending" type="text" />
                </div>
                <input className="tweetbox-image-input" placeholder="enter image URL" type="text" />
                <Button  className="tweetbox-buttom">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
