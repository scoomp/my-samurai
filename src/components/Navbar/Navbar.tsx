import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {SidebarType} from "../../redux/state";
import {Friends} from "../Friends/Friends";


type NavBarPropsType = {
    state: SidebarType
}

export const Navbar = ({state}: NavBarPropsType) => {
    return (
        <nav className="nav">
            <div>
                <div className={s.item}>
                    <NavLink
                        activeClassName={s.activeLink}
                        to="/profile">Profile
                    </NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink
                        activeClassName={s.activeLink}
                        to="/dialogs">Messages
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        activeClassName={s.activeLink}
                        to="/news">News
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        activeClassName={s.activeLink}
                        to="/music">Music
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        activeClassName={s.activeLink}
                        to="/settings">Settings
                    </NavLink>
                </div>
            </div>
            <div>
                <Friends state={state}/>
            </div>
        </nav>
    )
}

