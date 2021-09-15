import './Widgets.css'
import { Search } from '@material-ui/icons'
import React from 'react'
import {TwitterTimelineEmbed, 
        TwitterShareButton,
        TwitterTweetEmbed
        } from 'react-twitter-embed'

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets-input">
                <Search className="widgets-search-icon"></Search>
                <input placeholder="search" type="text" />
            </div>
            <div className="widgets-widget-container">
                <h2>Real Tweet API</h2> 
                <TwitterTweetEmbed tweetId={"1397630625138450433"} /> 
                <TwitterTweetEmbed tweetId={"1437283024186511363"} /> 
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="musiclubjazz"
                    options={{ height:400 }} />
                <br/>
                <TwitterShareButton
                    url={"https://facebook/com/jazz"}
                    options={{ text: "#jazz music is awesome", via: "musiclubjazz" }} />
            </div>
        </div>
    )
}


export default Widgets
