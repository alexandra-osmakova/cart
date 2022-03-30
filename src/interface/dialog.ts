import { ButtonType } from "./button-type";

export interface ICartAddDialog {
    title: string;
    content: JSX.Element | undefined;
    successBtnLabel: string;
    successBtnType: ButtonType;
    successOnClick?:
        | ((e: React.MouseEvent<HTMLButtonElement>) => void)
        | undefined;
    cancelBtnLabel: string;
    formId?: string | undefined;
    isValid?: boolean;
}