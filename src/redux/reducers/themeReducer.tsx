import { createTheme } from "@mui/material";
import { IThemeAction } from "../../types";

const initialState = {
    theme: createTheme({
        palette: {
            mode: 'light',
            background: {
                default: '#F9F9FE',
                paper: '#EEEEF9',
            },
        },
    }),
};

export const themeReducer = (state = initialState, action: IThemeAction) => {
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
                    ...state.theme,
                    direction: state.theme.direction === 'ltr' ? 'rtl' : 'ltr',
                }),
            };
        case "TOGGLE_THEME":
            const isLightMode = state.theme.palette.mode === 'light';
            return {
                ...state,
                theme: createTheme({
                    palette: {
                        mode: isLightMode ? 'dark' : 'light',
                        background: {
                            default: isLightMode ? '#000000' : '#F9F9FE',
                            paper: isLightMode ? '#333333' : '#EEEEF9',
                        },
                    },
                    typography: {
                        fontFamily: '"Exo 2", "Roboto", sans-serif',
                    },
                }),
            };
        default:
            return state;
    }
};