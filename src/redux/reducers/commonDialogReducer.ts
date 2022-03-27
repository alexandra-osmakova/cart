import { COMMON_DIALOG_TOGGLE } from "../action-types";

interface ICommonDialogState {
    open: boolean
 }

const initialState: ICommonDialogState = {
    open: false,
};

const commonDialogReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case COMMON_DIALOG_TOGGLE: {
            const { open } = state;
            // const { basicPayload } = action.payload;
            return {
                ...state,
                open: !open
            };
        }
        default:
            return state;
    }
};

export default commonDialogReducer;
