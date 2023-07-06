import React from "react";
import s from "./ProfileInfo.module.css";


export const ProfileInfo = () => {
    return (
        <div className={s.contentImg}>
            <div className={s.wrapperUser}>
                <div className={s.userImg}>
                    <img
                        src="https://kartinkin.net/uploads/posts/2022-03/1646753080_3-kartinkin-net-p-kartinki-devushka-narisovannaya-3.jpg"/>
                </div>
                <div className={s.userInfo}>
                    <h3 className={s.userTitle}>Diana B.</h3>
                    <div>
                        <a className={s.item}>Date of Birth: 24 february</a>
                        <a className={s.item}>City: Minsk</a>
                        <a className={s.item}>Education: VSU'19</a>
                        <a className={s.item}>Web Site: in process</a>
                    </div>
                </div>
            </div>
        </div>

    )
}