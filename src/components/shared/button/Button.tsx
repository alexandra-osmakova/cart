import React, { ButtonHTMLAttributes } from "react";

import styles from "./index.module.css";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: JSX.Element;
    label?: string;
    hasBorder?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IProps> = (props) => {
    const { icon, label, hasBorder, type, disabled, onClick } = props;

    return (<>
        {
            icon || label ?
                (<button onClick={onClick} className={`${styles.button} ${icon ? styles.buttonWithIcon : ''} ${hasBorder ? styles.buttonWithBorder : ''}`} type={type} disabled={disabled}>
                    {icon && icon}
                    {label && <span className={styles.label}>{label}</span>}
                </button>)
                : null
        }
    </>)
};

export default Button;