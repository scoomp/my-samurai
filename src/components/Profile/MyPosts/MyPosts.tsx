import React, {useRef} from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css"
import {ProfilePageType} from "../../../redux/state";


type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const MyPosts = ({profilePage, addPost, updateNewPostText}: MyPostsPropsType) => {
    let {posts, newPostText} = profilePage

    const postsData = posts.map((p, index) => {
        return <Post key={index} message={p.message} likesCount={p.likesCount}/>
    })

    const newPostElement = useRef<HTMLTextAreaElement>(null)

    const onClickAddPost = () => {
        addPost()
    }

    const onChangeHandler = () => {
        const text = newPostElement.current!.value
        updateNewPostText(text)
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <textarea  onChange={onChangeHandler} value={newPostText} ref={newPostElement}/>
            <button onClick={onClickAddPost} className={s.button}>Send</button>
            <div className={s.messages}>
                {postsData}
            </div>
        </div>
    )
}

export default MyPosts;
