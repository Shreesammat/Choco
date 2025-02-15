import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Note {
    title: string;
    content: string;
    colour: string;
    isFavourite: boolean;
    refUrls?: string[];
}

export type User = {
    fullName?: string;
    username: string;
    email: string;
    notes: Note[];
};

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload ?? null;
        },
        addNote: (state, action: PayloadAction<Note>) => {
            if (state.user && Array.isArray(state.user.notes)) {
                state.user.notes.push(action.payload);
            }
        },
        resetUserState: () => initialState,
    },
});

export const { setUser, addNote, resetUserState } = userSlice.actions;
export default userSlice.reducer;
