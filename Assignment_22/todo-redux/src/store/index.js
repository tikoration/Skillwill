import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from './todo/todo.slice'
import languageReducer from './language/language.slice'
import themeReducer from "./theme/theme.slice"


const rootReducer = combineReducers({
    todo: todoReducer,
    language: languageReducer,
    theme: themeReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})