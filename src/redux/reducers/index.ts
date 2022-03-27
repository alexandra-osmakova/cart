import { combineReducers } from 'redux'
import commonDialogReducer from "./commonDialogReducer";

export default combineReducers({
    commonDialog: commonDialogReducer,
});
