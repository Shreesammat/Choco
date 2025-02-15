import { createSlice } from "@reduxjs/toolkit";

const FoldersInitialState = [
    {
        name: "coding",
        notesArr: [
            "id1", "id2"
        ],
        
    }
]

const foldersSlice = createSlice({
    name: 'folders',
    initialState: FoldersInitialState,
    reducers: {
        addFolder: (state, action) => {
            state.unshift(action.payload);
        },
        removeFolder: (state, action) => {
            return state.filter(note => folder.id !== action.folder.id);
        },
        updateFolder: (state, action) => {
            const index = state.findIndex(note => folder.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
})

export const foldersAction = foldersSlice.actions;
export default foldersSlice.reducer