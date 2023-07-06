import React, {useRef} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageText: (newMessage: string) => void
    addMessage: () => void
}

export const Dialogs = ({dialogsPage, updateNewMessageText, addMessage}: DialogsPropsType) => {
    const {dialogs, messages} = dialogsPage

    const dialogsData = dialogs.map((d, index) => {
        return <DialogItem key={index} name={d.name} id={d.id} avatar={d.avatar}></DialogItem>
    })
    const messagesData = messages.map((m, index) => {
        return <Message key={index} message={m.message}/>
    })

    const newMessageElement = useRef<HTMLTextAreaElement>(null)

    const onChangeAddMessage = () => {
        let text = newMessageElement.current!.value
        updateNewMessageText(text)
    }

    const onClickHandler = () => {
        addMessage()
        newMessageElement.current!.value = ""
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData}
            </div>

            <div className={s.messages}>
                {messagesData}
            </div>
            <div>
                <textarea ref={newMessageElement} onChange={onChangeAddMessage}/>
                <button onClick={onClickHandler}>Add</button>
            </div>
        </div>
)
}