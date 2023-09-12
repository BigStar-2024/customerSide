import { configureStore } from "@reduxjs/toolkit";
// This is how you import a reducer, based on the prior export.
import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: {
        // You are free to call the LHS what you like, but it must have a reducer on the RHS.
        auth: authReducer,
        cartCounter: cartReducer,

    },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();