
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ButtonType, ICartAddDialog } from "../../../interface";
export interface ICommonDialogState extends ICartAddDialog {
    open: boolean;
    isValid: boolean;
}

export const STATIC_INITIAL_STATE: ICartAddDialog = {
    title: "",
    content: undefined,
    successBtnLabel: "",
    successBtnType: ButtonType.DEFAULT,
    successOnClick: undefined,
    cancelBtnLabel: "",
    formId: undefined,
};

const initialState: ICommonDialogState = {
    open: false,
    isValid: false,
    ...STATIC_INITIAL_STATE,
};

const commonDialogSlice = createSlice({
    name: "commonDialogReducer",
    initialState,
    reducers: {
        commonDialogToggleAction(
            state: ICommonDialogState,
            action: PayloadAction<{ dialogSettings: ICartAddDialog | null }>
        ) {
            const { dialogSettings } = action.payload;
            const { open } = state;
            const currentSettings = dialogSettings || STATIC_INITIAL_STATE;
            state.open = !open;
            state.isValid = dialogSettings?.isValid || false;
            state.title = currentSettings.title;
            state.content = currentSettings.content;
            state.successBtnLabel = currentSettings.successBtnLabel;
            state.successBtnType = currentSettings.successBtnType;
            state.successOnClick = currentSettings.successOnClick;
            state.cancelBtnLabel = currentSettings.cancelBtnLabel;
            state.formId = currentSettings.formId;
        },
        commonDialogValidationToggleAction(
            state,
            action: PayloadAction<{ valid: boolean }>
        ) {
            const { valid } = action.payload;
            state.isValid = valid;
        },
    },
});

export const { commonDialogToggleAction, commonDialogValidationToggleAction } =
    commonDialogSlice.actions;
export default commonDialogSlice.reducer;
