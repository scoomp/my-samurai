import {UnionType, UsersPageType} from "./redux-store";


const initialState: UsersPageType = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a Boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Sveta',
            status: 'I am a Boss',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Andrew',
            status: 'I am a Boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ],

}

export const userReducer = (state: UsersPageType = initialState, action: UnionType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {...state, users:state.users.map(el=>el.id===action.userID ?{...el,followed:true}:el)}
        }
        case 'UN-FOLLOW': {
            return {...state, users:state.users.map(el=>el.id===action.userID ?{...el,followed:false}:el)}
        }

        default:
            return state
    }
}


export type FollowACType = ReturnType<typeof followAC>
export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW', userID
    }
}

export type UnFollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userID: number) => {
    return {
        type: 'UN-FOLLOW', userID
    }
}