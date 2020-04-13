import React from 'react';
import pc from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={pc.maincontent}>
            <div className={pc.myposts}>
                <h3>My posts</h3>
                <textarea className={pc.news} id="" rows="5" placeholder="your news"></textarea>
                <button type="button" className={pc.button}>SEND</button>
            </div>
            <Post massage='LLLLLLL' likes='10'/>
            <Post massage='KKKKKKK' likes='15'/>
        </div>
    )
}

export default MyPosts;