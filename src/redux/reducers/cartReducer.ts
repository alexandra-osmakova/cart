import { ICartData } from "../../interface";
import {
    CART_DATA_LOADED,
    CART_DATA_LOAD_ERROR,
    CART_PRODUCT_ADD,
    CART_PRODUCT_DECREASE,
    CART_PRODUCT_DELETE,
    CART_PRODUCT_INCREASE,
} from "../action-types";
import {
    ICartDataLoadedAction,
    ICartProductIncreaseAction,
    ICartProductDecreaseAction,
    ICartProductDeleteAction,
    ICartProductAddAction,
    ICartDataLoadErrorAction,
} from "../interface";

type CartActions =
    | ICartDataLoadedAction
    | ICartProductIncreaseAction
    | ICartProductDecreaseAction
    | ICartProductDeleteAction
    | ICartProductAddAction
    | ICartDataLoadErrorAction;

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

const cartReducer = (state = initialState, action: CartActions) => {
    switch (action.type) {
        case CART_DATA_LOADED: {
            const { data } = action.payload;
            let total = 0;
            const currentDataMap = (data as ICartData[]).reduce((acc, el) => {
                acc.set(el.id, el);
                total += el.price * el.quantity;
                return acc;
            }, new Map() as Map<number, ICartData>);

            return {
                ...state,
                cartData: currentDataMap,
                loaded: true,
                cartTotal: total,
            };
        }
        case CART_DATA_LOAD_ERROR: {
            return {
                ...state,
                loaded: true,
            };
        }
        case CART_PRODUCT_INCREASE: {
            const { product } = action.payload;
            const { cartData, cartTotal } = state;

            cartData.set(product.id, {
                ...product,
                quantity: product.quantity + 1,
            });
            const currentTotal = cartTotal + product.price;

            return {
                ...state,
                cartData: new Map(cartData.entries()),
                loaded: true,
                cartTotal: currentTotal,
            };
        }
        case CART_PRODUCT_DECREASE: {
            const { product } = action.payload;
            const { cartData, cartTotal } = state;

            cartData.set(product.id, {
                ...product,
                quantity: product.quantity > 1 ? product.quantity - 1 : 0,
            });
            const currentTotal = cartTotal - product.price;

            return {
                ...state,
                cartData: new Map(cartData.entries()),
                loaded: true,
                cartTotal: currentTotal,
            };
        }
        case CART_PRODUCT_DELETE: {
            const { productId } = action.payload;
            const { cartData, cartTotal } = state;

            const currentProduct = cartData.get(productId);
            const currentTotal = currentProduct
                ? cartTotal - currentProduct.price * currentProduct.quantity
                : cartTotal;

            cartData.delete(productId);

            return {
                ...state,
                cartData: new Map(cartData.entries()),
                loaded: true,
                cartTotal: currentTotal,
            };
        }
        case CART_PRODUCT_ADD: {
            const { product } = action.payload;
            const { cartData, cartTotal } = state;

            const currentCartList: ICartData[] = Array.from(cartData.values());
            currentCartList.unshift(product);
            const currentTotal = cartTotal + product.price * product.quantity;
            const currentCartMap: Map<number, ICartData> =
                currentCartList.reduce((acc, el) => {
                    acc.set(el.id, el);
                    return acc;
                }, new Map());

            return {
                ...state,
                cartData: currentCartMap,
                loaded: true,
                cartTotal: currentTotal,
            };
        }
        default:
            return state;
    }
};

export default cartReducer;
