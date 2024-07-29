import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import { authReducer } from "../slices/authSlice";
import { imageReducer } from "../slices/imageSlice";
import { loginReducer } from "../slices/loginSlice";

const persistConfig = {
  key: 'root',
  storage
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedImageReducer = persistReducer(persistConfig, imageReducer);
const persistedLoginReducer = persistReducer(persistConfig, loginReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    image: persistedImageReducer,
    login: persistedLoginReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

export const persistor = persistStore(store);