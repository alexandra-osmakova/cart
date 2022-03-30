import {
    addNewCartItem,
    deleteCartItem,
    getCartData,
    updateCartProductQuantity,
} from "../../api";
import { IBaseCartData, ICartData } from "../../interface";
import {
    cartDataLoadedAction,
    cartDataLoadErrorAction,
    cartProductAddAction,
    cartProductDecreaseAction,
    cartProductDeleteAction,
    cartProductIncreaseAction,
    commonDialogToggleAction,
} from "../reducers";
import { AppThunk } from "../store";

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
            dispatch(commonDialogToggleAction({ dialogSettings: null }));
            return;
        }
        dispatch(cartProductAddAction({ ...data, id: response.id }));
        dispatch(commonDialogToggleAction({ dialogSettings: null }));
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
