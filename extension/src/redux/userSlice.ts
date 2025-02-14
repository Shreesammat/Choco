import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Note {
    title: string;
    content: string;
    colour: string;
    isImportant: boolean;
    refUrl?: string;
}

export type User = {
    fullName?: string;
    username: string;
    email: string;
    notes: Note[];
}

const initialState: User = {
    fullName: "",
    username: "",
    email: "",
    notes: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
        Object.assign(state, action.payload);
    },
    addNote: (state, action: PayloadAction<Note>) => {
        state.notes.push(action.payload);
    },
    resetUserState: () => initialState,
  },
});

export const { setUser, addNote, resetUserState } = userSlice.actions;
export default userSlice.reducer;
