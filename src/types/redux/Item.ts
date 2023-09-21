interface InitialState {
    foodID: string;
    foodName: string;
    categoryName: string;
    price: string;
    addedNumber: number;
    foodImg: string;
}

interface CartItem {
    cartItems: InitialState[];
}

// interface SearchItem {
//     searchedItem: InitialState[]
// }

const UpdateCounterAction: string = "CartCounter";

export default CartItem;
export type { InitialState };
export { UpdateCounterAction };