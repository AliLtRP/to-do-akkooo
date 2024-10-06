import { ITodoAction, ITodoState, ITodo, IPayload } from "../../types";

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
                    todo: action.payload,
                    progress: [],
                    done: []
                };
            } else {
                return state;
            }
        case "ADD_TASK":
            return {
                ...state,
                todo: [...state.todo, action.payload as ITodo],
                progress: state.progress.filter(task => task.title !== (action.payload as ITodo).title),
                done: state.done.filter(task => task.title !== (action.payload as ITodo).title)
            };

        case "PROGRESS_TASK":
            return {
                ...state,
                todo: state.todo.filter(task => task.title !== (action.payload as ITodo).title),
                progress: [...state.progress, action.payload as ITodo],
                done: state.done.filter(task => task.title !== (action.payload as ITodo).title)
            };

        case "COMPLETE_TASK":
            return {
                ...state,
                todo: state.todo.filter(task => task.title !== (action.payload as ITodo).title),
                progress: state.progress.filter(task => task.title !== (action.payload as ITodo).title),
                done: [...state.done, action.payload as ITodo]
            };
        case "DELETE_TASK": {
            const { type, todo } = action.payload as IPayload;

            switch (type) {
                case "todo":
                    return {
                        ...state,
                        todo: state.todo.filter((v) => v.title !== todo.title)
                    };
                case "progress":
                    return {
                        ...state,
                        progress: state.progress.filter((v) => v.title !== todo.title)
                    };
                case "done":
                    return {
                        ...state,
                        done: state.done.filter((v) => v.title !== todo.title)
                    };
                default:
                    return state;
            }
        }
        default:
            return state;
    }
};