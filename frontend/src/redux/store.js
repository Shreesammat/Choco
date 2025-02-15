import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import notesListReducers from "./notesList";
import themeSlice from "./themeSlice";
import userSlice from "./userSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  notesList: notesListReducers,
  theme: themeSlice,
  user: userSlice,
});

const persistConfig = {
  key: "root", 
  storage,     
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);
