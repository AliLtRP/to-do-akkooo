import { ITodoAction, ITodoState, ITodo } from "../../types";

const initialState: ITodoState = {
    todo: [],
    progress: [],
    done: []
};

export const todoReducer = (state = initialState, action: ITodoAction): ITodoState => {
    switch (action.type) {
        case "SET_TODO":
            if (Array.isArray(action.payload)) {
                return {
                    ...state,
                    todo: action.payload
                };
            } else {
                return state;
            }

        case "ADD_TASK":
            if (!Array.isArray(action.payload)) {
                return {
                    ...state,
                    todo: [...state.todo, action.payload as ITodo]
                };
            } else {
                return state;
            }

        case "PROGRESS_TASK":
            if (!Array.isArray(action.payload)) {
                return {
                    ...state,
                    todo: state.todo.filter(task => task.title !== (action.payload as ITodo).title),
                    progress: [...state.progress, action.payload as ITodo]
                };
            } else {
                return state;
            }

        case "COMPLETE_TASK":
            if (!Array.isArray(action.payload)) {
                return {
                    ...state,
                    progress: state.progress.filter(task => task.title !== (action.payload as ITodo).title),
                    done: [...state.done, action.payload as ITodo]
                };
            } else {
                return state;
            }

        default:
            return state;
    }
};