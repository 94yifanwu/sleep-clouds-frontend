import React, {useEffect, useState, } from 'react'
import TweetBox from './TweetBox'
import './Feed.css'
import Post from './Post'
import db from '..//firebase'
import FlipMove from 'react-flip-move'


function Feed() {
    const [posts, setPosts] = useState([])
    useEffect( ()=>{
        db.collection('posts')
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot=>(
                setPosts(snapshot.docs.map( (doc) => {
                        let d = doc.data()
                        d['id'] = doc.id 
                        return d
                    })
            )
        ))
    }, [] )


    return (
        <div className="feed">

            <div className="feed-header"></div>
            <TweetBox />
            <FlipMove> 
            {posts.map(post => (
                <Post 
                    key={post.id}
                    displayName= {post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                    timestamp={post.timestamp}
                />
            ))}
            </FlipMove>

        </div>
    )
}

export default Feed
