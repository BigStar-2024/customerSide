interface InitialState {
    foodID: string;
    foodName: string;
    categoryName: string;
    price: string;
    addedNumber: number;
}

interface CartItem {
    cartItems: InitialState[];
}

const UpdateCounterAction: string = "CartCounter";

export default CartItem;
export type { InitialState };
export { UpdateCounterAction };