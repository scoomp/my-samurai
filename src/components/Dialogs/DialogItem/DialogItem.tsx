import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


type DialogItemProps = {
    name: string
    id: string
    avatar: string
}

export const  DialogItem = ({id, name, avatar}: DialogItemProps) => {
    let path = "/dialogs/" + id;

    return (
        <div className={s.dialog + " " + s.active}>
            <img className={s.avatar} src={avatar} alt="photo"/>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}