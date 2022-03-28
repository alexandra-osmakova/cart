import { Action } from "@reduxjs/toolkit";
import { ICartData } from "../../interface";
import {
    CART_DATA_LOADED,
    CART_DATA_LOAD_ERROR,
    CART_PRODUCT_ADD,
    CART_PRODUCT_DECREASE,
    CART_PRODUCT_DELETE,
    CART_PRODUCT_INCREASE,
} from "../action-types";

export interface ICartDataLoadedAction extends Action {
    type: typeof CART_DATA_LOADED;
    payload: { data: ICartData[] };
}

export interface ICartProductIncreaseAction extends Action {
    type: typeof CART_PRODUCT_INCREASE;
    payload: { product: ICartData };
}

export interface ICartProductDecreaseAction extends Action {
    type: typeof CART_PRODUCT_DECREASE;
    payload: { product: ICartData };
}

export interface ICartProductDeleteAction extends Action {
    type: typeof CART_PRODUCT_DELETE;
    payload: { productId: number };
}

export interface ICartProductAddAction extends Action {
    type: typeof CART_PRODUCT_ADD;
    payload: { product: ICartData };
}

export interface ICartDataLoadErrorAction extends Action {
    type: typeof CART_DATA_LOAD_ERROR;
}
