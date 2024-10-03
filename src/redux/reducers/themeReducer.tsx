import { Theme } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { IThemeAction } from "../../types";

const initState: { theme: Theme } = {
    theme: createTheme({
        palette: {
            mode: 'light',
        },
    }),
};

export const themeReducer = (state = initState, action: IThemeAction) => {
    switch (action.type) {
        case "SET_THEME":
            return {
                ...state,
                theme: action.payload,
            };
        case "TOGGLE_DERICTION":
            return {
                ...state,
                theme: createTheme({
                    direction: state.theme.direction === 'ltr' ? 'rtl' : 'ltr'
                })
            }
        default:
            return state;
    }
};