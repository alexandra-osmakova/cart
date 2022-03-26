import React from "react";
import { DEFAULT } from "../../../const";
import { ButtonType } from "../../../interface";
import Button from "../button";
import CrossIcon from "../icons/cross-icon";
import Overlay from "../overlay";

import styles from "./index.module.css";

interface IProps {
    title: string;
    content?: JSX.Element;
    successBtnLabel: string;
    cancelBtnLabel?: string;
    successBtnType?: ButtonType;
    successOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    cancelOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CommonDialog: React.FC<IProps> = (props) => {
    const {
        title,
        content,
        successBtnLabel,
        cancelBtnLabel,
        successBtnType,
        successOnClick,
        cancelOnClick,
    } = props;

    const closeDialog = () => {};

    return (
        // <>
        //     {content ? (
        //         <div className={styles.dialog}>
        //             <header className={styles.header}>
        //                 <h3>{title}</h3>
        //             </header>
        //             {content}
        //         </div>
        //     ) : null}
        // </>

        <Overlay>
            <div className={styles.dialog}>
                <header className={styles.header}>
                    <h3>{title}</h3>
                    <Button
                        type={ButtonType.DEFAULT}
                        onClick={cancelOnClick}
                        icon={
                            <CrossIcon color={DEFAULT} width={1} height={1} />
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
                            onClick={cancelOnClick}
                        />
                    )}
                    {successBtnLabel && (
                        <Button
                            type={successBtnType}
                            hasBorder={true}
                            label={successBtnLabel}
                            onClick={successOnClick}
                        />
                    )}
                </div>
            </div>
        </Overlay>
    );
};

export default CommonDialog;
