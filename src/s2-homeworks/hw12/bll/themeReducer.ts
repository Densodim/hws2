const initState = {
    themeId: 1,
}


export const themeReducer = (state:InitialStateType = initState, action: ActionType): InitialStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":{
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id}) as const // fix any


//types
type ActionType = ReturnType<typeof changeThemeId>
type InitialStateType = typeof initState