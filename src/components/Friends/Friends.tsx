import React from 'react';
import {SidebarType} from "../../redux/state";
import s from './Friends.module.css'

type FriendsPropsType = {
    state: SidebarType
}

export const Friends = ({state}: FriendsPropsType) => {
    const friends = state.friends.map(f => {
        return <div key={f.id}>
            <div className={s.userFriend}>
                <img className={s.avatar} src={f.avatar} alt=""/>
                <span>{f.name}</span>
            </div>
        </div>
    })

    return (
        <>
            <h1>Friends</h1>
            <div className={s.wrapperFriends}>
                {friends}
            </div>
        </>
    );
};

