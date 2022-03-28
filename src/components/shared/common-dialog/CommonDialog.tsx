import React, { useCallback } from "react";
import { DEFAULT } from "../../../const";
import { ButtonType } from "../../../interface";
import { commonDialogToggleAction } from "../../../redux/actions/commonDialogAction";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Button from "../button";
import CrossIcon from "../icons/cross-icon";
import Overlay from "../overlay";

import styles from "./index.module.css";

const CommonDialog: React.FC = () => {
    const dispatch = useAppDispatch();
    const {
        open,
        title,
        content,
        successBtnLabel,
        cancelBtnLabel,
        successBtnType,
        successOnClick,
        isValid,
        formId
    } = useAppSelector((state) => state.commonDialog);

    const onDialogToggle = useCallback(() => dispatch(commonDialogToggleAction()), [dispatch]);

    return (
        <>
            {open ? (
                <Overlay>
                    <div className={styles.dialog}>
                        <header className={styles.header}>
                            <h3>{title}</h3>
                            <Button
                                type={ButtonType.DEFAULT}
                                onClick={onDialogToggle}
                                icon={
                                    <CrossIcon
                                        color={DEFAULT}
                                        width={1}
                                        height={1}
                                    />
                                }
                            />
                        </header>
                        <div className={styles.content}>{content}</div>
                        <div className={styles.controls}>
                            {cancelBtnLabel && (
                                <Button
                                    type={ButtonType.DEFAULT}
                                    hasBorder={true}
                                    label={cancelBtnLabel}
                                    onClick={onDialogToggle}
                                />
                            )}
                            {successBtnLabel && (
                                <Button
                                    form={formId}
                                    type={successBtnType}
                                    hasBorder={true}
                                    label={successBtnLabel}
                                    disabled={!isValid}
                                    onClick={successOnClick}
                                />
                            )}
                        </div>
                    </div>
                </Overlay>
            ) : null}
        </>
    );
};

export default CommonDialog;
