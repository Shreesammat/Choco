import { createSlice } from "@reduxjs/toolkit";

const notesListInitialState = []

const notesList = createSlice({
    name: 'notes',
    initialState: notesListInitialState,
    reducers: {
        setNote: (state, action) => {
            if(action.payload)
            state = action.payload
            else state = []
        },
        addNote: (state, action) => {
            state.unshift(action.payload);
        },
        removeNote: (state, action) => {
            return state.filter(note => note.id !== action.payload.id);
        },
        updateNote: (state, action) => {
            const index = state.findIndex(note => note.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
})

export const notesListAction = notesList.actions;
export default notesList.reducer