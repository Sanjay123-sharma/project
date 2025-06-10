import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SliceReducer from './Slice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  version:2,
};
const userReducer=combineReducers({
    product:SliceReducer
})
const persistedReducer = persistReducer(persistConfig, userReducer);

export const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),

})

export const MyPersistor = persistStore(store);