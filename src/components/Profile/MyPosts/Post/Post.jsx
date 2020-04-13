import React from 'react';
import pc from './Post.module.css';

const Post = (props) => {
    return (
        <div className={pc.maincontent}>
            <div>
                {props.massage}
            </div>
                {props.likes}
        </div>
    )
}

export default Post;