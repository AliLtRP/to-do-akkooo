import { Theme } from "@mui/material";


export interface IThemeAction {
    type: string,
    payload: Theme
}

export interface ITodoAction {
    type: string,
    payload: ITodo | ITodo[];
}

export interface ITodo {
    title: string,
    description: string
}

export interface ITodoState {
    todo: ITodo[];
    progress: ITodo[];
    done: ITodo[];
}
