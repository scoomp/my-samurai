import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {type} from "os";

type DialogItemType = {
    name: string
    id: number
}
type MessageType = {
    message: string
}

const Dialogitem = (props: DialogItemType) => {
    let path = "/dialogs/" + props.id
    return <div className={s.dialog + '' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message: React.FC<MessageType> = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs: React.FC<DialogItemType> = (props) => {

    let Dialogs = [
        {id: 1, name: 'Hi'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Velera'},
    ]
    let Messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hoy is your it kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yooo'},
        {id: 5, message: 'Yooo'},
    ]

    let DialogsElements = Dialogs.map(d => <Dialogitem name={d.name} id={d.id}/>,);
    let MessagesElements = Messages.map(m => <Message message={m.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                { MessagesElements }
            </div>
        </div>
    )
}

export default Dialogs;