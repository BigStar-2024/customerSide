// // import CartItem, { UpdateCounterAction } from "../../types/redux/CartCounter";
// import { UpdateCounterAction, SearchItem } from "../../types/redux/Item";
// import { InitialState } from "../../types/redux/Item";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { foodDatas } from "../../helpers/foodData";




// // {foodID: '', foodName: '', categoryName: '', price: '', addedNumber: 0},

// export const dataSlice = createSlice({
//     name: UpdateCounterAction,
//     initialState: initialState,
//     reducers: {
//         addToSearch: (state, action: PayloadAction<string>) => {
//             // Redux Toolkit allows us to write "mutating" logic in reducers. It
//             // doesn't actually mutate the state because it uses the Immer library,
//             // which detects changes to a "draft state" and produces a brand new
//             // immutable state based off those changes

//             const { cartItems } = state;
//             const { foodID, addedNumber } = action.payload;

//             const existingItem = cartItems.find((cartItem) => cartItem.foodID === foodID);
//             if (existingItem) {
//                 existingItem.addedNumber = addedNumber;
//             } else {
//                 cartItems.push({ ...action.payload });
//             }
//             // const itemInCart = state.cartItems.find((item) => item.foodID === action.payload.foodID)
//             // itemInCart ? itemInCart.addedNumber++ : state.cartItems.push({...action.payload})
//         },
//         removeFromCart: (state, action: PayloadAction<InitialState>): any => {
//             const newCart = state.cartItems.filter((item) => item.foodID !== action.payload.foodID);
//             state.cartItems = newCart;
//         },
//     },
// });

// // Action creators are generated for each case reducer function
// export const { addToSearch, removeFromCart } =
//     dataSlice.actions;
// // You must export the reducer as follows for it to be able to be read by the store.
// export default dataSlice.reducer;