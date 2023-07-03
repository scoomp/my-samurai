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

const Message = (props: MessageType)=> {
    return  <div className={s.dialog}>{props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialogitem name={"Dymych"} id={1}/>
                <Dialogitem name={"Andrew"} id={2}/>
                <Dialogitem name={"Sveta"}  id={3}/>
                <Dialogitem name={"Sasha"}  id={4}/>
                <Dialogitem name={"Viktor"} id={5}/>
                <Dialogitem name={"Velera"} id={6}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"Hoy is your it kamasutra"} />
                <Message message={"Yo"}/>
                <Message message={"Yooo"}/>
                <Message message={"Yo"}/>
            </div>
        </div>
    )
}

export default Dialogs;