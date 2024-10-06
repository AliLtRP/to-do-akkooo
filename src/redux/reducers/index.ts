import { combineReducers } from "redux";
import { themeReducer } from "./themeReducer";
import { drawerReducer } from "./drawerReducer";
import { todoReducer } from "./todoReducer";
import { formReducer } from "./formReducer";


export const reducers = combineReducers({
    theme: themeReducer,
    drawerFlag: drawerReducer,
    todo: todoReducer,
    form: formReducer
})