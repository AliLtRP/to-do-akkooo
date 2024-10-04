const initialState = {
    flag: false
};

export const drawerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_FLAG':
            return {
                ...state,
                flag: action.payload
            };
        case 'TOGGLE_FLAG':
            return {
                ...state,
                flag: !state.flag
            };
        default:
            return state;
    }
};