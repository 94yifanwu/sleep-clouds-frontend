import React, {useEffect, useState, } from 'react'
import TweetBox from './TweetBox'
import './Feed.css'
import Post from './Post'
import db from './firebase'
import FlipMove from 'react-flip-move'


function Feed() {
    const [posts, setPosts] = useState([])
    useEffect( ()=>{
        db.collection('posts').onSnapshot(snapshot=>(
            setPosts(snapshot.docs.map(doc=>
                doc.data()
                //console.log(doc)
            ))
        ))
    }, [] )
//https://lh3.googleusercontent.com/proxy/abssAmX7crAfu77H75jy-l79HzA_3hFk1-uryJ9bdR_mp4Gijt7PPeQ3UpybDVtxyNzCNCMcmH9P2MpTaSdRMISmMDoq4SOLB5jS5KaPIfseP2uO7SNAvXl9FTR61zMjB5GF
//image
//https://media.giphy.com/media/AZFXN9ckBvn56F6zL6/giphy.gif
    return (
        <div className="feed">

            <div className="feed-header"></div>
            <TweetBox />
            <FlipMove>
            {posts.map(post => (
                <Post 
                    key={post.text}
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
