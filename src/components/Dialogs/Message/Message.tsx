import s from "../Dialogs.module.css";
import React from "react";

type MessageProps = {
    message: string
}

export const Message = ({ message }: MessageProps) => {

    return (
        <div>
            <div className={s.message}>{message}</div>
        </div>

    )
}