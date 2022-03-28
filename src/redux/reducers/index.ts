import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import commonDialogReducer from "./commonDialogReducer";

export default combineReducers({
    commonDialog: commonDialogReducer,
    cart: cartReducer,
});
