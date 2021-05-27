import React, { useState } from 'react'
import './TweetBox.css'
import {Avatar, Button} from '@material-ui/core'
import db from './firebase'

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
            avatar:"https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg",
            timestamp: (Date.now())
        })

        setTweetMessage("")
        setTweetImage("")
    }

    return (
        <div class="tweetbox">
            <form>
                <div className="tweetbox-input">
                    <Avatar 
                        src="https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg">
                    </Avatar>

                    <input 
                        onChange = { e=> setTweetMessage(e.target.value)}
                        value = {tweetMessage}
                        placeholder="what's happending" 
                        type="text" />
                </div>

                <input 
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetbox-image-input" 
                    placeholder="enter image URL" 
                    type="text" 
                />

                <Button  
                    type="submit"
                    onClick={sendTweet}
                    className="tweetbox-buttom">
                    Tweet
                </Button>

            </form>
        </div>
    )
}

export default TweetBox
