import { Action } from "@reduxjs/toolkit";
import { ICartAddDialog } from "../../interface";
import {
    COMMON_DIALOG_VALIDATION_TOGGLE,
    COMMON_DIALOG_TOGGLE,
} from "../action-types";

export interface ICommonDialogToggleAction extends Action {
    type: typeof COMMON_DIALOG_TOGGLE;
    payload: { dialogSettings?: ICartAddDialog };
}

export interface ICommonDialogValidationToggleAction extends Action {
    type: typeof COMMON_DIALOG_VALIDATION_TOGGLE;
    payload: { valid: boolean };
}
