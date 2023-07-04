import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile = ({profilePage, addPost, updateNewPostText}: ProfilePropsType) => {

    return (
        <div>
           <ProfileInfo/>
            <MyPosts profilePage={profilePage} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </div>
    )
}

