import React, { useState } from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@material-ui/core'
import db from '../firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")
    
    const sendTweet = e => {
        e.preventDefault()

        db.collection("posts").add({
            displayName:"Yifan Wu",
            username:"yifanwu",
            verified:true,
            text:tweetMessage,
            image:tweetImage,
            avatar:"https://cdn.dribbble.com/users/2135446/screenshots/7434903/media/746417f0743d3b0101f6bf7634b60a32.gif",
            timestamp: (Date.now())
        })

        setTweetMessage("")
        setTweetImage("")
    }

    return (
        <div className="tweetbox">
            <form>
                <div className="tweetbox-input">
                    <Avatar 
                        src="https://cdn.dribbble.com/users/2135446/screenshots/7434903/media/746417f0743d3b0101f6bf7634b60a32.gif">
                    </Avatar>

                    <input 
                        onChange = {e => setTweetMessage(e.target.value)}
                        value = {tweetMessage}
                        placeholder="Upload and tag your favorite Cloud " 
                        type="text" />

                </div>
                <input 
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetbox-image-input" 
                    placeholder="enter audio URL" 
                    type="text" 
                />

                <Button  
                    type="submit"
                    onClick={sendTweet}
                    className="tweetbox-buttom">
                    Upload
                </Button>

            </form>
        </div>
    )
}

export default TweetBox
