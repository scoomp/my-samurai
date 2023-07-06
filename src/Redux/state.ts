import {v1} from "uuid";

// @ts-ignore
let rerenderEntireTree = (state: StateType) => {
    console.log("State was changed")
}

// types
export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export type MessagesType = {
    id: string
    message: string
}

export type DialogsType = {
    id: string
    name: string
    avatar: string
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type DialogsPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
    newMessageText: string
}

export type SidebarType = {
    friends: DialogsType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: StateType
    callSubscriber(state: StateType): void
    getState(): StateType
    addPost(): void
    updateNewPostText(newText: string): void
    updateNewMessageText(newMessage: string): void
    addMessage(): void
    subscribe(observer: (state: StateType) => void): void
}
// data
export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: "Hello, how are you?", likesCount: 5},
                {id: v1(), message: "I love world!", likesCount: 10},
                {id: v1(), message: "It's my first post!", likesCount: 3},
                {id: v1(), message: "Go to walk", likesCount: 49},
                {id: v1(), message: "Mmmm, great!", likesCount: 0},
            ],
            newPostText: ""
        },
        dialogsPage: {
            messages: [
                {id: v1(), message: "Hi"},
                {id: v1(), message: "How is your it-kamasutra?"},
                {id: v1(), message: "Yo"},
                {id: v1(), message: "Go!"},
                {id: v1(), message: "Mmmm, great!"},
                {id: v1(), message: "I'm Valera"},
            ],
            dialogs: [
                {id: v1(), name: "Yar4ik", avatar: "https://sun9-67.userapi.com/impg/Ub4on9zYwOSIw1Zg5kFL1zJblJT63Zo2LvONHQ/IzEBM2mazDU.jpg?size=1079x1920&quality=95&sign=81cfb7ae074c3b5c6f97a0aa543f31fc&type=album"},
                {
                    id: v1(),
                    name: "Vadik",
                    avatar: "https://sun9-29.userapi.com/impg/r71BCbestUY6hJOTn0dCCZPPX-LtLNbsl1oQdQ/5UTuIhxf17A.jpg?size=960x1280&quality=95&sign=2e8925bb871433fcc404fd08cde7dafb&type=album"
                },
                {
                    id: v1(),
                    name: "Alina",
                    avatar: "https://sun9-24.userapi.com/impg/1NyshwKEeAVl8eoFc_NvsdEgfcR7y3-kNArkRQ/8etPkAewko4.jpg?size=1620x2160&quality=95&sign=c6d2da63bf50a1bf199acfd2b302b864&type=album"
                },
                {
                    id: v1(),
                    name: "Polina",
                    avatar: "https://sun9-61.userapi.com/impg/kDEy_tXRrBzrsQqtf8gnUKeHbpn8kyTEZdXbyQ/YqiMUwqxag8.jpg?size=1620x2160&quality=95&sign=66e3fa289671e198d0e003e18812c960&type=album"
                },
                {
                    id: v1(),
                    name: "Max",
                    avatar: "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-1-avatar-2754574_120513.png"
                },
                {
                    id: v1(),
                    name: "Kostya",
                    avatar: "https://sun9-39.userapi.com/impg/ri09EpPL2Pa16JQ_e6buDzbplwpXxEWeHKUCrA/qMDtwHgSndw.jpg?size=1620x2160&quality=95&sign=3ba2815a5aa0ba66ca4bc94ee321c7fc&type=album"
                },
            ],
            newMessageText: ""
        },
        sidebar: {
            friends: [
                {
                    id: v1(),
                    name: "Yar4ik",
                    avatar: "https://sun9-67.userapi.com/impg/Ub4on9zYwOSIw1Zg5kFL1zJblJT63Zo2LvONHQ/IzEBM2mazDU.jpg?size=1079x1920&quality=95&sign=81cfb7ae074c3b5c6f97a0aa543f31fc&type=album"
                },
                {
                    id: v1(),
                    name: "Vadik",
                    avatar: "https://sun9-29.userapi.com/impg/r71BCbestUY6hJOTn0dCCZPPX-LtLNbsl1oQdQ/5UTuIhxf17A.jpg?size=960x1280&quality=95&sign=2e8925bb871433fcc404fd08cde7dafb&type=album"
                },
                {
                    id: v1(),
                    name: "Kostya",
                    avatar: "https://sun9-39.userapi.com/impg/ri09EpPL2Pa16JQ_e6buDzbplwpXxEWeHKUCrA/qMDtwHgSndw.jpg?size=1620x2160&quality=95&sign=3ba2815a5aa0ba66ca4bc94ee321c7fc&type=album"
                }]
        },
    },
    callSubscriber(state: StateType) {
        console.log("State was changed")
    },
    getState() {
        return this._state
    },
    addPost()  {
        const newPost: PostsType = {id: v1(), message: this._state.profilePage.newPostText, likesCount: 0};
        this._state.profilePage.posts.unshift(newPost);
        this._state.profilePage.newPostText = ""
        this.callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this.callSubscriber(this._state)
    },
    updateNewMessageText(newMessage: string)  {
        this._state.dialogsPage.newMessageText = newMessage
        this.callSubscriber(this._state)
    },
    addMessage() {
        const newMessage: MessagesType = {id: v1(), message: this._state.dialogsPage.newMessageText};
        this._state.dialogsPage.messages.unshift(newMessage);
        this._state.dialogsPage.newMessageText = ""
        this.callSubscriber(this._state)
    },
    subscribe(observer) {
        this.callSubscriber = observer
    }
}
// @ts-ignore
window.state = state

