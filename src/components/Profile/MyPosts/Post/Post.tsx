import React from "react";
import s from "./Post.module.css";


type PostPropsType = {
    message: string,
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.wrapperPost}>
            <img src="https://pictures.pibig.info/uploads/posts/2023-03/1680288390_pictures-pibig-info-p-litso-krugloe-risunok-vkontakte-13.png"
                 alt="img"/>
            <a>{props.message}</a>
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;
