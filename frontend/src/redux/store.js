import folderReducer from "./folderList"
import { configureStore } from "@reduxjs/toolkit"
import notesListReducers from "./notesList"
import themeSlice from "./themeSlice"
import userSlice from "./userSlice"

export const store =  configureStore ({
    reducer: {
        notesList: notesListReducers,
        theme: themeSlice,
        user: userSlice,
        folder: folderReducer
    }
})

