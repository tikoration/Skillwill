import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    language: "georgian"
}

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers:{
        toggleLanguage: (state) => {
            state.language = 
            state.language === "georgian" ?
            "english" :
            "georgian"
        }
    }
})

export const {toggleLanguage} = languageSlice.actions
export const languageSelector = (state) => state.language
export default languageSlice.reducer