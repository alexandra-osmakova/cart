import { combineReducers } from "redux";
import cartReducer from "./cart-reducer/cartReducer";
import commonDialogReducer from "./common-dialog-reducer/commonDialogReducer";
import { enableMapSet } from "immer";

enableMapSet();

export * from "./common-dialog-reducer/commonDialogReducer";
export * from "./cart-reducer/cartReducer";

export default combineReducers({
    commonDialog: commonDialogReducer,
    cart: cartReducer,
});
