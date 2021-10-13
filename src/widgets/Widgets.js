import './Widgets.css'
import { Search } from '@material-ui/icons'
import React from 'react'
import {TwitterTimelineEmbed, 
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
                <h2>Recommended Clouds</h2> <br/>

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="sleepmusiclover"
                    options={{ height:600 }} />
                <TwitterTweetEmbed tweetId={"1443616723152801797"} /> 

                <br/>
            </div>
        </div>
    )
}


export default Widgets
