import {
    addNewCartItem,
    deleteCartItem,
    getCartData,
    updateCartProductQuantity,
} from "../../api";
import { IBaseCartData, ICartData } from "../../interface";
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
    ICartDataLoadErrorAction,
    ICartProductAddAction,
    ICartProductDecreaseAction,
    ICartProductDeleteAction,
    ICartProductIncreaseAction,
} from "../interface";
import { AppThunk } from "../store";
import { commonDialogToggleAction } from "./commonDialogAction";

const cartDataLoadedAction = (value: ICartData[]): ICartDataLoadedAction => ({
    type: CART_DATA_LOADED,
    payload: {
        data: value,
    },
});

const cartDataLoadErrorAction = (): ICartDataLoadErrorAction => ({
    type: CART_DATA_LOAD_ERROR,
});

const cartProductIncreaseAction = (
    value: ICartData
): ICartProductIncreaseAction => ({
    type: CART_PRODUCT_INCREASE,
    payload: {
        product: value,
    },
});

const cartProductDecreaseAction = (
    value: ICartData
): ICartProductDecreaseAction => ({
    type: CART_PRODUCT_DECREASE,
    payload: {
        product: value,
    },
});

const cartProductDeleteAction = (value: number): ICartProductDeleteAction => ({
    type: CART_PRODUCT_DELETE,
    payload: {
        productId: value,
    },
});

const cartProductAddAction = (value: ICartData): ICartProductAddAction => ({
    type: CART_PRODUCT_ADD,
    payload: {
        product: value,
    },
});

const cartProductQuantityUpdateAction =
    (isIncrease: boolean, value: ICartData): AppThunk =>
    async (dispatch) => {
        try {
            await updateCartProductQuantity(value.id);
            dispatch(
                isIncrease
                    ? cartProductIncreaseAction(value)
                    : cartProductDecreaseAction(value)
            );
        } catch (error) {
            alert("request failed!");
            return;
        }
    };

const cartProductDeleteItemAction =
    (id: number): AppThunk =>
    async (dispatch) => {
        try {
            await deleteCartItem(id);
            dispatch(cartProductDeleteAction(id));
        } catch (error) {
            alert("request failed!");
            return;
        }
    };

const cartProductFormSubmitAction =
    (data: IBaseCartData): AppThunk =>
    async (dispatch) => {
        let response;

        try {
            response = await addNewCartItem(data);
        } catch (error) {
            alert("request failed!");
            dispatch(commonDialogToggleAction());
            return;
        }
        dispatch(cartProductAddAction({ ...data, id: response.id }));
        dispatch(commonDialogToggleAction());
    };

const cartProductLoadDataAction = (): AppThunk => async (dispatch) => {
    let response: { data: ICartData[] };
    try {
        response = await getCartData();
    } catch (error) {
        alert("request failed!");
        dispatch(cartDataLoadErrorAction());
        return;
    }
    dispatch(cartDataLoadedAction(response.data));
};

export {
    cartProductFormSubmitAction,
    cartProductDeleteItemAction,
    cartProductQuantityUpdateAction,
    cartProductLoadDataAction,
};
