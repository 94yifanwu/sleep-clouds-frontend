import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'

function Feed() {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed-header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            

        </div>
    )
}

export default Feed
