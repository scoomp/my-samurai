import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {type} from "os";



const MyPosts = () => {
    let  Posts  = [
        {id: 1, message: 'Hi, how are you?', LikesCount: 12},
        {id: 2, message: 'It s my first post', LikesCount: 11}
    ]

    let PostElements =
        Posts.map(p =>  <Post message={p.message}  LikesCount={p.LikesCount}/>);

    return (
        <div className={s.postsBlock}>
          <h3>MyPosts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Posts</button>
                </div>
            </div>

            <div className={s.posts}>
                { PostElements }
            </div>
        </div>)
}

export default MyPosts;