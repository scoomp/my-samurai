import {DialogsPageType, UnionType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action:UnionType) : DialogsPageType => {
        switch (action.type) {
            case "NEW-MESSAGE": {
                let newMessage = {id: 4 , message: state.newMessageText}
                state.messages.push(newMessage)
                state.newMessageText = ''
                return state
            }
            case "UPDATE-MESSAGE": {
                   state.newMessageText = action.payload.updateMessageText
                   return state

            }
            default: return state
        }
}


export type NewMessageACType = ReturnType<typeof newMessageAC>
export const newMessageAC = () => {
    return {
        type: 'NEW-MESSAGE',
    } as const
}

export type UpdateMessageACType = ReturnType<typeof updateMessageAC>
export const updateMessageAC = (updateMessageText: string) => {
    return {
        type: 'UPDATE-MESSAGE',
        payload: {
            updateMessageText
        }
    } as const
}