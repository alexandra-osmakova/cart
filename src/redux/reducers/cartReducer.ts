import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartData } from "../../interface";

interface ICartState {
    loaded: boolean;
    cartData: Map<number, ICartData>;
    cartTotal: number;
}

const initialState: ICartState = {
    loaded: false,
    cartData: new Map(),
    cartTotal: 0,
};

const cartSlice = createSlice({
    name: "cartReducer",
    initialState,
    reducers: {
        cartDataLoadedAction(
            state: ICartState,
            action: PayloadAction<ICartData[]>
        ) {
            const data = action.payload;
            let total = 0;
            const currentDataMap = (data as ICartData[]).reduce((acc, el) => {
                acc.set(el.id, el);
                total += el.price * el.quantity;
                return acc;
            }, new Map() as Map<number, ICartData>);
            state.cartData = currentDataMap;
            state.loaded = true;
            state.cartTotal = total;
        },
        cartDataLoadErrorAction(state: ICartState) {
            state.loaded = true;
        },
        cartProductIncreaseAction(
            state: ICartState,
            action: PayloadAction<ICartData>
        ) {
            const product = action.payload;
            const { cartData, cartTotal } = state;

            cartData.set(product.id, {
                ...product,
                quantity: product.quantity + 1,
            });
            const currentTotal = cartTotal + product.price;

            state.cartData = new Map(cartData.entries());
            state.loaded = true;
            state.cartTotal = currentTotal;
        },
        cartProductDecreaseAction(
            state: ICartState,
            action: PayloadAction<ICartData>
        ) {
            const product = action.payload;
            const { cartData, cartTotal } = state;

            cartData.set(product.id, {
                ...product,
                quantity: product.quantity > 1 ? product.quantity - 1 : 0,
            });
            const currentTotal = cartTotal - product.price;

            state.cartData = new Map(cartData.entries());
            state.loaded = true;
            state.cartTotal = currentTotal;
        },
        cartProductDeleteAction(
            state: ICartState,
            action: PayloadAction<number>
        ) {
            const productId = action.payload;
            const { cartData, cartTotal } = state;

            const currentProduct = cartData.get(productId);
            const currentTotal = currentProduct
                ? cartTotal - currentProduct.price * currentProduct.quantity
                : cartTotal;

            cartData.delete(productId);

            state.cartData = new Map(cartData.entries());
            state.loaded = true;
            state.cartTotal = currentTotal;
        },
        cartProductAddAction(
            state: ICartState,
            action: PayloadAction<ICartData>
        ) {
            const product = action.payload;
            const { cartData, cartTotal } = state;

            const currentCartList: ICartData[] = Array.from(cartData.values());
            currentCartList.unshift(product);
            const currentTotal = cartTotal + product.price * product.quantity;
            const currentCartMap: Map<number, ICartData> =
                currentCartList.reduce((acc, el) => {
                    acc.set(el.id, el);
                    return acc;
                }, new Map());

            state.cartData = currentCartMap;
            state.loaded = true;
            state.cartTotal = currentTotal;
        },
    },
});

export const {
    cartDataLoadedAction,
    cartDataLoadErrorAction,
    cartProductIncreaseAction,
    cartProductDecreaseAction,
    cartProductDeleteAction,
    cartProductAddAction,
} = cartSlice.actions;

export default cartSlice.reducer;
