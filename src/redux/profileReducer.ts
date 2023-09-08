 import {ProfilePageType, UnionType} from "./redux-store";


const initialState : ProfilePageType =  {
    posts:[
        {id: 1,message: 'Hello, my name is Ilya', likeCount: 15},
        {id: 2,message: 'Im busy', likeCount: 20}
    ],
        newPostText: 'it-kamasutra',
}

export const profileReducer = (state: ProfilePageType = initialState, action: UnionType): ProfilePageType => {
       switch (action.type) {
            case "ADD-POST": {
                    let newPost =  {id: 3,message: state.newPostText, likeCount: 0}
                let stateCopy = {...state}
                stateCopy .posts = {...state.posts}
                stateCopy.posts.push(newPost)
                stateCopy.newPostText = ''
                    return stateCopy
            }
            case "UPDATE-POST": {
                let stateCopy: ProfilePageType = {...state}
                stateCopy.newPostText = action.payload.newText
                return stateCopy
            }


            default:return state
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