import {combineReducers, createStore} from "redux";
import {AddPostACType, profileReducer, UpdatePostACType} from "./profileReducer";
import {dialogsReducer, NewMessageACType, UpdateMessageACType} from "./dialogsReducer";
import {FollowACType, UnFollowACType, userReducer} from "./UsersReducer";

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type UsersType = {
    id: number,
    followed: boolean
    fullName: string,
    status: string,
    location: { city: string, country: string }
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export  type UsersPageType = {
    users: Array<UsersType>
}

export type UnionType = NewMessageACType | UpdateMessageACType | AddPostACType | UpdatePostACType | FollowACType | UnFollowACType


export const RoootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userReducer: userReducer
})
export type AppStateType = ReturnType<typeof RoootReducer>
export const store = createStore(RoootReducer);


// @ts-ignore
window.store = store;



