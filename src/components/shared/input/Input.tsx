import React, { InputHTMLAttributes } from "react";

import styles from "./index.module.css";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input: React.FC<IProps> = (props) => {
    const {
        label,
        disabled,
        required,
        type,
        pattern,
        value,
        placeholder,
        min,
        minLength,
        onChange,
    } = props;

    return (
        <label className={styles.customInput}>
            <p className={styles.label}>
                {label}
                {required && <span className={styles.requiredMark}>*</span>}
            </p>
            <input
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                required={required}
                className={styles.input}
                type={type}
                value={value}
                pattern={pattern}
                min={min}
                minLength={minLength}
            />
        </label>
    );
};

export default Input;
