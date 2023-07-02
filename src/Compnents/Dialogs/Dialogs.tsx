import React from 'react';
import s from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Dymych
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
            </div>
            <div className={s.messages}>
                <div className='message'>Hi</div>
                <div className='message'>How is your it kamasutra</div>
                <div className='message'>Yof</div>
            </div>
        </div>
    )
}

export default Dialogs;