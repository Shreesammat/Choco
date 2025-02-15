import { configureStore } from "@reduxjs/toolkit"
import notesListReducers from "./notesList"
export const store = configureStore({
    reducer: { notesList: notesListReducers },
})
