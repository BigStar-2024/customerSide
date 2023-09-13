// import CartItem, { UpdateCounterAction } from "../../types/redux/CartCounter";
import CartItem, { UpdateCounterAction } from "../../types/redux/CartCounter";
import { InitialState } from "../../types/redux/CartCounter";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartItem = {
    cartItems: [],
};

// {foodID: '', foodName: '', categoryName: '', price: '', addedNumber: 0},

export const cartSlice = createSlice({
    name: UpdateCounterAction,
    initialState: initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<InitialState>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            const { cartItems } = state;
            const { foodID, addedNumber } = action.payload;

            const existingItem = cartItems.find((cartItem) => cartItem.foodID === foodID);
            if (existingItem) {
                existingItem.addedNumber = addedNumber;
            } else {
                cartItems.push({ ...action.payload });
            }
            // const itemInCart = state.cartItems.find((item) => item.foodID === action.payload.foodID)
            // itemInCart ? itemInCart.addedNumber++ : state.cartItems.push({...action.payload})
        },
        removeFromCart: (state, action: PayloadAction<InitialState>): any => {
            const newCart = state.cartItems.filter((item) => item.foodID !== action.payload.foodID);
            state.cartItems = newCart;
        }
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } =
    cartSlice.actions;
// You must export the reducer as follows for it to be able to be read by the store.
export default cartSlice.reducer;