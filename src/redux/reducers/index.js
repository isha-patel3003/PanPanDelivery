import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./AuthReducer";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { thunk } from "redux-thunk";
import { UserLocation } from "./UserReducer";


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  auth: authReducer,
  userlocation: UserLocation
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serialization checks for AsyncStorage compatibility
    })
});


export const persistor = persistStore(store);