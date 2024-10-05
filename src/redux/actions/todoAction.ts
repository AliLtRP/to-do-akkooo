import { ITodoAction, ITodo } from "../../types";

export const setTodo = (todo: ITodo[]): ITodoAction => {
    return {
        type: "SET_TODO",
        payload: todo
    };
};

export const addTask = (task: ITodo): ITodoAction => {
    return {
        type: "ADD_TASK",
        payload: task
    };
};

export const progressTask = (task: ITodo): ITodoAction => {
    return {
        type: "PROGRESS_TASK",
        payload: task
    };
};

export const completeTask = (task: ITodo): ITodoAction => {
    return {
        type: "COMPLETE_TASK",
        payload: task
    };
};