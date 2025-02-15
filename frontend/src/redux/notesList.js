import { createSlice } from "@reduxjs/toolkit";

const notesListInitialState = [
    {
        title: "lorem ipsum ipa de si",
        content: "Lorem ipsum dolor sit amet  pariatur et rem beatae fugit iste accusamus, velit, reprehenderit provident.",
        createdDate: "May 21, 2020.",
        colorType: 2,
        favorite: true,
        refUrl: ["google.com", "http/askdsflk.lavru"],
        draft: false
    },
 
    {
        title: "lorem ipsum ipa de si",
        content: "Lorem ipsum dolor sit amet  pariatur et rem beatae fugit iste accusamus, velit, reprehenderit provident.",
        createdDate: "May 21, 2020.",
        colorType: 3,
        favorite: false,
        refUrl: ["google.com", "http/askdsflk.lavru"],
        draft: false
    },
 
    {
        title: "lorem ipsum ipa de si",
        content: "Lorem ipsum dolor sit amet  pariatur et rem beatae fugit iste accusamus, velit, reprehenderit provident.",
        createdDate: "May 21, 2020.",
        colorType: 1,
        favorite: false,
        refUrl: ["google.com", "http/askdsflk.lavru"],
        draft: false
    },
 
    {
        title: "lorem ipsum ipa de si",
        content: "Lorem ipsum dolor sit amet  pariatur et rem beatae fugit iste accusamus, velit, reprehenderit provident.",
        createdDate: "May 21, 2020.",
        colorType: 4,
        favorite: false,
        refUrl: ["google.com", "http/askdsflk.lavru"],
        draft: false
    },
 
  


]

const notesList = createSlice({
    name: 'notes',
    initialState: notesListInitialState,
    reducers: {
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