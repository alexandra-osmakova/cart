import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import commonDialogReducer from "./commonDialogReducer";
import { enableMapSet } from "immer";

enableMapSet();

export * from "./commonDialogReducer";
export * from "./cartReducer";

export default combineReducers({
    commonDialog: commonDialogReducer,
    cart: cartReducer,
});
