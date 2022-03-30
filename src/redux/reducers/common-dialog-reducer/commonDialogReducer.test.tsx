import { AnyAction } from "@reduxjs/toolkit";
import { ButtonType, ICartAddDialog } from "../../../interface";
import reducer, {
    commonDialogToggleAction,
    commonDialogValidationToggleAction,
    ICommonDialogState,
    STATIC_INITIAL_STATE,
} from "./commonDialogReducer";

const initialState: ICommonDialogState = {
    ...STATIC_INITIAL_STATE,
    open: false,
    isValid: false,
};

test("should return the initial state", () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(initialState);
});

test("should return updated state if received dialog settings", () => {
    const passedParams: ICartAddDialog = {
        title: "Checkout",
        successBtnLabel: "Ok",
        successBtnType: ButtonType.DEFAULT,
        cancelBtnLabel: "Cancel",
        content: <div></div>,
        successOnClick: () => {},
        isValid: true,
    };
    expect(
        reducer(
            undefined,
            commonDialogToggleAction({ dialogSettings: passedParams })
        )
    ).toEqual({
        ...passedParams,
        open: true,
    });
});

test("should return updated state if do not received dialog settings", () => {
    const previousState: ICommonDialogState = {
        title: "title",
        successBtnLabel: "Ok",
        successBtnType: ButtonType.DEFAULT,
        cancelBtnLabel: "Not ok",
        content: <div></div>,
        successOnClick: () => {},
        isValid: true,
        open: true,
    };
    expect(
        reducer(
            previousState,
            commonDialogToggleAction({ dialogSettings: null })
        )
    ).toEqual({
        ...initialState,
        open: false,
    });
});

test("should return updated valid value", () => {
    const previousState: ICommonDialogState = {
        title: "title",
        successBtnLabel: "Ok",
        successBtnType: ButtonType.DEFAULT,
        cancelBtnLabel: "Not ok",
        content: <div></div>,
        successOnClick: () => {},
        isValid: false,
        open: true,
    };
    expect(
        reducer(
            previousState,
            commonDialogValidationToggleAction({ valid: true })
        )
    ).toEqual({
        ...previousState,
        isValid: true,
    });
});
