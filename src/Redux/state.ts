import {v1} from "uuid";


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
                {
                    id: v1(),
                    name: "Dimych",
                    avatar: "https://ru.seaicons.com/wp-content/uploads/2015/09/Man-16-icon.png"
                },
                {
                    id: v1(),
                    name: "Sasha",
                    avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png"
                },
                {
                    id: v1(),
                    name: "Diana",
                    avatar: "https://cdn.icon-icons.com/icons2/3708/PNG/512/girl_female_woman_person_people_avatar_icon_230018.png"
                },
                {
                    id: v1(),
                    name: "Julia",
                    avatar: "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png"
                },
                {
                    id: v1(),
                    name: "Jhon",
                    avatar: "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-1-avatar-2754574_120513.png"
                },
                {
                    id: v1(),
                    name: "Alina",
                    avatar: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043231-afro-female-person-woman_113288.png"
                },
            ],
            newMessageText: ""
        },
        sidebar: {
            friends: [
                {
                    id: v1(),
                    name: "Julia",
                    avatar: "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png"
                },
                {
                    id: v1(),
                    name: "Diana",
                    avatar: "https://cdn.icon-icons.com/icons2/3708/PNG/512/girl_female_woman_person_people_avatar_icon_230018.png"
                },
                {
                    id: v1(),
                    name: "Sasha",
                    avatar: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Clipart.png"
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
window.store = store
