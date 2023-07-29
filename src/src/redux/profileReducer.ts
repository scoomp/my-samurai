import {ProfilePageType, UnionType} from "./state";



export const profileReducer = (state: ProfilePageType, action: UnionType): ProfilePageType => {
        switch (action.type) {
            case "ADD-POST": {
                    let newPost =  {id: 3,message: state.newPostText, likeCount: 0}
                    state.posts.unshift(newPost)
                    state.newPostText = ''
                    return state
            }
            case "UPDATE-POST": {
                state.newPostText = action.payload.newText
                return state
            }


            default: return state
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