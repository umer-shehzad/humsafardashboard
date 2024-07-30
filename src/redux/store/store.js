import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import { authReducer } from "../slices/authSlice";
import { imageReducer } from "../slices/imageSlice";
import { loginReducer } from "../slices/loginSlice";
import { forgotPasswordReducer } from "../slices/forgotSlice";
import { OwnerDriversReducer } from "../slices/ownerDriversSlice";

const persistConfig = {
  key: 'root',
  storage
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedImageReducer = persistReducer(persistConfig, imageReducer);
const persistedLoginReducer = persistReducer(persistConfig, loginReducer);
const persistedForgotPasswordReducer = persistReducer(persistConfig, forgotPasswordReducer);
const persistedOwnerDriversReducer = persistReducer(persistConfig, OwnerDriversReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    image: persistedImageReducer,
    login: persistedLoginReducer,
    forgotPassword: persistedForgotPasswordReducer,
    ownerDrivers: persistedOwnerDriversReducer,

  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

export const persistor = persistStore(store);