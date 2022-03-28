import { ICartAddDialog } from "../../interface";
import {
    COMMON_DIALOG_TOGGLE,
    COMMON_DIALOG_VALIDATION_TOGGLE,
} from "../action-types";
import {
    ICommonDialogToggleAction,
    ICommonDialogValidationToggleAction,
} from "../interface";

const commonDialogToggleAction = (
    value?: ICartAddDialog
): ICommonDialogToggleAction => ({
    type: COMMON_DIALOG_TOGGLE,
    payload: {
        dialogSettings: value,
    },
});

const commonDialogValidationToggleAction = (
    value: boolean
): ICommonDialogValidationToggleAction => ({
    type: COMMON_DIALOG_VALIDATION_TOGGLE,
    payload: {
        valid: value,
    },
});

export { commonDialogToggleAction, commonDialogValidationToggleAction };
