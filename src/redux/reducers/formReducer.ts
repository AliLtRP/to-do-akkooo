const initialState = {
    flag: false
};

export const formReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_FORM_FLAG':
            return {
                ...state,
                flag: action.payload
            };
        case 'TOGGLE_FORM_FLAG':
            return {
                ...state,
                flag: !state.flag
            };
        default:
            return state;
    }
};