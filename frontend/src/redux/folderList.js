import { createSlice } from "@reduxjs/toolkit";

const foldersSlice = createSlice({
    name: 'folders',
    initialState: [],
    reducers: {
        setFolder: (state, action) => {
            return action.payload;
        },
        addFolder: (state, action) => {
            const filteredState = state.filter(s => !s.draft);
            filteredState.unshift(action.payload);
            return filteredState;
        },

        removeFolder: (state, action) => {
            return state.filter(folder => folder.id !== action.payload.id);
        },
        updateFolder: (state, action) => {
            const index = state.findIndex(folder => folder.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
});

export const foldersAction = foldersSlice.actions;
export default foldersSlice.reducer;
