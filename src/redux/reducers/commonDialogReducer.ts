import { ICartAddDialog } from "../../interface";
import {
    COMMON_DIALOG_TOGGLE,
    COMMON_DIALOG_VALIDATION_TOGGLE,
} from "../action-types";
import {
    ICommonDialogToggleAction,
    ICommonDialogValidationToggleAction,
} from "../interface";

type CommonDialogActions =
    | ICommonDialogToggleAction
    | ICommonDialogValidationToggleAction;
interface ICommonDialogState extends ICartAddDialog {
    open: boolean;
    isValid: boolean;
}

const STATIC_INITIAL_STATE: ICartAddDialog = {
    title: "",
    content: undefined,
    successBtnLabel: "",
    successBtnType: undefined,
    successOnClick: undefined,
    cancelBtnLabel: "",
    formId: undefined,
};

const initialState: ICommonDialogState = {
    open: false,
    isValid: false,
    ...STATIC_INITIAL_STATE,
};

const commonDialogReducer = (
    state = initialState,
    action: CommonDialogActions
) => {
    switch (action.type) {
        case COMMON_DIALOG_TOGGLE: {
            const { dialogSettings } = action.payload;
            const { open, isValid } = state;
            const currentSettings = dialogSettings || STATIC_INITIAL_STATE;

            return {
                ...state,
                open: !open,
                isValid: dialogSettings ? isValid : false,
                ...currentSettings,
            };
        }
        case COMMON_DIALOG_VALIDATION_TOGGLE: {
            const { valid } = action.payload;

            return {
                ...state,
                isValid: valid,
            };
        }
        default:
            return state;
    }
};

export default commonDialogReducer;
