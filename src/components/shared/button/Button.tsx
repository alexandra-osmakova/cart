import React, { ButtonHTMLAttributes } from "react";
import { ButtonType } from "../../../interface";

import styles from "./index.module.css";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: JSX.Element;
    label?: string;
    hasBorder?: boolean;
    type: ButtonType;
}

const Button: React.FC<IButtonProps> = (props) => {
    const { icon, label, hasBorder, type, disabled, form, onClick } = props;

    return (
        <>
            {icon || label ? (
                <button
                    form={form}
                    onClick={onClick}
                    className={`${styles.button} ${
                        icon ? styles.buttonWithIcon : ""
                    } ${hasBorder ? styles.buttonWithBorder : ""}`}
                    type={type}
                    disabled={disabled}>
                    {icon && icon}
                    {label && <span className={styles.label}>{label}</span>}
                </button>
            ) : null}
        </>
    );
};

export default Button;
