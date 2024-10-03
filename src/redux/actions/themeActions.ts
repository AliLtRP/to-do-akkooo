import { Theme } from "@mui/material";
import { IThemeAction } from "../../types";

export const setTheme = (theme: Theme): IThemeAction => {
    return {
        type: "SET_THEME",
        payload: theme
    };
}