import { combineReducers } from "redux";
import { themeReducer } from "./themeReducer";
import { drawerReducer } from "./drawerReducer";


export const reducers = combineReducers({
    theme: themeReducer,
    drawerFlag: drawerReducer
})