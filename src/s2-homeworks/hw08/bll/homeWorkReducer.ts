import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const copyState = [...state];
            const direction = action.payload === 'up' ? 1 : -1;
            return copyState.sort((a, b) => (
                a.name > b.name ? direction : -direction
            ))
        }
        case 'check': {

            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}
