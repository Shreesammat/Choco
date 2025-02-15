import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Note {
    title: string;
    content: string;
    colour: string;
    isImportant: boolean;
    refUrls?: string[];
}

const initialState: Note = {
    title: "",
    content: "",
    colour: "",
    isImportant: false,
    refUrls: [],
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setNote: (state, action: PayloadAction<Note>) => {
        return { ...state, ...action.payload };
    },
    setNoteTitle: (state, action: PayloadAction<string>) => {
        state.title = action.payload;
    },
    setNoteContent: (state, action: PayloadAction<string>) => {
        state.content = action.payload;
    },
    setNoteColour: (state, action: PayloadAction<string>) => {
        state.colour = action.payload;
    },
    setNoteIsImportant: (state, action: PayloadAction<boolean>) => {
        state.isImportant = action.payload;
    },
    setNoteRefUrl: (state, action: PayloadAction<string>) => {
        if(!state.refUrls) state.refUrls = [];
        state.refUrls?.push(action.payload);
    },
    resetNoteState: () => initialState,
  },
});

export const { 
    setNote, 
    setNoteTitle, 
    setNoteContent, 
    setNoteColour, 
    setNoteIsImportant, 
    setNoteRefUrl, 
    resetNoteState 
} = noteSlice.actions;

export default noteSlice.reducer;
