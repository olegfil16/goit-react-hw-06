import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const contacSlice = createSlice({
  name: "contacts",

  initialState: {
    items: [],
  },

  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

export const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contacSlice.reducer
);

export const { addContact, deleteContact } = contacSlice.actions;
export default contacSlice.reducer;
