// import { BASIC_TYPE } from "../action-types";

import { COMMON_DIALOG_TOGGLE } from "../action-types";

// const basicAction = (value: number) => ({
//     type: BASIC_TYPE,
//     payload: {
//         basicPayload: value,
//     },
// });

const commonDialogToggleAction = () => ({
    type: COMMON_DIALOG_TOGGLE,
});

export { commonDialogToggleAction };
