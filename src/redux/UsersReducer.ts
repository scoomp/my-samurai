import {ProfilePageType, UnionType} from "./redux-store";


const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hello, my name is Ilya', likeCount: 15},
        {id: 2, message: 'Im busy', likeCount: 20}
    ],
    newPostText: 'it-kamasutra',
}

export const userReducer = (state: ProfilePageType = initialState, action: UnionType): ProfilePageType => {
    switch (action.type) {
        default:
            return state
    }
}


export type AddPostACType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export type UpdatePostACType = ReturnType<typeof updatePostAC>
export const updatePostAC = (newText: string) => {
    return {
        type: 'UPDATE-POST',
        payload: {
            newText
        }
    } as const
}