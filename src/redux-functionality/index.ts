import { configureStore, combineReducers } from "@reduxjs/toolkit";
// This is how you import a reducer, based on the prior export.
import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice";
// import dataReducer from "./slices/dataSlice"
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import siteTypeReducer from "./slices/siteTypeSlice";
import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore, persistReducer } from "redux-persist";


const rootReducer = combineReducers({
    cartCounter: cartReducer,
    auth: authReducer,
    siteType: siteTypeReducer,
    // data: dataReducer,
});

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
