import { createSlice } from "@reduxjs/toolkit";


const foldersSlice = createSlice({
    name: 'folders',
    initialState: [
        {name:"lksajdf", notesList: []}
    ],
    reducers: {
        setFolder: (state, action) => {
            if(action.payload)
            state = action.payload
            else state = []
        },
        addFolder: (state, action) => {
            state.unshift(action.payload);
        },
        removeFolder: (state, action) => {
            return state.filter(folder => folder.id !== action.folder.id);
        },
        updateFolder: (state, action) => {
            const index = state.findIndex(folder => folder.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
})

export const foldersAction = foldersSlice.actions;
export default foldersSlice.reducer