import React from 'react';
import s from "./Post.module.css"
const Post=()=>{
    return(
        <div className={s.item}>
           <img src='https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg'/>
            post 1
            <span>Like</span>
            <span>Dislike</span>
        </div>
    )
}



export default Post;