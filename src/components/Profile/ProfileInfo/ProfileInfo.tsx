import React from "react";
import s from "./ProfileInfo.module.css";


export const ProfileInfo = () => {
    return (
        <div className={s.contentImg}>
            <div className={s.wrapperUser}>
                <div className={s.userImg}>
                    <img
                      height='100px' width='100px'  src="https://sun9-50.userapi.com/impg/hYLI8vOGh_Hzv6KbGaSFsVxENxueBiyzdtBO1A/sDsVkrHaKjc.jpg?size=1620x2160&quality=95&sign=53e2ffa824ce3df32e7638ae658f1c49&type=album"/>
                </div>
                <div className={s.userInfo}>
                    <h3 className={s.userTitle}>Alexey M.</h3>
                    <div>
                        <a className={s.item}>Date of Birth: 22 July</a>
                        <a className={s.item}>City: Moscow</a>
                        <a className={s.item}>Education: Volgu</a>
                        <a className={s.item}>Web Site: in process</a>
                    </div>
                </div>
            </div>
        </div>

    )
}