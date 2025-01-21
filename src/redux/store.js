import { configureStore } from "@reduxjs/toolkit";
import { persistedContactsReducer } from "./contactsSlice";
import filtersRedux from "./filtersSlice";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersRedux,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
